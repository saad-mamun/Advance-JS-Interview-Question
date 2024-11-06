//1. What is the DOM, and how does JavaScript interact with it?
Answer:
`The DOM (Document Object Model) is a programming interface for web documents. It represents the structure of a document (like an HTML page) as a tree of objects. 

Key Concepts of the DOM
1. Document Structure:

   i. The DOM represents an HTML document as a hierarchical tree structure, where each element is a node in the tree.
   ii. For instance, the <html> element is the root, and within it, there are child elements like <head>, <body>, and so on.
2. Nodes and Elements:

   i. Each item in the DOM tree is a node, which could be an element node (like <div>), attribute node (like id="header"), or text node (text within elements).
   ii. Nodes have parent-child relationships that define the structure of the document.`

`JavaScript Interacts with the DOM
   JavaScript can interact with the DOM to create, modify, or delete elements dynamically. This allows developers to create dynamic web pages that respond to user input, display changing data, and update without requiring a full page reload.

1. Selecting Elements
    i. document.getElementById(): Selects an element by its id attribute.
    ii. document.querySelector(): Selects the first element that matches a specified CSS selector.
    iii. document.querySelectorAll(): Selects all elements that match a specified CSS selector and returns them in a NodeList (similar to an array).`

// Example
const elements = document.querySelectorAll("p");
const element = document.querySelector(".my-class");
const element = document.getElementById("header");


`2. Modifying Elements-
Once an element is selected, you can modify its properties, such as its content, attributes, styles, and more.

   i. Changing Content: You can change the text or HTML content of an element using .textContent or .innerHTML.
`
//    Example
   element.textContent = "Hello, World!";
   element.innerHTML = "<strong>Hello, World!</strong>";
`
   ii. Updating Attributes: Use .setAttribute() to update an attribute or .getAttribute() to retrieve an attribute.`

//    Example
      element.setAttribute("class", "new-class");
      const id = element.getAttribute("id");

  ` iii. Modifying Styles: Access the .style property to change CSS styles directly.`

//  Example
     element.style.color = "blue";
     element.style.fontSize = "20px";


`3. Creating and Removing Elements
JavaScript can also create new elements or remove existing ones:
     
    i. Creating Elements: Use document.createElement() to create a new DOM element.`
// Example
    const newDiv = document.createElement("div");
    newDiv.textContent = "I'm a new div!";
    document.body.appendChild(newDiv);

    ii. Removing Elements: Use .removeChild() or .remove() to remove an element.
// Example
    const parent = document.getElementById("parent-element");
    parent.removeChild(element);
    element.remove();


`4. Event Handling
JavaScript can interact with the DOM to handle events like clicks, form submissions, mouse movements, etc. Events allow dynamic interactivity on a web page.
`
element.addEventListener("click", () => {
    console.log("Element was clicked!");
});



//2. Explain how to select elements in the DOM using methods like getElementById, querySelector, and querySelectorAll.
Answer:
`In JavaScript, you can select elements in the DOM to manipulate or interact with them. 

1. getElementById
The getElementById method selects an element by its unique id attribute. This method returns the first matching element or null if no element with that ID exists.`
// Example
const header = document.getElementById("header");
console.log(header.textContent); 

`2. querySelector
The querySelector method selects the first element that matches a specified CSS selector. This method is versatile because you can use any CSS selector, such as an ID, class, tag, or attribute.`
// Example
const content = document.querySelector(".content");
console.log(content.textContent);

`3. querySelectorAll
The querySelectorAll method selects all elements that match a specified CSS selector and returns a NodeList (a collection of nodes that is similar to an array but not exactly the same). `
// Example
const contentItems = document.querySelectorAll(".content");
contentItems.forEach(item => {
    console.log(item.textContent);
});
// Outputs:
// "Content 1"
// "Content 2"



//3. How do event listeners work in JavaScript? Explain addEventListener.
Answer:
`In JavaScript, event listeners allow you to respond to user interactions, such as clicks, key presses, mouse movements, and other actions. The addEventListener method is used to attach an event handler to an element without overwriting existing event handlers, enabling multiple handlers for the same event on the same element.

addEventListener Works
The addEventListener method allows you to "listen" for an event on an element and then execute a function when that event happens. This is key for making web pages interactive and responsive to user input.

Common Event Types-
Some frequently used events include:

   click: Fires when an element is clicked.
   mouseover: Fires when the mouse pointer hovers over an element.
   keydown: Fires when a key is pressed on the keyboard.
   submit: Fires when a form is submitted.
   load: Fires when the document or an asset has loaded.

Example of Event Delegation
   Event delegation allows you to use a single event listener on a parent element to handle events for multiple child elements. This approach is efficient, especially for elements added dynamically to the DOM.`

// Example 
const list = document.getElementById("list");

list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        console.log("List item clicked:", event.target.textContent);
    }
});



//4. What is event delegation, and why is it useful?
Answer:
`Event delegation is a technique in JavaScript where you add a single event listener to a parent element to manage events for its child elements, instead of adding separate listeners to each child. This technique leverages event bubbling, where events triggered on child elements "bubble up" through their ancestors, allowing the parent to detect events on its children.

Event Delegation Works
   When an event is triggered on a child element, it first travels down to the target element (the capturing phase) and then back up through its ancestors (the bubbling phase). Event delegation uses this bubbling phase, allowing the parent element to "catch" the event triggered on any of its children.
`
// Example
const list = document.getElementById("list");

list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") { // Ensure the target is an <li> element
        console.log("List item clicked:", event.target.textContent);
    }
});

// Project: Create a list where clicking on each list item logs its content. Use event delegation.
`To create a list where clicking on each item logs its content using event delegation, we’ll set up a single event listener on the parent <ul> element. This listener will detect clicks on each <li> child and log the content of the clicked item.`
// Example
// Select the parent <ul> element
const itemList = document.getElementById("list");

// Add an event listener to the parent element
itemList.addEventListener("click", (event) => {
    // Check if the clicked element is an <li>
    if (event.target.tagName === "LI") {
        // Log the content of the clicked <li> element
        console.log("Clicked item:", event.target.textContent);
    }
});


//5. What is the difference between innerHTML, textContent, and innerText?
Answer:
`In JavaScript, innerHTML, textContent, and innerText are properties used to manipulate the contents of DOM elements, but each behaves differently in terms of what it retrieves, sets, and renders. 

1. innerHTML
    Description: innerHTML retrieves or sets the HTML content of an element, including all HTML tags and nested elements.
   Use Cases: Often used when you want to insert or manipulate entire HTML structures within an element.
   HTML Parsing: When setting innerHTML, any HTML tags within the string are parsed, and the corresponding elements are created in the DOM.
   Security Considerations: Setting innerHTML can introduce security risks, such as cross-site scripting (XSS) if not handled carefully with user-generated content.`
// Example
const div = document.getElementById("myDiv");
div.innerHTML = "<strong>Hello</strong> <em>world</em>";
console.log(div.innerHTML); 

`2. textContent
    Description: textContent retrieves or sets the text content of an element and all its descendants, but it ignores any HTML tags.
    Use Cases: Often used when you want to extract or set only the text from an element, without any formatting or nested elements.
    Performance: Generally faster than innerHTML because it doesn’t parse HTML; it simply retrieves or modifies text.
    Security Considerations: textContent is safer for displaying user-generated content because it does not interpret HTML, preventing potential XSS attacks.`
// Example
const div = document.getElementById("myDiv");
div.textContent = "<strong>Hello</strong> world";
console.log(div.textContent);

`3. innerText
    Description: innerText retrieves or sets the visible text content of an element. It takes into account CSS styling, such as display: none and visibility: hidden, and excludes text from hidden elements.
    Use Cases: Useful when you want to get only the visible text as it appears on the page. Unlike textContent, innerText may not include all text if parts are hidden by CSS.
    Performance: Slightly slower than textContent because it takes CSS visibility into account and forces a reflow to ensure it retrieves the rendered text.
    Differences in Rendering: innerText respects line breaks, while textContent may not.`
// Example
const div = document.getElementById("myDiv");
div.innerText = "Hello\nworld";
console.log(div.innerText);


//6. Explain how you can manipulate CSS styles of an element using JavaScript.
Answer:
`In JavaScript, you can manipulate the CSS styles of an element directly through the style property or by using the classList property to add, remove, or toggle classes on an element. 

1. Manipulating Styles with the style Property-
 The style property allows you to directly set or modify inline styles on an element, which overrides any CSS defined in external stylesheets or <style> blocks.

2. Manipulating Multiple Styles with style.cssText
 If you want to set multiple styles at once, you can use the cssText property, which takes a string of CSS properties.

3. Toggling Styles with the classList Property
  classList property allows you to work with CSS classes on an element. It is useful for applying pre-defined styles from CSS classes rather than adding inline styles.

   add(): Adds a class to the element.
   remove(): Removes a class from the element.
   toggle(): Adds the class if it’s not present; removes it if it is.
   contains(): Checks if the element has a specific class.

4. Accessing Computed Styles with getComputedStyle
   Sometimes, you may want to read an element’s effective style as computed by the browser, including styles from external CSS, inline styles, and inherited styles. The getComputedStyle function returns an object with all the computed CSS properties for an element.`

// Example: Dynamic Styling Based on User Actions
const box = document.getElementById("myBox");

box.addEventListener("click", () => {
    // Toggle between red and blue background color
    if (box.style.backgroundColor === "red") {
        box.style.backgroundColor = "blue";
    } else {
        box.style.backgroundColor = "red";
    }
});



//7. How do you traverse the DOM? Explain parentNode, firstChild, lastChild, etc.
`In JavaScript, DOM traversal allows you to navigate through elements and nodes within the Document Object Model (DOM) tree. There are multiple properties and methods that help traverse different parts of the DOM, such as moving from a parent to its children, siblings, or ancestors. 

Key Properties for DOM Traversal

1. parentNode
   Description: Refers to the immediate parent of the current node.
   Use Case: Useful when you want to access or manipulate an element’s parent.`
// Example
const child = document.getElementById("myChild");
console.log(child.parentNode); 

`2. firstChild
   Description: Refers to the first child of the current node, including any text nodes (like whitespace).
   Use Case: Use to access the first child node directly. Keep in mind that firstChild may be a text node (e.g., whitespace) if it exists before other elements.`
// Example
const parent = document.getElementById("myParent");
console.log(parent.firstChild);

`3. lastChild
   Description: Refers to the last child of the current node, which may be a text node.
   Use Case: Use to access the last child node directly.`
// Example
const parent = document.getElementById("myParent");
console.log(parent.lastChild);

`4. nextSibling
   Description: Refers to the next sibling of the current node, including text nodes.
   Use Case: Use to move to the next sibling in the DOM tree.
`
// Example
const element = document.getElementById("myElement");
console.log(element.nextSibling); 

`5. previousSibling
   Description: Refers to the previous sibling of the current node, including text nodes.
   Use Case: Use to move to the previous sibling in the DOM tree.`
// Example
const element = document.getElementById("myElement");
console.log(element.previousSibling);


//8. What is the purpose of preventDefault() and stopPropagation() in event handling?
`In JavaScript event handling, preventDefault() and stopPropagation() are two methods used to control the behavior of events. They serve different purposes:

   preventDefault(): Prevents the default action associated with an event.
   stopPropagation(): Stops the event from propagating (bubbling) up or down the DOM tree.

1. preventDefault()
      Purpose: preventDefault() stops the default behavior that the browser would normally execute when an event occurs. For example, it can prevent a link from navigating to a new URL or prevent a form from submitting.

      Use Case: Use preventDefault() when you want to handle the action in a custom way, or when you don’t want the browser to perform its default behavior.`
      // Example
      const link = document.getElementById("myLink");

      link.addEventListener("click", (event) => {
          event.preventDefault(); // Prevents the link from navigating
          console.log("Link click prevented");
      });
      
`2. stopPropagation()
      Purpose: stopPropagation() prevents the event from propagating (or "bubbling") up to parent elements in the DOM tree. By default, events bubble up from the target element to its ancestors.

      Use Case: Use stopPropagation() when you want to limit the event’s scope to the target element only, without triggering event listeners on ancestor elements.`
// Example
const parent = document.getElementById("parent");
const child = document.getElementById("child");
const grandchild = document.getElementById("grandchild");

parent.addEventListener("click", () => console.log("Parent clicked"));
child.addEventListener("click", () => console.log("Child clicked"));
grandchild.addEventListener("click", (event) => {
    console.log("Grandchild clicked");
    event.stopPropagation();


   //  Project: Create a form that prevents submission and logs a message instead.
   const form = document.getElementById("myForm");


form.addEventListener("submit", (event) => {
    // Prevent the default form submission
    event.preventDefault();
    console.log("Form submission prevented. Form data not sent.");
});