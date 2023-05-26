//your JS code here. If required.
// Function to get the width and height of the window
 // Function to update the width and height of the window in the webpage
    function updateWindowSize() {
      var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      var windowSizeElement = document.getElementById('windowSize');
      windowSizeElement.textContent = 'Width: ' + width + 'px, Height: ' + height + 'px';
    }

    // Initial call to update the window size
    updateWindowSize();

    // Event listener for window resize
    window.addEventListener('resize', updateWindowSize);
