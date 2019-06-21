// import purify from "purify-css"
const purify = require("purify-css")

// let content = ""
// let css = ""
// let options = {
//     output: "filepath/output.css"
// }
// purify(content, css, options)

var content = ['index.html'];
var css = 
[
'0wp-content/plugins/price-table/css/style.css',
'0wp-content/plugins/price-table/css/style-ribbons.css',
'0wp-content/plugins/price-table/ParaAdmin/css/ParaAdmin.css',
'0wp-content/plugins/price-table/themes/flat/style.css',
'0wp-content/plugins/contact-form-7/includes/css/styles.css',
'0wp-content/plugins/revolution_slider/public/assets/css/settings.css',
'0wp-content/plugins/wolf-twitter/assets/css/twitter.min.css',
'0wp-content/themes/nt-campfire/style.css',
'0wp-content/themes/nt-campfire/css/bootstrap.css',
'0wp-content/plugins/visual_composer/assets/lib/bower/font-awesome/css/font-awesome.min.css',
'0wp-content/themes/nt-campfire/css/slick.css',
'0wp-content/themes/nt-campfire/css/ionicons.min.css',
'0wp-content/themes/nt-campfire/css/slicknav.css',
'0wp-content/themes/nt-campfire/css/style.css',
'0wp-content/themes/nt-campfire/css/visual-composer.css',
'0wp-content/themes/nt-campfire/js/library/flexslider/flexslider.css',
'0wp-content/themes/nt-campfire/css/wordpress.css',
'0wp-content/themes/nt-campfire/css/update.css',
'0wp-content/themes/nt-campfire-child/style.css'
];

var options = {
  output: 'purified.css',

  // Will minify CSS code in addition to purify.

  // Logs out removed selectors.
  rejected: true
};

purify(content, css, options);