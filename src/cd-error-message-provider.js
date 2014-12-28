(function () {
  'use strict';
  angular
    .module('cd.ui.inputWrapper')
    .provider('ErrorMessages', ErrorMessages);

  function ErrorMessages() {
    var _this = this;

    _this.errorMessages = {
      required: 'Field required',
      maxlength: 'Field too long',
      number: 'Number required'
    };
    _this.setErrorMessages = setErrorMessages;
    _this.$get = getFunction;

    function getFunction() {
      return _this.errorMessages;
    }

    function setErrorMessages(errorMessages) {
      _this.errorMessages = errorMessages;
    }
  }

}());