Ah, got it! You’re saying your README file isn’t displaying or working properly—maybe when viewed on GitHub or locally it looks messy or the formatting isn’t correct. Let’s go step by step to fix it.

Here are some observations and improvements:

---

### 1️⃣ Markdown Structure

Your README is mostly fine, but some parts could be structured better for GitHub Markdown:

* Use `##` for sections (like Features, Technologies, Installation).
* Use tables properly for shortcuts.
* Use backticks for commands.
* Keep images in proper markdown format.
* Add links with `[text](url)` format.

---

### 2️⃣ Example Fixed README

````markdown
# 🥷 SketchForge

SketchForge is a modern hand-drawn style sketching web application inspired by Excalidraw. Built with **React** and **TypeScript**, it combines intuitive functionality with a creative, sketchy aesthetic using **Rough.js**. This project showcases interactive canvas rendering and advanced front-end techniques, offering a smooth and enjoyable drawing experience.

---

## 🛠 Technologies Used

- **Frontend:** React.js, TypeScript, Vite  
- **Canvas Rendering:** Rough.js  
- **Styling:** CSS  
- **Testing:** Vitest, Cypress, Testing Library  

---

## 🌟 Features

SketchForge delivers a responsive and intuitive drawing experience with essential creative tools:

- **Drawing Tools:** Pencil, line, rectangle, and text  
- **Move & Resize:** Drag shapes or lines and adjust their size seamlessly  
- **Text Editing:** Add or modify text directly on the canvas  
- **Zoom & Pan:** Zoom with `Ctrl + scroll` or buttons; pan using `Space` or middle mouse button  
- **Undo/Redo:** Quickly correct mistakes with keyboard shortcuts  

---

## ⌨️ Keyboard Shortcuts

| Action        | Shortcut                  |
|---------------|--------------------------|
| Pan Canvas    | Space + Drag / Middle Mouse |
| Undo          | Ctrl + Z                  |
| Redo          | Ctrl + Y / Ctrl + Shift + Z |
| Zoom In       | Ctrl + +                  |
| Zoom Out      | Ctrl + -                  |

---

## 🧩 How It Works

1. **Canvas Initialization**  
   Uses Rough.js to create natural, hand-drawn visual effects.

2. **Drawing & Editing**  
   Users can draw shapes, lines, or text, then move and resize them with ease.

3. **Undo/Redo System**  
   A custom `useHistory` hook tracks all changes, enabling smooth undo and redo.

4. **Interactive Canvas**  
   Freehand drawing, zooming, and panning create a dynamic interface.

5. **Testing**  
   End-to-end and component tests with Cypress and Testing Library ensure stability.

---

## 🧠 Learning Highlights

- Custom Hooks & State Management: `useHistory` for undo/redo  
- Canvas & Geometry: Coordinate calculations and element positioning  
- Rough.js Exploration: Dynamic SVG manipulation  
- Advanced Event Handling: Smooth zoom, pan, keyboard interactions  
- React Rendering Insights: `useLayoutEffect` for precise DOM updates  

---

## 💡 Future Enhancements

- Add more shapes: circles, triangles, stars, etc.  
- Expand color palette and text formatting  
- Introduce an eraser tool  
- Dark/light theme support  
- Optimize TypeScript types  
- Additional keyboard shortcuts  

---

## 🚀 Getting Started Locally

Clone the repository:

```bash
git clone <repo-url>
````

Install dependencies:

```bash
npm install
# or
yarn
```

Start the development server:

```bash
npm run start
# or
yarn start
```

Open your browser at: [http://localhost:5173](http://localhost:5173)

---

## 🍿 Live Demo

Explore SketchForge: [https://sketchforge.netlify.app](https://sketchforge.netlify.app)

---

## 📷 Screenshot

![SketchForge Screenshot](https://github.com/user-attachments/assets/70af1359-cf7e-4262-80c1-56da4159f8a8)

Do you want me to do that next?
```
