# My Decision Making App

## Project Title
Music Genre Recommendation Helper

## Description
This app helps the user decide what type of music genre they should listen to based on their current mood, energy level, and what activity they are doing. It gives a simple recommendation for what genre to play.

## Input Types Used
- Multiple choice options for selecting mood
- Multiple choice options for selecting current activity
- Multiple choice options for selecting energy level

## Color Palette
- #0F172A – Page Background
- #1E293B – Main Container Background
- #38BDF8 – Accent / Borders / Headings
- #22C55E – Submit Button
- #F97316 – Clear Button Accent

## Step 5 Planning

i. What new input will you add?
I will add a checkbox asking if the user wants music with lyrics or instrumental.

ii. How will this change your logic?
If the user selects lyrics, the app will return song-based recommendations. If not selected, it will return instrumental or background music versions of the same recommendation.

## Step 6 Planning: Validation

### Game Type
- Required: Yes.
- Boundary: Must be one of the provided radio options (fps, rpg, grind, chill).
- Error Message: Please select a game type.

### Focus Level
- Required: Yes.
- Boundary: Must be a number between 1 and 10.
- Error Message: Focus level must be between 1 and 10.

### Energy Level
- Required: Yes.
- Boundary: Must be a number between 1 and 10.
- Error Message: Energy level must be between 1 and 10.

### Lyrics Preference
- Required: No.
- Boundary: Must be true or false (checkbox).
- Error Message: No error needed.