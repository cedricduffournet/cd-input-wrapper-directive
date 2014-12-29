(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name cd.ui.inputWrapper.directive:cdInputWrapper
   * @restrict A
   *
   * @description
   * Wrap input element in form
   *
   * @param {String=} containerFieldClass CSS class for container
   * @param {String=} containerInputClass CSS class for input container
   * @param {String=} labelClass CSS class for label
   * @param {String=} labelTitle title of the label
   * @param {String=} name input name
   * @param {Boolean=} required is field required ?
   * @param {Boolean=} largeInput is field large ?
   *
   * @toDo
   * Write test
   */
  angular
    .module('cd.ui.inputWrapper', [
      'cd.ui.inputWrapperTpl'
    ])
    .directive('cdInputWrapper', inputWrapper);


  inputWrapper.$inject = ['ErrorMessages', 'CssForm'];
  function inputWrapper(ErrorMessages, CssForm) {
    var directive = {
      templateUrl: 'template/input-wrapper.html',
      restrict: 'A',
      replace: false,
      transclude: true,
      require: '^form',
      controller: InputWrapperController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        containerFieldClass: '@containerFieldClass',
        containerInputClass: '@containerInputClass',
        labelClass: '@labelClass',
        labelTitle: '@labelTitle',
        name: '@name',
        required: '=required',
        largeInput: '=largeInput'

      },
      link: linkFunc
    };

    return directive;

    function linkFunc($scope, element, attrs, form) {
      $scope.vm.form = form;
      $scope.vm.field = form[$scope.vm.name];
      $scope.vm.errorMessages = ErrorMessages;

      if (!angular.isDefined($scope.vm.containerFieldClass)) {
        $scope.vm.containerFieldClass = CssForm.wrapperField;
        if (angular.isDefined($scope.vm.largeInput) && $scope.vm.largeInput) {
          $scope.vm.containerFieldClass += ' ' + CssForm.groupInputLarge;
        }
      }


      if (!angular.isDefined($scope.vm.containerInputClass)) {
        $scope.vm.containerInputClass = CssForm.wrapperInput;
      }

      if (!angular.isDefined($scope.vm.labelClass)) {
        $scope.vm.labelClass = CssForm.label;
      }

    }
  }

  function InputWrapperController() {
  }

}());
