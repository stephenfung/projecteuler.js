function sumMultiplesOf3Or5(max) {
    return _.chain(_.range(1, max + 1))
        .filter(function(x) { return (x % 3 == 0) || (x % 5 == 0) })
        .reduce(function(sum, x) { return sum + x }, 0)
        .value();
}

Test001 = TestCase("Test001");

Test001.prototype.testExample = function () {
    assertEquals(23, sumMultiplesOf3Or5(9))
};

Test001.prototype.testFull = function () {
    assertEquals(233168, sumMultiplesOf3Or5(999))
};