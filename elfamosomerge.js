const fs = require('fs');
const fileName = process.argv[2];

let dataArray = []
const turnIntoInteger = x => parseInt(x,10);

try {
  const data = fs.readFileSync(fileName, 'utf8');
  dataArray = data.split(' ').map(elem => turnIntoInteger(elem));
}
catch (error) {
  console.error(error.message);
}

class Result {

  constructor(arr) {
    this.sortedArray = this.mergeSort(arr);
  }
  
  merge(left,right) {
    const result = [];
    
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    while(left.length) result.push(left.shift());
    while(right.length) result.push(right.shift());

    return result;
  }
  mergeSort(array) {
    if(array.length < 2) return array;
    const middle = Math.floor(array.length/2);
    const leftSide = array.slice(0,middle);
    const rightSide = array.slice(middle,array.length);
    console.log('split',leftSide,rightSide);
    return this.merge(this.mergeSort(leftSide), this.mergeSort(rightSide));
  }

}

let mergeResult = new Result(dataArray);
console.log(mergeResult.sortedArray);