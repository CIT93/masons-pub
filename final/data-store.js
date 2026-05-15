const MY_DATA = "soundtrack-app-data";

export const saveToLS = (array) => {
  localStorage.setItem(MY_DATA, JSON.stringify(array));
};

export const getFromLS = () => {
  const data = localStorage.getItem(MY_DATA);
  return data ? JSON.parse(data) : [];
};

export const generateUniqueId = () => {
  return String(Date.now());
};