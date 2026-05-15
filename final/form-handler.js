const soundtrackForm = document.getElementById("soundtrackForm");
const gameType = document.querySelectorAll('input[name="gameType"]');
const focusLevel = document.getElementById("focusLevel");
const energyLevel = document.getElementById("energyLevel");
const focusValue = document.getElementById("focusValue");
const energyValue = document.getElementById("energyValue");
const lyrics = document.querySelectorAll('input[name="lyrics"]');
const entryIdInput = document.getElementById("entryId");
const gameTypeError = document.getElementById("gameTypeError");
const focusLevelError = document.getElementById("focusLevelError");
const energyLevelError = document.getElementById("energyLevelError");
const lyricsError = document.getElementById("lyricsError");

const getCheckedValue = (radioNodeList) => {
  for (const radio of radioNodeList) {
    if (radio.checked) {
      return radio.value;
    }
  }
  return "";
};

export const getFormInputs = () => {
  return {
    id: getEntryId() || null,
    gameType: getCheckedValue(gameType),
    focusLevel: focusLevel.value,
    energyLevel: energyLevel.value,
    lyrics: getCheckedValue(lyrics)
  };
};

export const setFormInputs = (inputs) => {
  for (const radio of gameType) {
    radio.checked = radio.value === inputs.gameType;
  }

  focusLevel.value = inputs.focusLevel || 5;
  energyLevel.value = inputs.energyLevel || 5;
  focusValue.textContent = focusLevel.value;
  energyValue.textContent = energyLevel.value;
  for (const radio of lyrics) {
  radio.checked = radio.value === inputs.lyrics;
}
};

export const getEntryId = () => {
  return entryIdInput.value;
};

export const setEntryId = (id) => {
  entryIdInput.value = id || "";
};

focusLevel.addEventListener("input", () => {
  focusValue.textContent = focusLevel.value;
});

energyLevel.addEventListener("input", () => {
  energyValue.textContent = energyLevel.value;
});

export const populateFormForEdit = (entry) => {
  setFormInputs(entry.inputs);
  setEntryId(entry.id);
  document.getElementById("submitButton").textContent = "Update Entry";
};

export const validateForm = (inputs) => {
  let isValid = true;

  gameTypeError.textContent = "";
  focusLevelError.textContent = "";
  energyLevelError.textContent = "";
  lyricsError.textContent = "";
  
  if (!inputs.gameType) {
    gameTypeError.textContent = "Please select a game type.";
    isValid = false;
  }

  if (inputs.focusLevel < 1 || inputs.focusLevel > 10) {
    focusLevelError.textContent = "Focus level must be between 1 and 10.";
    isValid = false;
  }

  if (inputs.energyLevel < 1 || inputs.energyLevel > 10) {
    energyLevelError.textContent = "Energy level must be between 1 and 10.";
    isValid = false;
  }

  if (!inputs.lyrics) {
    lyricsError.textContent = "Please select a lyrics preference.";
    isValid = false;
  }

  return isValid;
};

export const clearForm = () => {
  soundtrackForm.reset();
  entryIdInput.value = "";
  focusLevel.value = 0;
  energyLevel.value = 0;
  focusValue.textContent = 0;
  energyValue.textContent = 0;
  lyrics.checked = false;
  document.getElementById("submitButton").textContent = "Get Soundtrack Vibe";
  console.log("Form cleared");
};