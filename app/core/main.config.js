'use strict';
angular.module('app.core')
    .config(function ($translateProvider, $ionicConfigProvider, $mdGestureProvider, $httpProvider) {
      $mdGestureProvider.skipClickHijack();
        // angular-translate configuration
      $translateProvider.useLoader('$translatePartialLoader', {
        urlTemplate: '{part}/i18n/{lang}.json'
      });
      $translateProvider.preferredLanguage('en');
      $translateProvider.useSanitizeValueStrategy('sanitize');
      $ionicConfigProvider.tabs.position('bottom');
      $httpProvider.defaults.withCredentials = true;
    });
