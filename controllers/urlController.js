const validUrl = require('valid-url');
const Url = require('../models/url');
const generateShortUrl = require('../utils/generateShortUrl');

// @route   GET /
// @desc    Render home page
const homePage = async (req, res) => {
  try {
    const urls = await Url.find().sort({ createdAt: -1 });
    res.render('index', { urls, error: null });
  } catch (err) {
    console.error(err);
    res.render('index', { urls: [], error: 'Failed to fetch URLs' });
  }
};

// @route   POST /shorten
// @desc    Create short URL
const shortenUrl = async (req, res) => {
  const { longUrl } = req.body;
  const baseUrl = process.env.BASE_URL;

  // Check if the base URL is valid
  if (!validUrl.isUri(baseUrl)) {
    return res.render('index', { urls: [], error: 'Invalid base URL' });
  }

  // Check if the long URL is valid
  if (!validUrl.isUri(longUrl)) {
    const urls = await Url.find().sort({ createdAt: -1 });
    return res.render('index', { urls, error: 'Invalid URL format' });
  }

  try {
    // Check if the URL already exists in the database
    let url = await Url.findOne({ longUrl });

    if (url) {
      const urls = await Url.find().sort({ createdAt: -1 });
      return res.render('index', { urls, error: null });
    }

    // Create a new short URL code
    const urlCode = generateShortUrl();
    const shortUrl = `${baseUrl}/${urlCode}`;

    // Create a new URL object
    url = new Url({
      urlCode,
      longUrl,
      shortUrl,
      createdAt: new Date(),
    });

    // Save the URL to the database
    await url.save();

    // Return all URLs including the newly created one
    const urls = await Url.find().sort({ createdAt: -1 });
    res.render('index', { urls, error: null });
  } catch (err) {
    console.error(err);
    const urls = await Url.find().sort({ createdAt: -1 });
    res.render('index', { urls, error: 'Server error' });
  }
};

// @route   GET /:code
// @desc    Redirect to the long URL
const redirectUrl = async (req, res) => {
  try {
    const url = await Url.findOne({ urlCode: req.params.code });

    if (url) {
      // Increment the click count
      url.clicks += 1;
      await url.save();
      
      // Redirect to the long URL
      return res.redirect(url.longUrl);
    } else {
      return res.render('error', { error: 'URL not found' });
    }
  } catch (err) {
    console.error(err);
    res.render('error', { error: 'Server error' });
  }
};
module.exports = {
  homePage,
  shortenUrl,
  redirectUrl
};