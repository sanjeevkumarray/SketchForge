🥷 SketchForge

SketchForge is a hand-drawn style sketching web app inspired by Excalidraw, built with React and TypeScript. It leverages Rough.js to give your drawings a natural, sketchy feel, combining functionality with a creative, interactive experience. This side project was designed to deepen my understanding of React, TypeScript, canvas rendering, and interactive user interfaces.

Note: The app is optimized for desktop; responsiveness is not the focus, as the emphasis was on functionality and learning.

📦 Technologies

Frontend: React.js, TypeScript, Vite

Canvas Rendering: Rough.js

Styling: CSS

Testing: Vitest, Cypress, Testing Library

🦄 Key Features

SketchForge provides a smooth and intuitive drawing experience with essential tools for creative expression:

Tool Selection: Draw using pencils, lines, rectangles, and text.

Move & Resize: Drag elements around and resize rectangles or lines with ease.

Text Editing: Click to add or modify text directly on the canvas.

Zoom & Pan: Zoom in/out with Ctrl + scroll or buttons, and pan using the Space bar or middle mouse button.

Undo/Redo: Fix mistakes instantly using keyboard shortcuts.

🎯 Keyboard Shortcuts
Action	Shortcut
Pan Canvas	Space + Drag / Middle Mouse
Undo	Ctrl + Z
Redo	Ctrl + Y / Ctrl + Shift + Z
Zoom In	Ctrl + +
Zoom Out	Ctrl + -
🧩 How It Works

Canvas Initialization:
A canvas is rendered using Rough.js as the foundation for all drawings.

Drawing & Editing:
Users can draw shapes, lines, or text, move elements, and resize them where applicable.

Undo/Redo System:
A custom useHistory hook tracks changes, enabling seamless undo and redo actions.

Interactive Canvas:
Freehand drawing, zooming, and panning create an engaging and user-friendly experience.

Testing:
End-to-end and component tests using Cypress and Testing Library ensure stable and reliable functionality.

🧠 Learning Highlights

Working on SketchForge taught me more than just coding—it helped me think logically, handle complex problems, and optimize user experience:

Custom Hooks & State Management: Building a useHistory hook improved my understanding of undo/redo logic and state tracking.

Canvas & Geometry: Calculating coordinates and points refined my accuracy and mathematical reasoning.

Rough.js Exploration: Learned to render hand-drawn effects and manipulate SVG paths dynamically.

Advanced Event Handling: Implemented smooth zooming, panning, and keyboard interactions.

React Rendering Insights: Applied useLayoutEffect for precise updates before DOM painting.

💡 Future Improvements

Expand color palette and text formatting options.

Add more shapes: circles, triangles, stars, etc.

Introduce eraser tool and additional drawing tools.

Implement dark/light themes.

Optimize TypeScript types to remove any usage in Rough.js elements.

Add more keyboard shortcuts for efficiency.

🚦 Running Locally

Clone the repository:

git clone <repo-url>


Install dependencies:

npm install
# or
yarn


Start the app:

npm run start
# or
yarn start


Open your browser and navigate to:

http://localhost:5173

🍿 Live Demo

Experience SketchForge live at: https://sketchforge.netlify.app

🎯 Summary

SketchForge is more than a drawing app—it’s a learning project that combines creativity, technical exploration, and problem-solving. Every feature represents a deep dive into React, TypeScript, and interactive canvas management.

Whether for fun, learning, or prototyping, SketchForge demonstrates how thoughtful design and careful logic come together to create a functional, interactive, and engaging application.
