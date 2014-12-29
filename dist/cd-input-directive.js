(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name cd.ui.inputWrapper.directive:cdInput
   * @restrict A
   *
   * @description
   * Add class on input if not set
   *
   *
   * @toDo
   * Write test
   */
  angular
    .module('cd.ui.inputWrapper')
    .directive('cdInput', cdInput);


  cdInput.$inject = ['ErrorMessages', 'CssForm'];
  function cdInput(ErrorMessages, CssForm) {
    var directive = {
      restrict: 'A',
      replace: false,
      controller: CdInput,
      controllerAs: 'vm',
      bindToController: true,
      scope: {},
      link: linkFunc
    };

    return directive;

    function linkFunc($scope, element, attrs) {
      if (!angular.isDefined(attrs.class)) {
        element.addClass(CssForm.input);
      }

    }
  }

  function CdInput() {
  }

}());
