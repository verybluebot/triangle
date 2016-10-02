(function (){
  'use strict'

  angular
    .module('app')
    .controller('InputCtl', InputCtl)

  InputCtl.$inject = ['$state', 'TriangleService']

  function InputCtl($state, TriangleService){
    var vm = this;

    // variables
    vm.x1 = 40;
    vm.y1 = 40;
    vm.x2 = 40;
    vm.y2 = 100;
    vm.x3 = 100;
    vm.y3 = 100;

    // functions
    vm.createTriangle = createTriangle;

    function createTriangle() {
      var triangleValues = {
        x1: vm.x1,
        y1: vm.y1,
        x2: vm.x2,
        y2: vm.y2,
        x3: vm.x3,
        y3: vm.y3
      }

      TriangleService.setTriangleValues(triangleValues);
      $state.go('main');
    }

  }
})();
