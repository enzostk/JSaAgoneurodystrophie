const checkViewBest = (arr) => {
  let reversed = [...arr].reverse();
    let yep = 1;
    let highestBuilding = reversed[0];
    for (i = 0; i < reversed.length; i++) {
      if (reversed[i] > highestBuilding) {
        highestBuilding = reversed[i];
        yep++;
      }
    }
    return yep;
  }
  
  let table = [1,3,9,8,3,6,1];
  console.log(checkViewBest(table));