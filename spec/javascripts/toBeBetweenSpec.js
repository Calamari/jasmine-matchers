describe("toBeBetween", function() {
  it("works", function() {
    var aFunc   = function(test) { return 1*test; },
        anObj   = {},
        aValue  = true,
        result;

    expect(0).toBeBetween(-0.1, 0.000001);
    expect(-1).toBeBetween(-1.00001, 1);
    expect('b').toBeBetween('a', 'c');

    expect(900).not.toBeBetween(900, 901);
    expect(900).not.toBeBetween(900, 901);
    expect('b').not.toBeBetween('c', 'd');
    expect('B').not.toBeBetween('a', 'c');
    expect('ö').not.toBeBetween('m', 'p');
  });
});
