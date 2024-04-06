// Get the modal
var modal = document.getElementById("modal");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// Get all images with class="gallery-image"
var images = document.getElementsByClassName("gallery-image");

// Loop through each image and add click event listener
Array.from(images).forEach(function(image) {
    image.addEventListener("click", function() {
        modal.style.display = "block";
        var modalImg = document.getElementById("modal-content");
        modalImg.src = this.src;
        modalImg.dataset.index = this.dataset.index;
    });
});

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Handle keyboard events for navigation
document.onkeydown = function(e) {
    e = e || window.event;
    if (modal.style.display == "block") {
        if (e.keyCode == "37") { // Left arrow key
            var currentIndex = parseInt(document.getElementById("modal-content").dataset.index);
            var prevIndex = (currentIndex - 1 + images.length) % images.length;
            document.getElementById("modal-content").src = images[prevIndex].src;
            document.getElementById("modal-content").dataset.index = prevIndex;
        } else if (e.keyCode == "39") { // Right arrow key
            var currentIndex = parseInt(document.getElementById("modal-content").dataset.index);
            var nextIndex = (currentIndex + 1) % images.length;
            document.getElementById("modal-content").src = images[nextIndex].src;
            document.getElementById("modal-content").dataset.index = nextIndex;
        } else if (e.keyCode == "27") { // Escape key
            modal.style.display = "none";
        }
    }
};
