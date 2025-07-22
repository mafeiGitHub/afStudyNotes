泛型

```js
function bubbleSort(arr) {
  let n = arr.length;
  
  // 外层循环：控制比较的轮数（每一轮会把当前最大的数冒泡到最后）
  for (let i = 0; i < n - 1; i++) {
    
    // 内层循环：实际比较相邻元素
    for (let j = 0; j < n - 1 - i; j++) {
      
      // 如果前一个数比后一个数大，就交换它们
      if (arr[j] > arr[j + 1]) {
        // 交换 arr[j] 和 arr[j + 1]
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  
  return arr;
}

// 示例用法
let numbers = [5, 3, 8, 4, 2];
console.log("排序前:", numbers);
let sortedNumbers = bubbleSort(numbers);
console.log("排序后:", sortedNumbers);

```