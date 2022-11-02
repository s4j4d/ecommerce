(function ($) {
  "use strict";
  let THEME = {};

  /*====== Example ======*/
  THEME.run = function () {
    // Write your code here
    $('#sendPhone').click(function() {
      const phone = $('#phone').val();
      alert( phone );
    });
    
    
  };
  /*====== end Example ======*/

  $(window).on("load", function () {});
  $(document).ready(function () {
    THEME.run();
  });
})(jQuery);
