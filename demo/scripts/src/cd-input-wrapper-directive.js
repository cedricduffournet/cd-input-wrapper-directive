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
   * @param {String=} errorMaxLength error text for max length
   * @param {String=} errorNumber error text for number
   * @param {String=} errorRequired error text required
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


  //inputWrapper.$inject = ['$tooltip', '$popover'];
  function inputWrapper() {
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
        errorMaxlength: '@errorMaxlength',
        errorNumber: '@errorNumber',
        errorRequired: '@errorRequired',
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

      console.log( $scope.vm.field);
    }
  }

  function InputWrapperController() {
  }

}());
