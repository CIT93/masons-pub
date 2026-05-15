const isHighIntensity = (gameType, energyLevel) => {
  return gameType === "fps" && Number(energyLevel) >= 7;
};

export const evaluateSoundtrackChoice = (formData) => {
  const gameType = formData.gameType;
  const focusLevel = Number(formData.focusLevel);
  const energyLevel = Number(formData.energyLevel);
  const lyrics = formData.lyrics;

  let suggestion = "";

  if (isHighIntensity(gameType, energyLevel)) {
    suggestion = lyrics
      ? "High-energy EDM or hype trap songs with vocals"
      : "High-energy EDM or hype trap beats";
  } else if (gameType === "rpg" && focusLevel >= 7) {
    suggestion = "Epic orchestral fantasy soundtrack";
  } else if (gameType === "grind" && energyLevel <= 3) {
    suggestion = "Lo-fi chill beats for relaxing grinding";
  } else if (gameType === "chill") {
    suggestion = "Soft ambient background music";
  } else {
    suggestion = "Synthwave or gaming playlist mix";
  }

  return {
    gameType: gameType,
    focusLevel: focusLevel,
    energyLevel: energyLevel,
    suggestion: suggestion,
    lyrics
  };
}