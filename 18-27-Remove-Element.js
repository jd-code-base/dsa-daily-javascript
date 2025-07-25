// var removeElement = function (nums, val) {
//   let first = 0;
//   let sec = 0;

//   while (sec < nums.length) {
//     if (nums[sec] !== val) {
//       [nums[first], nums[sec]] = [nums[sec], nums[first]];
//       first++;
//     }

//     sec++;
//   }
//   return first;
// };

var removeElement = function (nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

console.log(removeElement([3, 2, 2, 3], (val = 3)));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], (val = 2)));
