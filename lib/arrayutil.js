Array.prototype.minusIndex = function(idx) {
    if(idx < 0 || idx >= this.length) return this;
    return this.slice(0, idx).concat(this.slice(idx + 1));
}
