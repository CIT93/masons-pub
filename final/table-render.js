const tbody = document.getElementById("history-list");
const historyTable = document.getElementById("historyTable");
const noEntriesMessage = document.getElementById("noEntriesMessage");

let _currentCallbacks = {};

const handleTableClick = (event) => {
  const target = event.target;

  if (target.classList.contains("delete") && typeof _currentCallbacks.onDelete === "function") {
    const id = target.dataset.id;
    _currentCallbacks.onDelete(id);
  }

  if (target.classList.contains("edit") && typeof _currentCallbacks.onEdit === "function") {
    const id = target.dataset.id;
    _currentCallbacks.onEdit(id);
  }
};

export const renderTable = (data, callbacks) => {
    if (!tbody) return;

    _currentCallbacks = callbacks;

    tbody.innerHTML = "";

    if (data.length === 0) {
      noEntriesMessage.style.display = "block";
      historyTable.style.display = "none";
      return;
    }

    noEntriesMessage.style.display = "none";
    historyTable.style.display = "table";

    for (const entry of data) {
      const dateText = entry.timestamp ? new Date(entry.timestamp).toLocaleString() : "";

      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${dateText}</td>
        <td>${entry.inputs && entry.inputs.gameType ? entry.inputs.gameType : ""}</td>
        <td>${entry.inputs && entry.inputs.focusLevel ? entry.inputs.focusLevel : ""}</td>
        <td>${entry.inputs && entry.inputs.energyLevel ? entry.inputs.energyLevel : ""}</td>
        <td>${entry.inputs && entry.inputs.lyrics ? "Yes" : "No"}</td>
        <td>${entry.decision && entry.decision.suggestion ? entry.decision.suggestion : ""}</td>
        <td class="action-cell">
          <button class="action-button edit" data-id="${entry.id}">Edit</button>
          <button class="action-button delete" data-id="${entry.id}">Delete</button>
        </td>
      `;

      tbody.appendChild(row);
    }
  };

  tbody.addEventListener("click", handleTableClick);