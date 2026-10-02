# 🎲 Two-Player Dice Game

A responsive, interactive two-player dice game built with pure **HTML5**, **CSS3**, and vanilla **JavaScript**. Players roll virtual dice simultaneously with randomized outcomes and real-time winner detection.

---

## 📸 Demo Preview

| Idle State | Active Roll Outcome |
| :---: | :---: |
| 🎲 vs 🎲 | ⚂ vs ⚅ → **Player 2 Wins! 🎉** |

---

## ✨ Features

- **Randomized Logic:** Generates authentic 1–6 rolls using JavaScript's `Math.random()`.
- **Unicode Dice Faces:** Dynamic rendering of real dice pip faces (`⚀`, `⚁`, `⚂`, `⚃`, `⚄`, `⚅`) directly via array index mapping.
- **Instant Result Determination:** Computes scores and immediately displays whether Player 1 won, Player 2 won, or if it ended in a tie.
- **Responsive Flexbox UI:** Centered two-card layout styled with smooth button interaction and clean elevation effects.
- **Zero Dependencies:** Pure vanilla web stack—no frameworks, node modules, or build steps required.

---

## 📁 Project Structure

```text
dice-game/
│
├── index.html       # Application markup and embedded styling
├── main.js          # Random generation, emoji lookup, and DOM updates
└── README.md        # Project documentation
