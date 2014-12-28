angular.module('cd.ui.inputWrapperTpl', ['template/input-wrapper.html']);

angular.module("template/input-wrapper.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/input-wrapper.html",
    "<div class=\"{{vm.containerFieldClass}}\" >\n" +
    "\n" +
    "\n" +
    "    <label class=\"{{vm.labelClass}}\" for=\"{{vm.name}}\">\n" +
    "        {{vm.labelTitle}}<span ng-show=\"vm.required\"\n" +
    "                            class=\"required-fields\">&nbsp;*</span>\n" +
    "    </label>\n" +
    "\n" +
    "    <div class=\"{{vm.containerInputClass}}\"\n" +
    "         ng-class=\"{'has-error':vm.field.$invalid  && vm.form.submitted}\">\n" +
    "        <div ng-transclude>\n" +
    "                <!-- input goes here !-->\n" +
    "        </div>\n" +
    "        <div ng-show=\"vm.field.$invalid  && vm.form.submitted\">\n" +
    "            <p class=\"help-block\" ng-show=\"vm.field.$error.required && !vm.field.$error.number\">{{vm.errorMessages.required}}</p>\n" +
    "            <p class=\"help-block\" ng-show=\"vm.field.$error.maxlength\">{{vm.errorMessages.maxlength}}</p>\n" +
    "            <p class=\"help-block\" ng-show=\"vm.field.$error.number\">{{vm.errorMessages.number}}</p>\n" +
    "        </div>\n" +
    "        <div>\n" +
    "        {{vm.errorMaxLength}}</div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "");
}]);
