(function ($, document) {
  "use strict";

  // flake plugin
  var flake = {
    init: function () {
      var self = this;
      this.version = "10.2.r14";
      this.$flake = $(this.template());
      $('body').append(this.$flake);

      document.oncontextmenu = function (e) {
        flake.menu(e);
        return false;
      };

      $(document).on("click", function (e) {
        e.preventDefault();
        self.$flake.removeClass("is_active");
      });
    },
    template: function () {
      return '<div class="flake">' +
          '<ul>' +
            '<li><a href="#">Zoom In</a></li>' +
            '<li><a href="#" class="is_disabled">Zoom Out</a></li>' +
            '<li><a href="#">Show All</a></li>' +
          '</ul>' +
          '<hr/>' +
          '<ul>' +
            '<li>' +
              '<a href="#">Quality</a>' +
              '<ul>' +
                '<li><a href="#">Low</a></li>' +
                '<li><a href="#">Medium</a></li>' +
                '<li><a href="#"class="is_active">High</a></li>' +
              '</ul>' +
            '</li>' +
          '</ul>' +
          '<hr/>' +
          '<ul>' +
            '<li><a href="#" class="is_active">Play</a></li>' +
            '<li><a href="#" class="is_active">Loop</a></li>' +
          '</ul>' +
          '<hr/>' +
          '<ul>' +
            '<li><a href="#">Rewind</a></li>' +
            '<li><a href="#">Forward</a></li>' +
            '<li><a href="#">Back</a></li>' +
          '</ul>' +
          '<hr/>' +
          '<ul>' +
            '<li><a href="javascript:window.print();">Print...</a></li>' +
          '</ul>' +
          '<hr/>' +
          '<ul>' +
            '<li><a href="#">Settings...</a></li>' +
            '<li><a href="#">Global Settings...</a></li>' +
            '<li><a href="#">Adobe Flash Player ' + this.version + '</a></li>' +
          '</ul>' +
        '</div>';
    },
    menu: function (e) {
      this.$flake.toggleClass("is_active").css({
        top: e.pageY,
        left: e.pageX
      });
    },
    mousePos: function () {

    },
    remove: function () {
      console.log("remove");
    }
  };

  flake.init();

}(jQuery, document));