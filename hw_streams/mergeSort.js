function merge_sort(items) {
  function merge(left, right) {
    let sorted = "";
    let leftIndex = (rightIndex = 0);

    while (
      leftIndex < (left && left.length) &&
      rightIndex < (right && right.length)
    ) {
      sorted =
        sorted +
        (left[leftIndex] < right[rightIndex]
          ? left[leftIndex++]
          : right[rightIndex++]);
    }

    return (sorted = sorted + left.slice(leftIndex) + right.slice(rightIndex));
  }

  function split(items) {
    if (items.length < 2) return items;

    const medium = Math.floor(items.length / 2);
    const left = items.slice(0, medium);
    const right = items.slice(medium);

    return merge(split(left), split(right));
  }

  return split(items);
}

module.exports = merge_sort;
