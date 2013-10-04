'use strict';

angular.module('omnibox', ["templates-main"])
  .directive('omnibox', ["$compile", "$templateCache",
    function($compile, $templateCache) {

    var getTemplate = function(contentType) {
      if (contentType === undefined) contentType = 'empty';

      var template,
      templateUrl = 'templates/' + contentType + '.html';

      template = $templateCache.get(templateUrl);

      return template;

    };

    var linker = function(scope, element, attrs) {

      var replaceTemplate = function(){
        var template = getTemplate(scope.box.type);
          // we don't want the dynamic template to overwrite the search box.
          // NOTE: the reason for selecting the specific child is jqLite does not
          // support selectors.
          angular.element(element.children()[1]).html(template);
            $compile(element.contents())(scope);
      };

      scope.$watch('box.type', function(){
        replaceTemplate();
        if (scope.box.type !== 'empty'){
          scope.box.showCards = true;
        } else {
          scope.box.showCards = false;
        }
      });

      replaceTemplate();

      // this should probably not be in this directive but in a subdirective.
      scope.$watch('selected_timeseries', function () {
        if (scope.selected_timeseries !== undefined){

          scope.data = scope.format_data(scope.selected_timeseries.events);
          // dit kan zeker nog mooier
          scope.metadata.title = scope.selected_timeseries.location.name;
          scope.metadata.ylabel = 'Aciditeit (%)' ; //scope.selected_timeseries.parameter + scope.selected_timeseries.unit.code
          scope.metadata.xlabel = "Tijd";
        } else {
          scope.data = undefined;
        }
      });

    };

  return {
    restrict: 'E',
    link: linker,
    templateUrl: 'templates/omnibox-search.html'
  };
}]);