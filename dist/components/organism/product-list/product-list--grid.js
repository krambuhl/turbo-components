var Handlebars = require("handlebars/runtime");module.exports = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return this.escapeExpression((helpers.component || (depth0 && depth0.component) || helpers.helperMissing).call(depth0,"organism/product-list",{"name":"component","hash":{"products":((stack1 = (depth0 != null ? depth0.attribs : depth0)) != null ? stack1.products : stack1),"addClass":"product-list--grid"},"data":data}));
},"useData":true});