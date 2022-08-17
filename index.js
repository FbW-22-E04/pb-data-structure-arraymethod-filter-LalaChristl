//Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
//1


function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
  }
  
  let arr = [5, 3, 8, 1];
  
  let filtered = filterRange(arr, 1, 4);
  
  console.log( filtered ); // 3,1 (matching values)
  
  console.log( arr ); // 5,3,8,1 (not modified)

  console.log("----------------------------------------");

//Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
//2
  function filterRangeInPlace(arr, a, b) {
    let filtered = filterRange(arr, a, b);
    arr.length = 0;
    for (item of filtered) {
      arr.push(item);
    }
  }
  
  let array = [5, 3, 8, 1];

  filterRangeInPlace(array, 1, 4); // removed the numbers except from 1 to 4
  
  console.log( array ); // [3, 1]
