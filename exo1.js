const sortByOn2 = (table , x) => {
  for (i = 0; i < (table.length - 1); i++) {
    for (j = (i + 1); j < table.length; j++) {     
      if (table[i] + table[j] == x) {
        console.log(`${x} est trouvé par l'addition de ${table[i]} et ${table[j]}.`);
        return true;
      }
    }
  }
  console.log(`Il n'y a pas deux nombres ayant ${x} comme résultat de leur addition.`)
  return false;
}

let table = [1,50,45,78,65];
console.log(sortByOn2(table,46));