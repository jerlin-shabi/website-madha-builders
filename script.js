const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const largeImage = document.querySelector('.large-image');
const smallImage = document.querySelector('.small-image');

let currentIndex = 1; // Index of the currently displayed image

// Function to update the image source based on the current index
function updateImages() {
  largeImage.src = `./assets/img/img-${currentIndex}.jpg`;
  smallImage.src = `./assets/img/img-${currentIndex + 1}.jpg`;
}

// Event listener for the previous button
prevBtn.addEventListener('click', () => {
  if (currentIndex > 1) {
    currentIndex -= 1;
    updateImages();
  }
});

// Event listener for the next button
nextBtn.addEventListener('click', () => {
  if (currentIndex < 9) { // Assuming you have 10 images in total
    currentIndex += 1;
    updateImages();
  }
});

// Initial image setup
updateImages();
