import { Class } from "./Class";

export class Course {
  title: string;
  credit: number;
  classList: Class[] = [];

  constructor(title: string, credit: number) {
    this.title = title;
    this.credit = credit;
  }

  addClass(c: Class): number {
    if (!this.classList.includes(c)) {
      this.classList.push(c);
      return 1;
    }
    return 0;
  }

  removeClass(c: Class) {
    this.classList = this.classList.filter(cl => cl != c);
  }
}