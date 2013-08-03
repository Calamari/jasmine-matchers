beforeEach(function () {
  jasmine.Expectation.addMatchers({
    toBeBetween: function () {
      return {
        compare: function (actual, a, b) {
          return {
            pass: a < actual && actual < b
          }
        }
      };
    }
  });
});
