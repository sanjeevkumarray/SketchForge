🥷 SketchForge

SketchForge is a modern hand-drawn style sketching web application inspired by Excalidraw. Built with React and TypeScript, it combines intuitive functionality with a creative, sketchy aesthetic using Rough.js. This project showcases interactive canvas rendering and advanced front-end techniques, offering a smooth and enjoyable drawing experience.

🛠 Technologies Used

Frontend: React.js, TypeScript, Vite

Canvas Rendering: Rough.js

Styling: CSS

Testing: Vitest, Cypress, Testing Library

🌟 Features

SketchForge delivers a responsive and intuitive drawing experience with essential creative tools:

Drawing Tools: Pencil, line, rectangle, and text.

Move & Resize: Drag shapes or lines and adjust their size seamlessly.

Text Editing: Add or modify text directly on the canvas.

Zoom & Pan: Zoom with Ctrl + scroll or buttons; pan using the Space bar or middle mouse button.

Undo/Redo: Quickly correct mistakes with keyboard shortcuts.

⌨️ Keyboard Shortcuts
Action	Shortcut
Pan Canvas	Space + Drag / Middle Mouse
Undo	Ctrl + Z
Redo	Ctrl + Y / Ctrl + Shift + Z
Zoom In	Ctrl + +
Zoom Out	Ctrl + -
🧩 How It Works

Canvas Initialization:
The canvas uses Rough.js to create natural, hand-drawn visual effects for all elements.

Drawing & Editing:
Users can draw shapes, lines, or text, then move and resize them with ease.

Undo/Redo System:
A custom useHistory hook tracks all changes, enabling smooth undo and redo functionality.

Interactive Canvas:
Freehand drawing, zooming, and panning create a dynamic and engaging interface.

Testing:
Robust end-to-end and component tests using Cypress and Testing Library ensure stability and reliability.

🧠 Learning Highlights

Developing SketchForge provided deep insights into several advanced front-end concepts:

Custom Hooks & State Management: Built useHistory for undo/redo tracking.

Canvas & Geometry: Improved accuracy in coordinate calculations and element positioning.

Rough.js Exploration: Learned dynamic SVG manipulation for hand-drawn effects.

Advanced Event Handling: Implemented smooth zoom, pan, and keyboard interactions.

React Rendering Insights: Applied useLayoutEffect for precise DOM updates before painting.

💡 Future Enhancements

Add more shapes: circles, triangles, stars, etc.

Expand color palette and text formatting options.

Introduce an eraser tool and additional creative tools.

Implement dark/light themes for enhanced user experience.

Optimize TypeScript types for stronger type safety.

Add additional keyboard shortcuts for productivity.

🚀 Getting Started Locally

Clone the repository:

git clone <repo-url>


Install dependencies:

npm install
# or
yarn


Start the development server:

npm run start
# or
yarn start


Open your browser and visit:

http://localhost:5173

🍿 Live Demo

Explore SketchForge in action: https://sketchforge.netlify.app

SketchForge is more than just a drawing app—it’s a platform to unleash creativity, learn advanced web development techniques, and create beautiful hand-drawn designs effortlessly.

<img width="1918" height="858" alt="image" src="https://github.com/user-attachments/assets/70af1359-cf7e-4262-80c1-56da4159f8a8" />
