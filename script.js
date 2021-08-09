// função sem bonus

function snapCrackle (maxValue) {
    for (let inicio = 1; inicio < maxValue; inicio++) {
      if (maxValue % 2 !== 0 && maxValue % 5 !==0) {
        console.log ("Snap");
      } else if (maxValue % 5 === 0) {
        console.log ("Crackle");
      } else if ((maxValue % 2 !== 0) && (maxValue % 5 === 0)) {
        console.log ("SnapCrackle");
      } else {
        console.log (maxValue);
        
      }
    }
  }
  
  snapCrackle();
  
  
  //função com bonus
  
  function snapCracklePrime (maxValue) {
    for (let inicio = 1; inicio < maxValue; inicio++) {
      if (maxValue % 2 !== 0 && maxValue % 5 !== 0) {
        console.log ("Snap");
      } else if (maxValue % 5 === 0) {
        console.log ("Crackle");
      } else if (maxValue % 1 !== 0 && maxValue % 5 !== 0) {
        console.log ("Prime");
      } else if ((maxValue % 2 !== 0) && (maxValue % 5 === 0)) {
        console.log ("SnapCrackle");
      } else {
        console.log (maxValue);
        
      }
    }
  }
  
  
  snapCracklePrime ()
  
  