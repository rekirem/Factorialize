function factorialize(num) {
    if (num === 0) {return 1} //Factorial of 0 is 1
    for (let i = num - 1; i > 0; i--) {
      num = num * i;
    }
    return num;
}
