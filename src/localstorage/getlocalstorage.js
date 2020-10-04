function loadFromLocalStorage() {
    try {
      const serializedState = localStorage.getItem('state');
      if (serializedState === null) return undefined;
      return JSON.parse(serializedState)
    } catch (err) {
      console.log(err)
      return undefined;
    }
  }

export default loadFromLocalStorage