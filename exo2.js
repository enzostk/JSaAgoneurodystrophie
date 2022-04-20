const sortByOn2 = (table) => {
  let count = 0;
  for (i = 0; i < table.length; i++) {
    let yep = true;
    for (j = i+1; j < table.length; j++) {
      if (table[i] <= table[j]) {
        yep = false;
      } 
    }
    if (yep) count++;
  }
  return count;
}

let table = [3, 7, 8, 3, 6, 1];
console.log(sortByOn2(table));