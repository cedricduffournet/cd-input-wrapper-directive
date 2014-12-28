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
   *
   * @toDo
   * Write test
   */
  angular
    .module('cd.ui.inputWrapper', [
      'cd.ui.inputWrapperTpl'
    ])
    .directive('cdInputWrapper', inputWrapper);


  inputWrapper.$inject = ['ErrorMessages'];
  function inputWrapper(ErrorMessages) {
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
        required: '=required'

      },
      link: linkFunc
    };

    return directive;

    function linkFunc($scope, element, attrs, form) {
      $scope.vm.form = form;
      $scope.vm.field = form[$scope.vm.name];
      $scope.vm.errorMessages = ErrorMessages;
    }
  }

  function InputWrapperController() {
  }

}());
