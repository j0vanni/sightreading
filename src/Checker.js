function Checker(array, answer, index) {
  if (answer === array[index]) {
    console.log("TRUE");
    return true;
  } else {
    console.log("FALSE");
    return false;
  }
}

export default Checker;
