const sortByOn = (table, x) => {
  for (i = 0; i < table.length; i++) {
    let temp = [...table];
    temp.splice(i, 1);
    if (temp.includes(x-table[i])) {
      // console.log((x-table[i]));
      // console.log(table[i]);
      return true;
    }
  }
  return false
}
let table = [111,3, 7, 8, 3, 6, 1];
console.log(sortByOn(table,114));