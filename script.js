const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');
const aboutButton = document.querySelector('.to-offers');
let currentSectionIndex = 0;

// Add a flag to prevent multiple scroll events
let isScrolling = false;

// Function to handle the wheel event
function handleWheel(event) {
    if (!isScrolling) {
        isScrolling = true;
        if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
            currentSectionIndex += 1;
        } else if (event.deltaY < 0 && currentSectionIndex > 0) {
            currentSectionIndex -= 1;
        }
        scrollToCurrentSection();
        setTimeout(() => {
            isScrolling = false;
        }, 500); // Delay to enable scrolling after 1 second
    }
}

// Add the wheel event listener
window.addEventListener('wheel', handleWheel);

navLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        currentSectionIndex = index;
        scrollToCurrentSection();
    });
});

aboutButton.addEventListener('click', (e) => {
    currentSectionIndex = 1;
    scrollToCurrentSection();
});

function scrollToCurrentSection() {
    sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
    highlightHeaderLink(currentSectionIndex);
}

function highlightHeaderLink(index) {
    navLinks.forEach((link) => {
        link.classList.remove('active-link');
    });
    navLinks[index].classList.add('active-link');
}

//scrollToCurrentSection(); // scroll to main section on entering site