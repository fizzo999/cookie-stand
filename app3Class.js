function contentCreator(elementType, content) {
  if (typeof (elementType) = string) {
    var elementNEW = elementType + "Element";
    var elementNEW = document.createElement('elementType');
    elementNEW.textContent = content;
    return elementNEW;
  }
}
var elementTypeElement = document.getElementById('content-box');