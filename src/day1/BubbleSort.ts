export default function bubble_sort(arr: number[]): void {

  for (let j = 0; j < arr.length - 1; j++) {
    let swapped = false

    for (let i = 0; i < arr.length - j - 1; i++) {
      const next = i + 1

      if (arr[i] > arr[next]) {
        [arr[i], arr[next]] = [arr[next], arr[i]]
        swapped = true
      }

    }

    if (!swapped) break;
  }
}
