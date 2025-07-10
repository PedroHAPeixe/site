# Simple Website Course  
**Self-Instructional Course: Create a Simple Website Using HTML, CSS, and JavaScript**

## Course Overview  
This self-paced course will guide you through building a simple website using **HTML, CSS, and JavaScript**. By the end, you'll have a functional website you can customize.

## Module 1: Introduction to Web Development  
### Lesson 1: Understanding the Basics  
- What is a website?  
- How HTML, CSS, and JavaScript work together  
- **Tools needed**:  
  - Text Editor (VS Code, Sublime Text)  
  - Web Browser (Chrome, Firefox)  

### Lesson 2: Setting Up Your Workspace  
1. Install a code editor (recommend VS Code)  
2. Create a project folder  
3. Set up files:  
   - `index.html`  
   - `style.css`  
   - `script.js`  

## Module 2: Building the Structure with HTML  
### Lesson 3: HTML Fundamentals  
```html
<!DOCTYPE html>
<html>
<head>
    <title>My First Website</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
    </header>
    <main>
        <p>This is a simple website built with HTML, CSS, and JavaScript.</p>
    </main>
    <footer>
        <p>&copy; 2024 My Website</p>
    </footer>
    <script src="script.js"></script>
</body>
</html>
Module 3: Styling with CSS
Lesson 4: CSS Basics
css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

header {
    background-color: #333;
    color: white;
    padding: 1rem;
    text-align: center;
}

main {
    padding: 2rem;
}

footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 1rem;
    position: fixed;
    bottom: 0;
    width: 100%;
}
Module 4: Adding Interactivity with JavaScript
Lesson 5: JavaScript Basics
javascript
document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.querySelector('main');
    const button = document.createElement('button');
    button.textContent = 'Click Me!';
    button.addEventListener('click', function() {
        alert('Hello, welcome to my website!');
    });
    mainContent.appendChild(button);
});
