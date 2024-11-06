//1. What is the Browser Object Model (BOM) in JavaScript?
Answer:
`The Browser Object Model (BOM) in JavaScript is a collection of objects that represents the browser's environment outside of the web page’s content. The BOM allows JavaScript to interact with the browser itself, providing functionalities such as controlling the browser window, handling the browser history, managing cookies, and more. 

Common Uses of the -

   Managing the Browser Window: The window object allows you to open, close, resize, and move browser windows (with some limitations for security reasons).

   Getting Browser Information: Using navigator, you can retrieve information about the user's browser, OS, and settings, which can be useful for analytics or custom behavior.

   URL Manipulation and Redirection: Through the location object, you can easily redirect users, update the URL, or reload the page.

   Browser Navigation: With history, you can control navigation within the user's session history, giving the user a more dynamic experience.

   Adapting Content Based on Screen Size: Using screen properties, you can adapt content to the user’s screen size or resolution, especially in responsive web design.

`

//2. How does window differ from document?
Answer:
`In JavaScript, the window and document objects represent different parts of the browser environment, each with distinct roles.

1. window Object

 i. Description: The window object represents the entire browser window and all the objects within it. It’s the global context for all JavaScript code running in the browser.

 ii. Scope: Everything in the BOM (Browser Object Model) is part of window.

 iii. Features:
   A. Manages browser-related functions and methods, such as alert(), confirm(), and setTimeout().

   B. Contains information about the browser itself, accessible through sub-objects like navigator, location, history, and screen.

   C. Holds global variables and functions, so variables and functions declared globally (i.e., not within a function) are properties of window.

   D. The window object can access the document directly as a property (window.document).`

// Example
console.log(window.innerWidth);  // Logs the viewport width
console.log(window.location.href); // Logs the current URL
console.log(window.document.title); // Logs the title of the document


`2. document Object
  i. Description: The document object represents the webpage’s content, structure, and elements — essentially the HTML document.

  ii. Scope: Everything in the DOM (Document Object Model) is part of document.

  iii. Features:
    A. Contains methods and properties to select, manipulate, and interact with HTML elements, such as getElementById(), querySelector(), createElement(), and innerHTML.

   B. Represents the structure of the webpage in a hierarchical tree format (DOM tree), allowing access to all HTML elements and attributes.

   C. The document object doesn’t directly handle window-level properties like location or history.`

// Example
const title = document.title; // Gets the title of the document
const mainDiv = document.getElementById("main"); // Selects an element with ID 'main'
// Manipulating content
document.body.style.backgroundColor = "lightblue";


//3. Explain how localStorage, sessionStorage, and cookies work and their differences.
Answer:
`localStorage, sessionStorage, and cookies are all mechanisms for storing data on the client-side in a web browser. While they serve similar purposes, they differ in storage limits, expiration, accessibility, and intended use.

1. localStorage
  Description: localStorage allows you to store key-value pairs in the browser with no expiration. Data persists even after the browser is closed and remains until explicitly deleted.

  Storage Limit: Typically around 5-10 MB (varies by browser).

  Lifetime: Data remains indefinitely unless manually cleared by the user or via JavaScript.

  Scope: Data is accessible only to the domain that created it, across all pages on that domain.`

// Usage Example
// Storing data
localStorage.setItem("username", "Mamun");

// Retrieving data
const user = localStorage.getItem("username"); // "Mamun"

// Removing data
localStorage.removeItem("username");


`2. sessionStorage
  Description: sessionStorage also allows you to store key-value pairs, but the data is only available for the duration of the page session.

  Storage Limit: Similar to localStorage, around 5 MB.

  Lifetime: Data is cleared when the page session ends — this occurs when the browser or tab is closed, or if the user navigates away from the page. However, data persists when refreshing the page.

  Scope: Data is accessible only within the page session and cannot be accessed across different tabs or windows.`

// Usage Example
// Storing data
sessionStorage.setItem("sessionID", "12345");

// Retrieving data
const session = sessionStorage.getItem("sessionID"); // "12345"

// Removing data
sessionStorage.removeItem("sessionID");

`3. Cookies
  Description: Cookies are small pieces of data stored as text files on the client-side. They are primarily used for tracking, user identification, and storing preferences. Unlike localStorage and sessionStorage, cookies can be sent to the server with each HTTP request, allowing server-side access to cookie data.

  torage Limit: Typically around 4 KB per cookie (with limits on the number of cookies per domain).

  Lifetime: Cookies have an expiration date and are deleted automatically when they expire. If no expiration date is set, cookies are deleted when the browser session ends.

  Scope: Cookies can be accessed across pages on the same domain and subdomains (depending on the configuration).
`
// Usage Example
// Setting a cookie (expires in 7 days)
document.cookie = "username=Alice; expires=" + new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString();

// Retrieving cookies
console.log(document.cookie); // Outputs all cookies in "key=value; key2=value2" format


//Project: Store and retrieve user preferences (like theme) using localStorage.

// Select the toggle button
const themeToggleButton = document.getElementById("theme-toggle");


const savedTheme = localStorage.getItem("theme");

// If a saved theme exists, apply it to the body
if (savedTheme) {
    document.body.classList.add(savedTheme);
} else {
    document.body.classList.add("light-theme");
}

// Function to toggle between light and dark themes
function toggleTheme() {
    if (document.body.classList.contains("light-theme")) {
        document.body.classList.replace("light-theme", "dark-theme");
        localStorage.setItem("theme", "dark-theme");
    } else {
        // Switch to light theme
        document.body.classList.replace("dark-theme", "light-theme");
        localStorage.setItem("theme", "light-theme"); // Save preference
    }
}
// Event listener for the toggle button
themeToggleButton.addEventListener("click", toggleTheme);


//4.What is the purpose of the navigator object, and what properties does it have?
Answer:
`The navigator object in JavaScript provides information about the browser and the device being used to access the web page. Part of the Browser Object Model (BOM), navigator helps gather details like the browser type, version, device information, and user preferences. 

Key Properties of the navigator Object-

1. navigator.userAgent
  Provides a string that identifies the browser and its version, as well as information about the operating system.
  seful for detecting the browser and tailoring content or functionality accordingly.`

// Example
console.log(navigator.userAgent);

`2. navigator.platform
Returns the operating system and CPU architecture on which the browser is running (e.g., Win32, MacIntel, Linux x86_64).`

// Example
console.log(navigator.platform);

`3. navigator.language

  Provides the user’s preferred language as a string (e.g., en-US, fr-FR).
  Can be used to set default content language on a webpage`

//Example
console.log(navigator.language);


//5. How do window.open and window.close methods work in JavaScript?
Answer:
`The window.open and window.close methods in JavaScript allow developers to programmatically open and close browser windows or tabs. Here’s how each of these methods works and some important considerations:

1. window.open()
  The window.open() method opens a new browser window or tab and can be used to display a specific URL, customize window properties, and control how the new window behaves.`

//   Syntax
window.open(url, windowName, [windowFeatures]);

// Example
// Opens a new window with the specified URL and features
const newWindow = window.open("https://example.com", "_blank", "width=500,height=500");

// Opens a new window with a custom size
if (newWindow) {
    newWindow.focus(); // Brings the new window to the front
}


`2. window.close()
  The window.close() method closes the current browser window or tab. It can also be used to close a window that was opened with window.open().`

// Syntax
window.close();

// Example
// Open a new window and close it after 5 seconds
const newWindow = window.open("https://example.com", "_blank");

if (newWindow) {
    setTimeout(() => {
        newWindow.close(); // Close the new window
    }, 5000); // Close after 5 seconds
}


//6. Explain how to get the viewport width and height of a browser window using JavaScript.
Answer:
`To get the viewport width and height of a browser window using JavaScript, you can use the window.innerWidth and window.innerHeight properties. 

1. Using window.innerWidth and window.innerHeight
  window.innerWidth: Returns the viewport width in pixels.
  window.innerHeight: Returns the viewport height in pixels.`

//   Example
const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;

console.log("Viewport width:", viewportWidth);
console.log("Viewport height:", viewportHeight);

`2. Cross-Browser Compatibility: 

    document.documentElement.clientWidth and clientHeight

    For additional compatibility with older browsers, you can use document.documentElement.clientWidth and document.documentElement.clientHeight, which provide the dimensions of the viewport based on the <html> element.
`
// Combined Approach for Cross-Browser Compatibility

function getViewportSize() {
    const width = window.innerWidth || document.documentElement.clientWidth;
    const height = window.innerHeight || document.documentElement.clientHeight;
    return { width, height };
}

const viewportSize = getViewportSize();
console.log("Viewport width:", viewportSize.width);
console.log("Viewport height:", viewportSize.height);

// Project: Create a function that logs the window’s size whenever it’s resized.

`Here's a simple project that creates a function to log the window's size whenever it’s resized. This function will use the resize event on the window object and log the updated viewport width and height each time the window is resized.
`
// Example JavaScript Code

// Function to log the current window size
function logWindowSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    console.log(`Width: ${width}, Height: ${height}`);
}

// Event listener for window resize event
window.addEventListener("resize", logWindowSize);

// Initial log when the script runs
logWindowSize();


//7. What is the purpose of the setTimeout and setInterval functions?
Answer:
`The setTimeout and setInterval functions in JavaScript are used for timing-based operations. They help schedule code to run after a certain delay or repeatedly at specified intervals. Both functions are part of the Browser Object Model (BOM) and allow you to create delays and loops in your code without blocking other operations.

setTimeout
 The setTimeout function executes a function or a block of code once after a specified delay (in milliseconds).`

// Syntax
setTimeout(function, delay, arg1, arg2, ...);

// Example
setTimeout(() => {
    console.log("This message appears after 2 seconds.");
}, 2000);

`setInterval
 The setInterval function repeatedly executes a function or block of code at specified intervals (in milliseconds) until cleared.`

// Syntax
setInterval(function, interval, arg1, arg2, ...);

// Example
const intervalId = setInterval(() => {
    console.log("This message appears every second.");
}, 1000);


// Project: Create a clock that updates every second using setInterval.

`To create a clock that updates every second using setInterval, you can use JavaScript to update the time on the page by displaying the current time and updating it every second.`

// Example
// Function to format time with leading zeros for single digits
function formatTime(unit) {
    return unit < 10 ? '0' + unit : unit;
}

// Function to update the clock
function updateClock() {
    const now = new Date();

    // Get current hours, minutes, and seconds
    const hours = formatTime(now.getHours());
    const minutes = formatTime(now.getMinutes());
    const seconds = formatTime(now.getSeconds());

    // Display the time in the clock div
    const clock = document.getElementById('clock');
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

// Initial clock update
updateClock();

// Update the clock every second (1000 milliseconds)
setInterval(updateClock, 1000);



//8. How can you detect if a user is online or offline using the BOM?
Answer:
`You can detect if a user is online or offline using the Browser Object Model (BOM) by utilizing the navigator.onLine property along with the online and offline events.

1. Using navigator.onLine
The navigator.onLine property returns a boolean value that indicates whether the browser is connected to the internet:

  true: The user is online (connected to the internet).
  false: The user is offline (no internet connection).`

// Example
if (navigator.onLine) {
    console.log("The user is online.");
} else {
    console.log("The user is offline.");
}

`2. Using the online and offline events
  You can listen for changes to the online status by adding event listeners to the window object. The online event is triggered when the user’s network status changes to online, and the offline event is triggered when the status changes to offline.`

// Example
  window.addEventListener('online', () => {
    console.log("The user is now online.");
});

// Event listener for when the user goes offline
window.addEventListener('offline', () => {
    console.log("The user is now offline.");
});