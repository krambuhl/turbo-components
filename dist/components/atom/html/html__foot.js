var Handlebars = require("handlebars/runtime");module.exports = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<script src=\"/assets/bundle.js\"></script>\n"
    + ((stack1 = ((helper = (helper = helpers.children || (depth0 != null ? depth0.children : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"children","hash":{},"data":data}) : helper))) != null ? stack1 : "");
},"useData":true});