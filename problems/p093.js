function generateFourDistinctDigits() {
    //Exclude 0 as a digit.  This isn't clear if it's allowed from the problem definition, but having it would force us to litter the code with special cases to avoid division by zero.
    return Combinatorics.generateSubsetsOfSize(_.range(1, 10), 4);
}

function getAllPossibilitiesFromFourDigits(digits) {
    var perms = Combinatorics.permutations(digits);
    return _.uniq(_.flatten(_.map(perms, function(p) { return generateCombinationsFromPermutation(p); }), true));
}

function getN(digits) {
    return containsAllNaturalNumbersUpTo(getAllPossibilitiesFromFourDigits(digits));
}

function containsAllNaturalNumbersUpTo(possibilities) {
    var i=1;
    while(true) {
        if(_.contains(possibilities, i))
            i += 1;
        else
            return i - 1;
    }
}

function generateCombinationsFromPermutation(permutation) {
    //There are three shapes of abstract syntax trees that we can have with four numbers:
    //     /\        /\        /\
    //    /\/\      /\ d      a /\
    //   a bc d    /\ c        b /\
    //            a b            c d
    //And then we can insert arithmetic operators into each internal node.
    var operatorCombinations = generateArithmeticOperatorCombinations();
    var syntaxTrees = [syntaxTreeShape1, syntaxTreeShape2, syntaxTreeShape3]
    return _.map(Combinatorics.cartesian_product(operatorCombinations, syntaxTrees), function(os) {
        return os[1](permutation, os[0]); });
}

function add(x, y) { return x + y }
function subtract(x, y) { return x - y }
function multiply(x, y) { return x * y }
function divide(x, y) { return x / y }

function generateArithmeticOperatorCombinations() {
    var operators = [add, subtract, multiply, divide];
    return Combinatorics.cartesian_product(operators, operators, operators);
}

function syntaxTreeShape1(permutation, operators) {
    return operators[1](operators[0](permutation[0], permutation[1]), operators[2](permutation[2], permutation[3]));
}

function syntaxTreeShape2(permutation, operators) {
    return operators[2](operators[1](operators[0](permutation[0], permutation[1]), permutation[2]), permutation[3]);
}

function syntaxTreeShape3(permutation, operators) {
    return operators[0](permutation[0], operators[1](permutation[1], operators[2](permutation[2], permutation[3])));
}

function solve() {
    return _.reduce(
        _.map(generateFourDistinctDigits(), function(digits) { return [digits, getN(digits)]; }),
        function(memo, num) { return memo[1] > num[1] ? memo : num; }, [[1,2,3,4], 28]
    )[0].join("");
}

Test093 = TestCase("Test093");

Test093.prototype.testGenerateSubsetsOfSize = function () {
    assertEquals([], Combinatorics.generateSubsetsOfSize([1, 2, 3, 4], 5));
    assertEquals([[1,2,3,4]], Combinatorics.generateSubsetsOfSize([1, 2, 3, 4], 4));
    assertEquals([[1,2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]], Combinatorics.generateSubsetsOfSize([1,2,3,4], 2));
    assertEquals(26, syntaxTreeShape1([2,3,4,5], [multiply, add, multiply]));
    assertEquals(50, syntaxTreeShape2([2,3,4,5], [multiply, add, multiply]));
    assertEquals(46, syntaxTreeShape3([2,3,4,5], [multiply, add, multiply]));
    assertEquals(28, getN([1, 2, 3, 4]));
    assertEquals("1258", solve());
}