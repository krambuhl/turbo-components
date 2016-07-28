var Handlebars = require("handlebars/runtime");module.exports = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "  "
    + this.escapeExpression((helpers.component || (depth0 && depth0.component) || helpers.helperMissing).call(depth0,"organism/product-grid",{"name":"component","hash":{"products":((stack1 = (depth0 != null ? depth0.attribs : depth0)) != null ? stack1.myproducts : stack1),"addClass":"search-results"},"data":data}))
    + "\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1;

  return "  "
    + this.escapeExpression((helpers.component || (depth0 && depth0.component) || helpers.helperMissing).call(depth0,"organism/product-list",{"name":"component","hash":{"products":((stack1 = (depth0 != null ? depth0.attribs : depth0)) != null ? stack1.myproducts : stack1),"addClass":"search-results"},"data":data}))
    + "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.escapeExpression, alias2=helpers.helperMissing;

  return "<header>"
    + alias1(this.lambda(((stack1 = (depth0 != null ? depth0.attribs : depth0)) != null ? stack1.pageName : stack1), depth0))
    + "</header>\n\n"
    + ((stack1 = helpers['if'].call(depth0,(helpers.eq || (depth0 && depth0.eq) || alias2).call(depth0,((stack1 = (depth0 != null ? depth0.attribs : depth0)) != null ? stack1.displayMode : stack1),"grid",{"name":"eq","hash":{},"data":data}),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\n<footer>&copy; Copyright "
    + alias1((helpers.date || (depth0 && depth0.date) || alias2).call(depth0,"YYYY",{"name":"date","hash":{},"data":data}))
    + "</footer>";
},"useData":true});