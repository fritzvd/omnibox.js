nxt-box
=======

omnibox stuff for lizard-nxt.
This directive dynamically loads templates from the service based on the type you feed it.

Usage
-----

Add 'omnibox', to your app dependencies. In your AppCtrl scope change the `$scope.box.type` parameter to the type of box/template you want to open. The search template included in the repo is transcluded around the dynamically loaded template.
