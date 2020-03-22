export const defaultData = [
  { id: 0, title: 'Create react-to-do-app', done: false },
  { id: 1, title: 'Learn react tutorials', done: true },
  { id: 2, title: 'Update to-do-app', done: false }
];

export const loadData = () => { //get data
  try {
    const serializedState = localStorage.getItem('data')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState) //to object
  } catch (err) {
    return undefined
  }
};

export const saveData = data => { //set data
  try {
    const serializedState = JSON.stringify(data) //to string
    localStorage.setItem('data', serializedState)
  } catch (err) { }
};


export const fetchData = new Promise((resolve, reject) => {
  setTimeout(function () {
    const localStorageData = loadData()
    if (localStorageData) {
      resolve(localStorageData);
    } else {
      saveData(defaultData)
      resolve(defaultData);
    }
  }, 0);
});
