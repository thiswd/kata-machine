type Node<T> = {
  value: T,
  prev?: Node<T>,
}

export default class Stack<T> {
  public length: number;
  private head?: Node<T>;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item: T): void {
    const newItem = { value: item } as Node<T>;
    this.length += 1;

    if (!this.head) {
      this.head = newItem;
      return;
    }

    newItem.prev = this.head;
    this.head = newItem;
  }

  pop(): T | undefined {
    if (!this.head) return;

    this.length -= 1

    const node = this.head
    this.head = node.prev
    node.prev = undefined;
    return node.value;
  }

  peek(): T | undefined {
    return this.head?.value
  }
}
