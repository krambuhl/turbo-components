var Handlebars = require("handlebars/runtime");module.exports = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.attribs : depth0)) != null ? stack1.products : stack1),{"name":"each","hash":{},"fn":this.program(2, data, 1, blockParams),"inverse":this.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "");
},"2":function(depth0,helpers,partials,data,blockParams) {
    var stack1;

  return "		"
    + this.escapeExpression((helpers.component || (depth0 && depth0.component) || helpers.helperMissing).call(depth0,"molecule/product",{"name":"component","hash":{"feature":((stack1 = blockParams[0][0]) != null ? stack1.details : stack1),"url":((stack1 = blockParams[0][0]) != null ? stack1.url : stack1),"title":((stack1 = blockParams[0][0]) != null ? stack1.title : stack1),"addClass":"product-list__item"},"data":data,"blockParams":blockParams}))
    + "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=helpers.helperMissing;

  return ((stack1 = (helpers.component || (depth0 && depth0.component) || alias1).call(depth0,"atom/card-list",{"name":"component","hash":{"addClass":(helpers.joinSpace || (depth0 && depth0.joinSpace) || alias1).call(depth0,"product-list",((stack1 = (depth0 != null ? depth0.attribs : depth0)) != null ? stack1.addClass : stack1),{"name":"joinSpace","hash":{},"data":data,"blockParams":blockParams})},"fn":this.program(1, data, 0, blockParams),"inverse":this.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "");
},"useData":true,"useBlockParams":true});