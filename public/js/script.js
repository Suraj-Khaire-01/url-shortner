document.addEventListener('DOMContentLoaded', () => {
  // Get all copy buttons
  const copyButtons = document.querySelectorAll('.copy-btn');
  
  // Add click event listener to each button
  copyButtons.forEach(button => {
    button.addEventListener('click', async () => {
      // Get the URL to copy
      const url = button.getAttribute('data-url');
      
      try {
        // Use the modern Clipboard API
        await navigator.clipboard.writeText(url);
        
        // Change button text temporarily
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        
        // Reset button text after 2 seconds
        setTimeout(() => {
          button.textContent = originalText;
        }, 2000);
      } catch (err) {
        // Fallback to the old method if Clipboard API fails
        const tempInput = document.createElement('input');
        tempInput.value = url;
        document.body.appendChild(tempInput);
        
        tempInput.select();
        tempInput.setSelectionRange(0, 99999); // For mobile devices
        
        document.execCommand('copy');
        
        document.body.removeChild(tempInput);
        
        // Change button text temporarily
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        
        // Reset button text after 2 seconds
        setTimeout(() => {
          button.textContent = originalText;
        }, 2000);
      }
    });
  });
});