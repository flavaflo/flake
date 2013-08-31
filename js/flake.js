(function ($, window) {
  "use strict";

  // flake plugin
  var flake = {
    init: function () {
      console.log("init");
      this.version = "10.2.r14";
      window.oncontextmenu = function () {
        flake.menu();
        return false;
      };
    },
    menu: function () {
      console.log("menu");
    },
    remove: function () {
      console.log("remove");
    }
  };

  flake.init();

}(jQuery, window));