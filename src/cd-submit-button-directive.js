(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name cd.ui.inputWrapper.directive:cdSubmitButton
   * @restrict A
   *
   * @description
   * Wrap input element in form
   *
   * @param {String=} containerFieldClass CSS class for container
   * @param {String=} containerSubmitClass CSS class for button container
   * @param {String=} buttonClass CSS class button
   * @param {String=} title title of the button
   *
   * @toDo
   * Write test
   */
  angular
    .module('cd.ui.inputWrapper')
    .directive('cdSubmitButton', submitButton);


  submitButton.$inject = ['CssForm'];
  function submitButton(CssForm) {
    var directive = {
      templateUrl: 'template/submit-button.html',
      restrict: 'E',
      replace: false,
      transclude: true,
      require: '^form',
      controller: SubmitButtonController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        containerFieldClass: '@containerFieldClass',
        containerSubmitClass: '@containerSubmitClass',
        buttonClass: '@buttonClass',
        title: '@title'
      },
      link: linkFunc
    };

    return directive;

    function linkFunc($scope) {

      if (!angular.isDefined($scope.vm.containerFieldClass)) {
        $scope.vm.containerFieldClass = CssForm.wrapperField;
      }

      if (!angular.isDefined($scope.vm.containerInputClass)) {
        $scope.vm.containerSubmitClass = CssForm.wrapperSubmit;
      }

      if (!angular.isDefined($scope.vm.labelClass)) {
        $scope.vm.buttonClass = CssForm.submit;
      }

    }
  }

  function SubmitButtonController() {
  }

}());
