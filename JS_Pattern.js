// Module
// Prototype
// Observer
// Singleton

// declare private variables and/or functions
var HtmlChanger = (function() {
  var contents = 'contents';

  var changeHTML = function() {
    var element = document.getElementById('attribute-to-change');
    element.innerHTML = contents;
  };

  return {
    callChangeHTML: function() {
      changeHTML();
      // console.log(contents);
    }
  };
})();

HtmlChanger.callChangeHTML();
// console.log(HtmlChanger.contents);


