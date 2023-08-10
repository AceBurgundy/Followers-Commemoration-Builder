import './html2canvas.js';

/**
 * Generate an array of image filenames with leading zeros.
 * @param {number} length - The length of the array.
 * @returns {string[]} An array of formatted image filenames.
 */
const images = Array.from({ length: 10 }, (_, i) => ("0" + i).slice(-2));

/**
 * Get a random image filename from the provided array.
 * @param {string[]} array - The array of image filenames.
 * @returns {string} A random image filename with its path.
 */
export function getRandomImage() {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    return `./assets/images/${randomImage}.jpg`;
}

/**
 * Set the display style property of an HTML element.
 * @param {HTMLElement} element - The HTML element to modify.
 * @param {string} display - The display value to set (e.g., "block", "none").
 */
export function setElementDisplay(element, display) {
    element.style.display = display;
}

/**
 * Set the inner HTML content of an HTML element.
 * @param {HTMLElement} element - The HTML element to modify.
 * @param {string} html - The HTML content to set.
 */
export function setElementInnerHTML(element, html) {
    element.innerHTML += html;
}

/**
 * Adjust the height of a template element based on the orientation.
 */
export function adjustTemplateHeight() {
    const template = document.getElementById("template");
    const templateWidth = template.offsetWidth;
    template.style.height = window.matchMedia("(orientation: portrait)").matches && templateWidth + "px";
}

/**
 * Create a link with a data URL and trigger its download.
 * @param {string} dataURL - The data URL of the image.
 * @param {string} filename - The desired filename for the downloaded image.
 */
export function createAndDownloadImage(dataURL, filename) {
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = filename;
    link.click();
}

/**
 * Get an HTML element by its ID.
 * @param {string} id - The ID of the HTML element to retrieve.
 * @returns {HTMLElement} The HTML element with the specified ID.
 */
export function element(id) {
    return document.getElementById(id);
}

/**
 * Query for an HTML element using a CSS selector.
 * @param {string} argument - The CSS selector to query for.
 * @returns {HTMLElement} The first HTML element matching the selector.
 */
export function query(argument) {
    return document.querySelector(argument);
}
