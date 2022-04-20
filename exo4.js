const sortByOn2 = (table) => {
  let count = 0;
  for (i = 0; i < table.length; i++) {
    console.log(table[i]);
    let temp = table.slice(i+1);
    console.log(temp);
    if (table[i] > Math.max(...temp)) {
      count++;
      console.log(`++`);
    }
  }
  return count;
}

let table = [7, 2, 5, 3, 6, 1];
console.log(sortByOn2(table));

