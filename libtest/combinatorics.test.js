TestCombinatorics = TestCase("TestCombinatorics");

TestCombinatorics.prototype.testGenerateSubsetsOfSize = function () {
    assertEquals([], Combinatorics.generateSubsetsOfSize([1, 2, 3, 4], 5));
    assertEquals([[1,2,3,4]], Combinatorics.generateSubsetsOfSize([1, 2, 3, 4], 4));
    assertEquals([[1,2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]], Combinatorics.generateSubsetsOfSize([1,2,3,4], 2));
}

TestCombinatorics.prototype.testPermutations = function () {
    assertEquals([[]], Combinatorics.permutations([]));
    assertEquals([[1]], Combinatorics.permutations([1]));
    assertEquals([[1, 2], [2, 1]], Combinatorics.permutations([1, 2]));
    assertEquals([["A","B","C"],["A","C","B"],["B","A","C"],["B","C","A"],["C","A","B"],["C","B","A"]], Combinatorics.permutations(["A", "B", "C"]));
    assertEquals(24, Combinatorics.permutations(["A", "B", "C", "D"]).length);
}

TestCombinatorics.prototype.testCartesianProduct = function () {
    assertEquals([[1,"A"],[1,"B"],[2,"A"],[2,"B"]], Combinatorics.cartesian_product([1, 2], ["A", "B"]));
    assertEquals([[1,"A"],[1,"B"],[2,"A"],[2,"B"],[3,"A"],[3,"B"]], Combinatorics.cartesian_product([1, 2, 3], ["A", "B"]));
    assertEquals([[1,"A","X"],[1,"A","Y"],[1,"B","X"],[1,"B","Y"],[2,"A","X"],[2,"A","Y"],[2,"B","X"],[2,"B","Y"]], Combinatorics.cartesian_product([1, 2], ["A", "B"], ["X", "Y"]));
}