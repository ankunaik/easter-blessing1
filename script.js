// Get DOM elements
const easterLink = document.getElementById('easterLink');
const easterModal = document.getElementById('easterModal');
const closeBtn = document.getElementById('closeBtn');

// Event Listeners
easterLink.addEventListener('click', function(e) {
    e.preventDefault();
    openEasterPage();
});

closeBtn.addEventListener('click', closeEasterPage);

// Close modal when clicking outside the content
easterModal.addEventListener('click', function(e) {
    if (e.target === easterModal) {
        closeEasterPage();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeEasterPage();
    }
});

// Function to open Easter page
function openEasterPage() {
    easterModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Function to close Easter page
function closeEasterPage() {
    easterModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Add some interactivity to the image
const jesusImage = document.getElementById('jesusImage');
if (jesusImage) {
    jesusImage.addEventListener('click', function() {
        // You can add any additional interaction here
        console.log('Image clicked');
    });
}

// Log when page is loaded
console.log('Easter page script loaded successfully');
