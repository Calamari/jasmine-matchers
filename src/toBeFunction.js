beforeEach(function () {
  jasmine.Expectation.addMatchers({
    toBeFunction: function () {
      return {
        compare: function (actual) {
          return {
            pass: actual && {}.toString.call(actual) == '[object Function]'
          }
        }
      };
    }
  });
});
