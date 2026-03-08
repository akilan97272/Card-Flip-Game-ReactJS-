# 🃏 Card Flip Game in ReactJS

Learning **ReactJS** in an enjoyable way 😁

This project is a simple **memory card matching game** built using **ReactJS**.
The goal of the game is to flip cards and match identical pairs.

While building this project, I focused on understanding **core React concepts such as state management, component structure, event handling, and conditional rendering**.

---

# 🎮 How the Game Works

1. The game starts with **all cards hidden**.
2. The player flips **two cards at a time**.
3. If the cards match:

   * They stay visible.
   * The score increases.
4. If they do not match:

   * The cards flip back after a short delay.
5. The game ends when **all pairs are matched**.

A **congratulation popup** appears once the player completes the game.

---

# ⚙️ Technologies Used

* **ReactJS**
* **JavaScript (ES6+)**
* **CSS**
* **Lucide React Icons**

This project helped me understand how React manages UI updates using **state and props**.

---

# 📂 Project Structure

```text
src
│
├── components
│   ├── Card.jsx
│   └── GameHeader.jsx
│
├── data
│   └── data.js
│
├── App.jsx
└── App.css
```

Each part of the project is separated into small reusable components to keep the code **clean and maintainable**.

---

# 🧩 Components Explanation

## 1️⃣ App Component

`App.jsx` is the **main component** that controls the entire game logic.

Responsibilities:

* Initializes the game
* Stores all game state
* Handles card clicks
* Checks for matches
* Tracks moves and score
* Detects when the game is completed

State variables used:

```js
cards
flippedCards
moves
score
gameWon
```

Why this component exists:

React applications usually have a **central parent component** that manages shared state and passes data to child components.

---

## 2️⃣ Card Component

`Card.jsx` represents **a single card in the game grid**.

Props received:

```js
card
handleClick
```

Responsibilities:

* Displays the card value (emoji)
* Displays a hidden icon when the card is not flipped
* Sends a click event back to the parent component

Why it exists:

Breaking UI into smaller components helps keep the application **modular and reusable**.

Instead of writing card logic many times, we reuse the same `Card` component for every card.

---

## 3️⃣ GameHeader Component

`GameHeader.jsx` displays **game statistics and controls**.

Props received:

```js
score
moves
reset
```

Responsibilities:

* Display the current score
* Display number of moves
* Provide a button to restart the game

Why it exists:

Separating UI elements into components keeps the code **organized and easier to maintain**.

---

## 4️⃣ Card Data

`data.js` contains the **initial card values**.

Example:

```js
export const cardData = [
 "😀","😂","🤣","😊","😍",
 "😀","😂","🤣","😊","😍"
]
```

Why it exists:

Separating data from logic makes the project **easier to scale and modify**.

---

# 🧠 React Concepts Practiced

While building this project, I practiced several core React concepts that are essential for developing modern frontend applications.

---

## Functional Components

React applications are built using **components**, which are reusable pieces of UI.

In this project, components like:

```text
Card
GameHeader
App
```

are implemented as **functional components**.

Functional components are JavaScript functions that return JSX and are the most common way of writing React components today.

Example:

```jsx
function Card() {
  return <div>Card</div>;
}
```

---

## useState

`useState` is a React **hook** used to store and manage state inside functional components.

State allows components to remember values and update the UI when those values change.

In this project, `useState` is used to manage:

* cards
* flipped cards
* player moves
* score
* game completion

Example:

```js
const [score, setScore] = useState(0);
```

Whenever `setScore()` is called, React automatically **re-renders the component**.

---

## useEffect

`useEffect` is a hook used to run **side effects** in a component.

Side effects include things like:

* fetching data
* starting a game
* timers
* updating external systems

In this project, `useEffect` is used to **initialize the game when the app loads**.

Example:

```js
useEffect(() => {
  startGame();
}, []);
```

The empty dependency array (`[]`) ensures that the function runs **only once when the component mounts**.

---

## Props and Component Communication

**Props** (short for properties) allow data to be passed from a parent component to a child component.

For example:

```jsx
<Card card={card} handleClick={handleClick} />
```

Here:

* `card` contains the card data
* `handleClick` is a function passed to the child component

Props make components **dynamic and reusable**.

---

## Event Handling

React allows handling user interactions such as clicks, typing, or hovering.

In this project, event handling is used to detect when a player clicks a card.

Example:

```jsx
onClick={() => handleClick(card)}
```

This triggers the game logic that flips the card.

---

## Conditional Rendering

Conditional rendering allows React to **display different UI elements depending on state**.

In the card component, the card shows either:

* the emoji (when flipped or matched)
* a question icon (when hidden)

Example:

```jsx
{card.isFlipped ? card.value : <BadgeQuestionMark />}
```

This makes the UI **dynamic and interactive**.

---

## Array Mapping

React often uses `.map()` to render lists of components dynamically.

In this project, `.map()` is used to render all cards in the grid.

Example:

```jsx
cards.map((card) => (
  <Card key={card.id} card={card} handleClick={handleClick} />
))
```

This allows React to create multiple card components from the card data.

---

## Immutable State Updates

In React, state should **never be modified directly**.

Instead, we create a **new copy of the state** and update it.

Example:

```js
const updatedCards = cards.map((c) =>
  c.id === card.id ? { ...c, isFlipped: true } : c
);
```

This ensures React can properly detect changes and update the UI efficiently.

---

# 🚀 Future Improvements (Roadmap)

This project will continue evolving as I learn more React and frontend development.

Planned improvements include:

### 🎨 Tailwind CSS Integration

Replace traditional CSS with **Tailwind CSS** to create a cleaner and more responsive UI.

Benefits:

* Faster styling
* Utility-first approach
* Better responsive design

---

### 🎴 Card Flip Animations

Add smooth **3D card flipping animations** using CSS or Tailwind.

---

### 📱 Responsive Design

Optimize the layout for:

* mobile devices
* tablets
* smaller screens

---

### 🏆 Best Score System

Store the best score using **localStorage**.

---

### 🎵 Sound Effects

Add sound feedback for:

* card flips
* successful matches
* game completion

---

### ⚡ Performance Improvements

* memoization
* better state handling
* optimized rendering

---

# 🛠️ Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/Card-Flip-Game-ReactJS.git
```

Navigate into the project folder:

```bash
cd Card-Flip-Game-ReactJS
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

# 🎯 Goal of This Project

The purpose of this project is to **learn React by building small interactive applications**.

Rather than only reading theory, this project focuses on **learning by building**.

---

# 🤝 Contributions

This project is primarily a **learning exercise**, but suggestions and improvements are always welcome.

---

# ⭐ If you found this project interesting

Consider giving the repository a **star**.

It helps motivate further learning and development 🚀

