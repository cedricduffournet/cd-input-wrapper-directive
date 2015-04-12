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


    inputWrapper.$inject = ['ErrorMessages', 'CssForm', '$compile', '$timeout'];
    function inputWrapper(ErrorMessages, CssForm, $compile, $timeout) {
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
                largeInput: '=largeInput',
                helpTranslateId: '@helpTranslateId',
                inputGroup: '=inputGroup'
            },
            link: linkFunc
            
        };

        return directive;

        function compileFunc(tElement, tAttrs) {
            return function link($scope, element, attrs, form, transcludeFn) {
                transcludeFn($scope, function (clone, innerScope) {
                    var test = $compile(clone)($scope);
                    $scope.apply();
                    console.log(test);
                });
                //$compile(element, transcludeFn)(scope);

            }
        }

        function linkFunc($scope, element, attrs, form, transclude) {


            var typeInput = '';

            if (!angular.isDefined($scope.vm.helpTranslateId)) {
                $scope.vm.helpTranslateId = '';
            }
            $timeout(function () {
                //to get the element name
                transclude($scope, function (clone, innerScope) {

                    var els = Array.prototype.slice.call(clone);

                    els = els.filter(function (element) {
                        return element.nodeType !== Node.TEXT_NODE;
                    });


                    var myELem = angular.element(els[0]);


                    //checkbox
                    if (myELem[0].nodeName == 'DIV' && myELem[0].className.indexOf('containerCheckbox') != -1) {
                        myELem = angular.element(myELem[0]);
                    }


                    //checkbox ou radio
                    if (myELem[0].nodeName == 'LABEL') {
                        els = Array.prototype.slice.call(els[0].childNodes);
                        els = els.filter(function (element) {
                            return element.nodeType !== Node.TEXT_NODE;
                        });
                        myELem = angular.element(els[0]);
                    }
                    $scope.vm.name = myELem.attr('name');
                    $scope.vm.required = (myELem.attr('ng-required') || els[0].required);
                    typeInput = myELem.attr('type');
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
                    switch (typeInput) {
                        case 'number':
                            $scope.vm.containerInputClass = CssForm.wrapperInputNumber;
                            break;
                        default:
                            $scope.vm.containerInputClass = CssForm.wrapperInput;
                    }
                }

                if (!angular.isDefined($scope.vm.labelClass)) {
                    $scope.vm.labelClass = CssForm.label;
                }

            });

        }
    }

    function InputWrapperController() {
    }

}());
