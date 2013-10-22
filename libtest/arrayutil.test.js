TestArrayUtil = TestCase("TestArrayUtil");

TestArrayUtil.prototype.testMinusIndex = function () {
    assertEquals([], [1].minusIndex(0));
    assertEquals([2,3,4], [1, 2, 3, 4].minusIndex(0));
    assertEquals([1,3,4], [1, 2, 3, 4].minusIndex(1));
    assertEquals([1,2,3], [1, 2, 3, 4].minusIndex(3));
}