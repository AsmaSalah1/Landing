# Landing Page Project

## Instructions

# HTML Layout:

The page consists of a <main> element containing multiple <section> tags, each representing a different content section (Section 1, Section 2, etc.).
There’s a <footer> at the bottom of the page with a copyright notice.
The <head> includes references to Google Fonts, custom stylesheets, and the main JavaScript file (app.js).
Sectioning:

Each <section> has an id attribute and a data-nav attribute for navigation, with the data-nav value representing the section name to display in the navigation menu.
Navigation:

A navigation menu is generated dynamically through JavaScript (generateNavMenu function) by iterating through all the sections and creating list items (<li>) with links pointing to each section.
Sticky Navigation:

The navigation menu is set to be sticky (fixed at the top) when scrolling, ensuring it remains visible as the user scrolls down the page.

# Smooth Scrolling:

When a user clicks a navigation link, it scrolls smoothly to the corresponding section, and the active class is added to highlight the selected section in the navigation.

# JavaScript Functions:

# generateNavMenu():

This function dynamically generates the navigation menu by iterating through all the sections on the page. It creates <ul> and <li> elements and adds them to a newly created <nav> element that is inserted at the top of the page.

# setActiveClassAndScroll(event):

When a navigation link is clicked, this function:
Prevents the default behavior of the anchor tag.
Removes the "your-active-class" from all other links.
Adds the "your-active-class" to the clicked link.
Smoothly scrolls the page to the corresponding section.

# makeActive():

This function tracks the sections as the user scrolls and determines which section is currently in view. When a section is scrolled into view (the top half of the viewport), it adds an "active" class to the section and highlights the corresponding navigation link.
The active section is highlighted with a different background and circle animations.

# CSS Styles:
# General Styling:

The body has a background gradient, and the text is styled with white text on a dark background.
Headings (h1, h2) use specific fonts and are styled with margins and borders.
The main element is given a margin to ensure the content is not touching the edges of the screen.
# Section Styling:

Each section is given a minimum height of 80vh (viewport height).
Sections are styled with background effects using pseudo-elements (::before, ::after), where circles are placed in random positions, and their opacity transitions.
# Navigation Styling:

The navigation menu is styled as a list with each item being clickable (menu__link). When hovered, the background changes, and a smooth transition effect is applied.
# Active Section Styles:

When a section is active, the background changes, and the background circles become visible and rotate. The section's background gradient also changes slightly to reflect the active state.
# Responsive Design:

The font size for headings adjusts for smaller screen sizes (media queries are used to increase the size of h1 on larger screens).
The .landing__container is given more padding and a max width for larger screens.

