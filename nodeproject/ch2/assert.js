var assert = require('assert');

function result(a,b,c,d){
    return a+b+c+d;
}

var expected = result(1,1,1,1)
assert(expected===4, "sum for 4 elements");