// 1. Write code to allow visitors of the page to customize it to their liking. There is a
// form on the page that accepts a name (to be used in a greeting when the user visits
// the page) and a color picker to allow the user to choose their preferred background
// color/foreground color combination. Write the necessary code to capture these values
// when the form is submitted (prevent the default action on the form submission button to
// achieve this) and store these values in localStorage (so that it persists on the user’s
// computer and their preferences are saved indefinitely). Next, write a function to apply
// the preferences if they have been set and call it each time the page loads. You may
// also want to call this function again when the user saves their preferences to
// immediately apply them. Make sure you also notify the user somehow that the preferences
// were saved.

document.addEventListener("DOMContentLoaded", function() {
    // Get the form element by its ID
    const form = document.getElementById('preferences-form');
    // Get the input element for the user's name by its ID
    const nameInput = document.getElementById('name');
    // Get the input element for the background color by its ID
    const bgColorInput = document.getElementById('background-color');
    // Get the input element for the foreground color by its ID
    const fgColorInput = document.getElementById('foreground-color');
    // Get the element where the greeting will be displayed by its ID
    const greeting = document.getElementById('greeting');

    // Function to apply saved preferences
    function applyPreferences() {
        // Retrieve the saved name from localStorage
        const savedName = localStorage.getItem('name');
        // Retrieve the saved background color from localStorage
        const savedBgColor = localStorage.getItem('backgroundColor');
        // Retrieve the saved foreground color from localStorage
        const savedFgColor = localStorage.getItem('foregroundColor');

