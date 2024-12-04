// Function to generate the navigation menu dynamically
function generateNavMenu() {
    let navContents = '<ul>';

    // Get all the sections on the page
    let sections = document.getElementsByTagName('section');

    // Loop through each section and generate a list item with a link for each one
    for (let i = 0; i < sections.length; i++) {
        let section = sections[i];
        // Create a list item with a link for each section
        navContents += `
            <li id="nav-${section.id}">
                <a href="#${section.id}" id="link-${section.id}">${section.dataset.nav}</a>
            </li>
        `;
    }

    navContents += '</ul>';

    // Create a nav element and set its inner HTML
    let navElement = document.createElement('nav');
    navElement.innerHTML = navContents;

    // Set the sticky position for the nav
    navElement.style.position = 'sticky';
    navElement.style.top = '0'; // Fix the nav bar at the top of the page

    // Add the nav to the beginning of the page
    document.body.insertBefore(navElement, document.body.firstChild);

    // Attach the event listener to each link
    let links = navElement.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', setActiveClassAndScroll);
    });
}

// Function to set an active class and scroll to the corresponding section when clicking a link
function setActiveClassAndScroll(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Remove the active class from all links
    let allLinks = document.querySelectorAll('nav a');
    allLinks.forEach(link => link.classList.remove('your-active-class'));

    // Add the active class to the clicked link
    event.target.classList.add('your-active-class');

    // Scroll to the section associated with the link
    let targetId = event.target.getAttribute('href').substring(1);
    let targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
}

// Function to identify and activate sections while scrolling
function makeActive() {
    let sections = document.getElementsByTagName("section");

    for (let section of sections) {
        const box = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

        // Define the activation point based on the viewport height (e.g., half the viewport)
        const value = viewportHeight / 2;

        if (box.top <= value && box.bottom >= value) {
            // Add the active class to the current section
            section.classList.add("active");

            // Add the active class to the corresponding nav link
            let nav = document.querySelector(`li#nav-${section.id}`);
            if (nav) {
                nav.classList.add("active-nav");
            }
        } else {
            // Remove the active class from other sections and nav links
            section.classList.remove("active");
            let nav = document.querySelector(`li#nav-${section.id}`);
            if (nav) {
                nav.classList.remove("active-nav");
            }
        }
    }
}

// Generate the navigation menu when the page loads
window.addEventListener('load', generateNavMenu);

// Call makeActive when the page is scrolled
window.addEventListener('scroll', makeActive);
