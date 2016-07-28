var Handlebars = require("handlebars/runtime");module.exports = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<head>\n  <title>"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.attribs : depth0)) != null ? stack1.title : stack1), depth0))
    + "</title>\n  <link rel=\"stylesheet\" href=\"/assets/bundle.css\">\n  "
    + ((stack1 = ((helper = (helper = helpers.children || (depth0 != null ? depth0.children : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"children","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n</head>";
},"useData":true});