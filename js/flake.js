(function ($, document) {
  "use strict";

  // flake plugin
  var flake = {
    init: function () {
      var self = this;
      this.$flake = $('.flake');
      this.version = "10.2.r14";
      this.lang = "de";
      this.locales = {
        en: {
          zoomin: "Zoom In",
          zoomout: "Zoom On",
          showall: "Show all",
          quality: "Quality",
          quality_low: "Low",
          quality_medium: "Medium",
          quality_hight: "High",
          play: "Play",
          loop: "Loop"
        },
        de: {

        }
      };

      document.oncontextmenu = function () {
        flake.menu();
        return false;
      };

      $(document).on("click", function (e) {
        e.preventDefault();
        self.$flake.removeClass("is_active");
      });
    },

    localizedString: function (identifier) {
      return this.locales[this.lang][identifier] || identifier;
    },

    menu: function () {
      this.$flake.toggleClass("is_active");
    },
    remove: function () {
      console.log("remove");
    }
  };

  flake.init();

}(jQuery, document));