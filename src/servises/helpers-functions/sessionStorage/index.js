// Function to set data in session storage
export function setDataInSessionStorage(key, value) {
    sessionStorage.setItem(key, value);
  }
  
  // Function to get data from session storage
  export  function getDataFromSessionStorage(key) {
    return sessionStorage.getItem(key);
  }
  
  // Function to remove data from session storage
  export function removeDataFromSessionStorage(key) {
    sessionStorage.removeItem(key);
  }
  