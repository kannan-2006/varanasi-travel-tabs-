# Varanasi Interactive Tabs

Check out this interactive travel info tool for Varanasi. It shows how to build your own tabbed interface with Vanilla JavaScript, managing what shows up on the page and which tab looks active.

## ✨ Features

* **Dynamic Tab Switching:** Flip between different content sections instantly—no reloading.
* **State Indicators:** The active tab pops with a white background, while the others stay grey, so you always know where you are.
* **Responsive Layout:** Looks good on both phones and desktops. Uses Bootstrap 4’s grid, splitting content side-by-side on bigger screens.
* **Pre-initialized State:** When the page loads, the “About” tab is ready and visible; the others hide away using Bootstrap’s `d-none` class.

## 🛠️ Built With

* **HTML5:** For the page structure, including the tab buttons and content areas.
* **CSS3:** Custom colors for the tabs and the card backgrounds.
* **Bootstrap 4:** Used for the grid layout and display helpers like `d-none`, `d-block`, and `d-flex`.
* **Vanilla JavaScript:** Handles all the tab logic—click events, changing classes, and updating styles in one go.

## 🚀 How It Works

Here’s what’s happening under the hood:

1. **Selection:** JavaScript grabs all the tab buttons and the three content sections.
2. **Display Toggling:** Click a button, and the script sets that tab’s section to show up (`d-block`), hiding the rest (`d-none`).
3. **Styling Updates:** The clicked button turns white, the others switch back to grey—so it’s clear which tab’s active.

## 📂 Project Structure

* `Tabs.html`: Holds the city title, image, and the tab navigation.
* `Tabs.css`: Adds custom theme colors, button sizing, and rounded corners.
* `Tabs.js`: Contains the event listeners and logic for swapping sections.
