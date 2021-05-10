export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(obj) {
    this.members.add(obj);
  }

  addAll(...arr) {
    arr.forEach((item) => {
      this.members.add(item);
    });
  }

  toArray() {
    const arr = Array.from(this.members);
    return arr;
  }
}
