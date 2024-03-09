function setupImageGallery(totalImages, largeImageClass, smallImageClass) {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const largeImage = document.querySelector(largeImageClass);
  const smallImage = document.querySelector(smallImageClass);

  let currentIndex = 1; // Index of the currently displayed image

  // Function to update the image source based on the current index
  function updateImages() {
    // Ensure currentIndex is within the range of images
    currentIndex = (currentIndex + totalImages - 1) % totalImages + 1;

    largeImage.src = `./assets/img/img-${currentIndex}.jpg`;
    smallImage.src = `./assets/img/img-${(currentIndex % totalImages) + 1}.jpg`;
  }

  // Event listener for the previous button
  prevBtn.addEventListener('click', () => {
    currentIndex -= 1;
    updateImages();
  });

  // Event listener for the next button
  nextBtn.addEventListener('click', () => {
    currentIndex += 1;
    updateImages();
  });

  // Initial image setup
  updateImages();
}

// Call the function with parameters
setupImageGallery(19, '.large-image', '.small-image');
