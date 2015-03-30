(function () {
  'use strict';
  angular
    .module('cd.ui.inputWrapper')
    .provider('CssForm', CssForm);

  function CssForm() {
    var _this = this;

    _this.cssForm = {
      wrapperField: 'form-group',
      wrapperInput: 'col-sm-12',
      wrapperInputNumber: 'col-sm-3',
      wrapperSubmit:'col-sm-offset-3 col-sm-8',
      label: 'col-sm-3  control-label',
      input: 'form-control',
      submit:'btn btn-primary btn-submit',
      groupInputLarge:'form-group-lg'
    };
    _this.setCssForm = setCssForm;
    _this.$get = getFunction;

    function getFunction() {
      return _this.cssForm;
    }

    function setCssForm(cssForm) {
      _this.cssForm = cssForm;
    }
  }

}());