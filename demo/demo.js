(function () {
  'use strict';
  function AppCtrl($scope) {
    /* jshint validthis: true */
    var vm = this;
    vm.submit = submit;

    function submit(){
      if (vm.form.$valid) {
        console.log('form OK');
      } else {
        vm.form.submitted = true;
        console.log('form pas OK');
      }
    }
  }


  angular
    .module('MyApp', ['cd.ui.inputWrapper'])
    .controller('AppCtrl', AppCtrl);

}());


