class LocalStorageData {
  static setData(data) {
    localStorage.setItem('user', JSON.stringify(data.id));
  }

  static removeData() {
    localStorage.removeItem('user');
  }

  static getData(term) {
    const data = localStorage.getItem(term);
    return JSON.parse(data);
  }
}

export { LocalStorageData };
