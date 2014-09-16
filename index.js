/**
 * Once is a function that takes another function and 
 * caches the result if there is not the same result in the cache
 * already.
 *
 * @param {function} arbitraryFunction
 * @return {function} the first time will run arbitraryFunction.
 * For all addition calls nothing will result.
 *
 */

module.exports.once = function(arbitraryFunction) {
  var hasItRun = false
  return function() {
    if (!hasItRun) {
      hasItRun = true
      arbitraryFunction();
    }
  };
};
