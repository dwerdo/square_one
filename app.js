angular.module('myApp', ['ngAnimate-animate.css']).controller('fullNameCtrl', function($rootScope, $scope, $timeout) {
    $scope.toggle = function() {
        if (!$scope.editable) {
            $scope.editName();
        } else {
            $scope.acceptChanges();
        } 
    }

    $scope.editName = function() {
        angular.element('.container').removeClass('dn-flip-x');
        $scope.editable = true;
        $scope.submitText = 'SAVE';
        $timeout(function() {
            angular.element('#nameInput').focus();
        }, 0);
        $rootScope.dn_flip_x = false;
        
    }

    $scope.acceptChanges = function() {
        if ($scope.nameForm.$valid) {
            $scope.editable = false;
            $scope.submitText = 'EDIT';
            $rootScope.dn_flip_x = true;
        }
    }   
});