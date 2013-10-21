function generateFibonacciUpTo(n) {
    var fibonacci = [1, 2];
    while(true) {
        var last2 =_.last(fibonacci, 2);
        var next = last2[0] + last2[1]
        if(next <= n)
            fibonacci.push(next);
        else
            break;
    }
    return fibonacci;
}

function sumOfEvenFibonacciUpTo(n) {
    return _.chain(generateFibonacciUpTo(n))
        .filter(function(x) { return x % 2 == 0; })
        .reduce(function(sum, x) { return sum + x }, 0)
        .value();
}


Test002 = TestCase("Test002");

Test002.prototype.testFibonacci = function () {
    assertEquals([1, 2, 3, 5, 8, 13], generateFibonacciUpTo(20));
};

Test002.prototype.testFull = function () {
    assertEquals(4613732, sumOfEvenFibonacciUpTo(4000000));
};