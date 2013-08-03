describe("toBeFunction", function() {
  it("works", function() {
    var aFunc   = function(test) { return 1*test; },
        anObj   = {},
        aValue  = true,
        result;

    expect(function() {}).toBeFunction();

    expect(aFunc).toBeFunction();

    expect(anObj).not.toBeFunction();

    expect(aValue).not.toBeFunction();
  });
});
