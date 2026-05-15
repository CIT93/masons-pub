const outputElement = document.querySelector("#recommendationOutput");
const resultsSection = document.querySelector("#results");
const gameTypeOutput = document.querySelector("#gameTypeOutput");
const focusLevelOutput = document.querySelector("#focusLevelOutput");
const energyLevelOutput = document.querySelector("#energyLevelOutput");
const lyricsOutput = document.querySelector("#lyricsOutput");

export const showResults = () => {
  resultsSection.style.display = "block";
};

export const hideResults = () => {
  resultsSection.style.display = "none";
};

export const renderDecision = (decisionObj) => {
  if (!outputElement || !resultsSection) return;

  outputElement.textContent = decisionObj.suggestion;
  gameTypeOutput.textContent = decisionObj.gameType || "N/A";
  focusLevelOutput.textContent = decisionObj.focusLevel || "N/A";
  energyLevelOutput.textContent = decisionObj.energyLevel || "N/A";
  lyricsOutput.textContent = decisionObj.lyrics ? "Lyrics: Yes" : "Lyrics: No";

  showResults();
};