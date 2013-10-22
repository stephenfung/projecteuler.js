var Combinatorics = {
    generateSubsetsOfSize : function generateSubsetsOfSize(S, k) {
        if(k == 0)
            return [[]];
        if(k > S.length)
            return [];

        return _.map(generateSubsetsOfSize(_.tail(S), k-1), function(x) { return [S[0]].concat(x); })
            .concat(generateSubsetsOfSize(_.tail(S), k));
    },

    permutations : function permutations(S) {
        if(S.length == 0) return [[]];
        if(S.length == 1) return [S];

        return _.chain(_.range(0, S.length))
            .map(function(i) { return _.map(permutations(S.minusIndex(i)), function(subset) { return [S[i]].concat(subset); }) })
            .flatten(true)
            .value();
    },

    cartesian_product: function cartesian_product() {
        return _.reduce(arguments, function(productSoFar, nextArray) {
            return _.flatten(_.map(productSoFar, function(productPartialEntry) {
                return _.map(nextArray, function(nextArrayEntry) {
                    return productPartialEntry.concat([nextArrayEntry]);
                });
            }), true);
        }, [[]])
    }
};