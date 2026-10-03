# Food Savers

A browser-based quiz game that teaches households, schools, restaurants, and communities how to waste less food.

## Goal
Help people spot habits that cause food waste and choose the best action. Saving food also saves money and reduces landfill methane.

## Features
- 4 levels (House, School, Restaurant, Community) with 10 questions each
- 3 choices per question, 1 best answer, shuffled every time
- Instant feedback with a short explanation
- Score 7/10 to unlock the next level
- Lessons tab with tips for each setting
- Works on phone, tablet, and desktop, in light or dark mode

## Run
Option 1: Unzip and double-click `index.html`. No install needed.
Option 2: Open it via educationalfoodsaver.vercel.app 

## Files
- `index.html`: page
- `style.css`: layout and animations
- `questions.js`: questions and lessons
- `script.js`: game logic

## Edit questions
In `questions.js`, each question is one line. The correct answer goes first (choices are shuffled automatically):
```js
["🍚", "Question", "CORRECT answer", "Wrong 1", "Wrong 2", "Explanation"]
```

## Notes
- Progress resets on refresh.
- Food safety tips are general guidance, so check them against local health authority sources.

Built with HTML, CSS, and JavaScript.
