type Node<T> = {
  value: T,
  next?: Node<T>,
}

export default class Queue<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): void {
    const newElement = { value: item };

    if (!this.tail) {
      this.tail = this.head = newElement;
    } else {
      this.tail.next = newElement;
      this.tail = newElement;
    }

    this.length += 1
  }

  dequeue(): T | undefined {
    if (!this.head) return undefined;
    this.length -= 1

    const firstElement = this.head;
    this.head = this.head.next;

    firstElement.next = undefined;

    if (this.length === 0) {
      this.tail = undefined;
    }

    return firstElement.value;
  }

  peek(): T | undefined {
    return this.head?.value
  }
}
