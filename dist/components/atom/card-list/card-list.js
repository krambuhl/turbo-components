var Handlebars = require("handlebars/runtime");module.exports = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing;

  return "<div "
    + this.escapeExpression((helpers.classAttrib || (depth0 && depth0.classAttrib) || alias1).call(depth0,"card-list",((stack1 = (depth0 != null ? depth0.attribs : depth0)) != null ? stack1.addClass : stack1),{"name":"classAttrib","hash":{},"data":data}))
    + ">\n	"
    + ((stack1 = ((helper = (helper = helpers.children || (depth0 != null ? depth0.children : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"children","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n</div>\n";
},"useData":true});