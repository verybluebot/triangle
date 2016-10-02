(function(){
  "use strict";

  angular
    .module('app')
    .factory('TriangleService', TriangleService);

  TriangleService.$inject = []
  function TriangleService() {
    return {
      // values
      triangleValues: {},

      // functions
      setTriangleValues: setTriangleValues,
      getTriangleValues: getTriangleValues
    }

    ////////////////// factory functions /////////////////////
    function setTriangleValues(values) {
      this.triangleValues = values;
    }

    function getTriangleValues() {
      return this.triangleValues;
    }
  }
})();
