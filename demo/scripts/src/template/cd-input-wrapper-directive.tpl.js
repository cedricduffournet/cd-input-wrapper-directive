angular.module('cd.ui.inputWrapperTpl', ['template/input-wrapper.html', 'template/submit-button.html']);

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
    "    <div class=\"col-sm-9\"\n" +
    "         ng-class=\"{'has-error':vm.field.$invalid  && vm.form.submitted}\">\n" +
    "         <div class=\"row\">\n" +
    "            <div class=\"{{vm.containerInputClass}}\">\n" +
    "                <div ng-transclude ng-class=\"{'input-group':vm.inputGroup}\">\n" +
    "                        <!-- input goes here !-->\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\" ng-show=\"vm.helpTranslateId != ''\">\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <p class=\"help-block\" translate=\"{{vm.helpTranslateId}}\">\n" +
    "\n" +
    "                </p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div ng-show=\"vm.field.$invalid  && vm.form.submitted\" class=\"col-sm-9\">\n" +
    "                <p class=\"help-block\" ng-show=\"vm.field.$error.required && !vm.field.$error.number\">{{vm.errorMessages.required}}</p>\n" +
    "                <p class=\"help-block\" ng-show=\"vm.field.$error.maxlength\">{{vm.errorMessages.maxlength}}</p>\n" +
    "                <p class=\"help-block\" ng-show=\"vm.field.$error.number\">{{vm.errorMessages.number}}</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/submit-button.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/submit-button.html",
    "<div class=\"{{vm.containerFieldClass}}\">\n" +
    "                <div class=\"{{vm.containerSubmitClass}}\">\n" +
    "                    <button type=\"submit\" class=\"{{vm.buttonClass}}\" >{{vm.title}}</button>\n" +
    "\n" +
    "                    <button ng-if=\"vm.withCloseButton\" type=\"button\" class=\"btn btn-default\" ng-click=\"$hide()\">\n" +
    "                        Fermer\n" +
    "                    </button>\n" +
    "                    \n" +
    "                </div>\n" +
    "            </div>");
}]);
