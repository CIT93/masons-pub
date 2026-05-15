console.log("App Loaded");

import { getFormInputs, clearForm, populateFormForEdit, validateForm } from "./form-handler.js";
import { evaluateSoundtrackChoice } from "./decision.js";
import { renderDecision, hideResults } from "./ui.js";
import { saveToLS, getFromLS, generateUniqueId } from "./data-store.js";
import { renderTable } from "./table-render.js";

const soundtrackEntries = getFromLS();

const soundtrackForm = document.getElementById("soundtrackForm");
const clearFormButton = document.getElementById("clearFormButton");

const handleDeleteEntry = (id) => {
  const index = soundtrackEntries.findIndex(entry => entry.id === id);

  if (index !== -1) {
    soundtrackEntries.splice(index, 1);
  }

  saveToLS(soundtrackEntries);
  renderTable(soundtrackEntries, {
    onDelete: handleDeleteEntry,
    onEdit: handleEditEntry
  });
};

const handleEditEntry = (id) => {
  const entry = soundtrackEntries.find(entry => entry.id === id);

  if (!entry) return;

  populateFormForEdit(entry);
};

const handleFormSubmit = (event) => {
  event.preventDefault();

  const formData = getFormInputs();
  console.log("Form Data:", formData);

  if (!validateForm(formData)) {
  return;
}

  const decisionResult = evaluateSoundtrackChoice(formData);
  console.log("Decision Result:", decisionResult);

  renderDecision(decisionResult);

  const existingId = formData.id;

  if (existingId) {
    const index = soundtrackEntries.findIndex(entry => entry.id === existingId);

    if (index !== -1) {
      soundtrackEntries[index] = {
        id: soundtrackEntries[index].id,
        timestamp: soundtrackEntries[index].timestamp,
        inputs: formData,
        decision: decisionResult
      };
    }
  } else {
    const newEntry = {
      id: generateUniqueId(),
      timestamp: new Date().toISOString(),
      inputs: formData,
      decision: decisionResult
    };
    soundtrackEntries.push(newEntry);
  }
  saveToLS(soundtrackEntries);

  renderTable(soundtrackEntries, {
    onDelete: handleDeleteEntry,
    onEdit: handleEditEntry
  });
  clearForm();

  console.log("All Entries:", soundtrackEntries);
};

const handleClearForm = () => {
  clearForm();
  hideResults();
};

const init = () => {
  hideResults();
  soundtrackForm.addEventListener("submit", handleFormSubmit);
  clearFormButton.addEventListener("click", handleClearForm);
  renderTable(soundtrackEntries, {
    onDelete: handleDeleteEntry,
    onEdit: handleEditEntry
  });
};

document.addEventListener("DOMContentLoaded", init);