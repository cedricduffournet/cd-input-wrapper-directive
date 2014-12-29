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
        largeInput: '=largeInput'
      },
      link: linkFunc
    };

    return directive;

    function linkFunc($scope, element, attrs, form, transclude) {

      //to get the element name
      transclude(function (clone) {
        var els = Array.prototype.slice.call(clone);
        els = els.filter(function (element) {
          return element.nodeType !== Node.TEXT_NODE;
        });

        $scope.vm.name = els[0].name;
        $scope.vm.required = els[0].required;
      });

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
