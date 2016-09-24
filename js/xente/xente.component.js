(function(angular){
    'use strict';

    angular.module('app').component('xente', {
        templateUrl: 'js/xente/xente.html',
        controller: controller
    });

    function controller($http) {
        var self = this;

        $http.get('js/xente/xente.json').then(function(data) {
            self.aXente = data.data;
            self.selected = self.aXente[0];
        });
    }
})(angular);
