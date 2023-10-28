function recursiveCount(num = 0) {
  // type your code here
  console.log(num);
  num++
  if (num < 10) {
    recursiveCount(num);
  }
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
/**
 * very simple recursive loop
 * just move the iterative stop (the while < 10) into the gate for the recursive call
 * and youre done
 */
