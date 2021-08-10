// função sem bonus

function snapCrackle (maxValue) {
    for (let inicio = 1; inicio < maxValue; inicio++) {
      if (maxValue % 2 !== 0 && maxValue % 5 !==0) {
        return "Snap";
      } else if (maxValue % 5 === 0) {
        return "Crackle";
      } else if ((maxValue % 2 !== 0) && (maxValue % 5 === 0)) {
        return "SnapCrackle";
      } else {
        return maxValue;
        
      }
    }
  }
  
  snapCrackle();
  
  
  //função com bonus
  
  function snapCracklePrime (maxValue) {
    for (let inicio = 1; inicio < maxValue; inicio++) {
      if (maxValue % 2 !== 0 && maxValue % 5 !== 0) {
        return "Snap";
      } else if (maxValue % 5 === 0) {
        return "Crackle";
      } else if (maxValue % 1 !== 0 && maxValue % 5 !== 0) {
        return "Prime";
      } else if ((maxValue % 2 !== 0) && (maxValue % 5 === 0)) {
        return "SnapCrackle";
      } else {
        return maxValue;
        
      }
    }
  }
  
  
  snapCracklePrime ()
  
  