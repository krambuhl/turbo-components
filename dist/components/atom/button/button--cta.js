var Handlebars = require("handlebars/runtime");module.exports = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "	"
    + ((stack1 = ((helper = (helper = helpers.children || (depth0 != null ? depth0.children : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"children","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.createModifier || (depth0 && depth0.createModifier) || helpers.helperMissing).call(depth0,"atom/button",{"name":"createModifier","hash":{"name":"cta"},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});