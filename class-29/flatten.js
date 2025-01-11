const nestedArr = [1, [2, 3], [4, [5, 6]]];

function flattenArr(arr) {
  return arr.reduce((resultArr, item) => {
    if (Array.isArray(item)) {
      const subFlattenedArray = flattenArr(item); // Recursively flattening the nested array.
      // for (let i = 0; i < subFlattenedArray.length; i++) {
      //   resultArr.push(subFlattenedArray[i]);
      // }
      resultArr.push(...subFlattenedArray[i]);
    } else {
      resultArr.push(item); // Directly push it to the result array.
    }

    return resultArr;
  }, []);
}

const result = flattenArr(nestedArr); // [1, 2, 3, 4, 5, 6]
console.log(result);
