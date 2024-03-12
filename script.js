function setupImageGallery(totalImages, largeImageClass, smallImageClass) {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const largeImage = document.querySelector(largeImageClass);
  const smallImage = document.querySelector(smallImageClass);

  let currentIndex = 1; // Index of the currently displayed image
  let slideInterval; // Variable to store the interval ID

  // Function to update the image source based on the current index
  function updateImages() {
    // Ensure currentIndex is within the range of images
    currentIndex = (currentIndex + totalImages - 1) % totalImages + 1;

    largeImage.src = `./assets/img/img-${currentIndex}.jpg`;
    smallImage.src = `./assets/img/img-${(currentIndex % totalImages) + 1}.jpg`;
  }

  // Function to go to the next image
  function goToNextImage() {
    currentIndex += 1;
    updateImages();
  }

  // Event listener for the previous button
  prevBtn.addEventListener('click', () => {
    currentIndex -= 1;
    updateImages();
  });

  // Event listener for the next button
  nextBtn.addEventListener('click', () => {
    goToNextImage();
  });

  // Function to start automatic sliding
  function startSlideInterval() {
    slideInterval = setInterval(goToNextImage, 4000);
  }

  // Function to stop automatic sliding
  function stopSlideInterval() {
    clearInterval(slideInterval);
  }

  // Set interval for automatic sliding initially
  startSlideInterval();

  // Clear interval and restart when mouse is over the gallery to prevent automatic sliding
  largeImage.addEventListener('mouseover', () => {
    stopSlideInterval();
  });

  // Restart interval when mouse leaves the gallery
  largeImage.addEventListener('mouseleave', () => {
    startSlideInterval();
  });

  // Initial image setup
  updateImages();
}

// Call the function with parameters
setupImageGallery(19, '.large-image', '.small-image');
