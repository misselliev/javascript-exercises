const ftoc = function(f) {
  // C = (F - 32) * 5/9
  return Math.round((f - 32) * (5/9) * 10) / 10
  
}

const ctof = function(c) {
  // F = C * 9/5 + 32
  return Math.round(((c * 9/5) + 32) * 10) / 10 
  
}

function round(value, precision){
  //function to round to two decimals
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier)/multiplier;

  //this can also be combined with toFixed for consistency
  //ie. round(456.7, 2).toFixed(2);
}


module.exports = {
  ftoc,
  ctof
}
