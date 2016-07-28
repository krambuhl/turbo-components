var Handlebars = require("handlebars/runtime");module.exports = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing;

  return "	<ol "
    + this.escapeExpression((helpers.classAttrib || (depth0 && depth0.classAttrib) || alias1).call(depth0,"list list--ordered",((stack1 = (depth0 != null ? depth0.attribs : depth0)) != null ? stack1.addClass : stack1),{"name":"classAttrib","hash":{},"data":data}))
    + ">\n		"
    + ((stack1 = ((helper = (helper = helpers.children || (depth0 != null ? depth0.children : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"children","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n	</ol>\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(helpers.eq || (depth0 && depth0.eq) || helpers.helperMissing).call(depth0,((stack1 = (depth0 != null ? depth0.attribs : depth0)) != null ? stack1.type : stack1),"unordered",{"name":"eq","hash":{},"data":data}),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.program(6, data, 0),"data":data})) != null ? stack1 : "");
},"4":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing;

  return "	<ul "
    + this.escapeExpression((helpers.classAttrib || (depth0 && depth0.classAttrib) || alias1).call(depth0,"list list--unordered",((stack1 = (depth0 != null ? depth0.attribs : depth0)) != null ? stack1.addClass : stack1),{"name":"classAttrib","hash":{},"data":data}))
    + ">\n		"
    + ((stack1 = ((helper = (helper = helpers.children || (depth0 != null ? depth0.children : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"children","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n	</ul>\n";
},"6":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing;

  return "	<ul "
    + this.escapeExpression((helpers.classAttrib || (depth0 && depth0.classAttrib) || alias1).call(depth0,"list",((stack1 = (depth0 != null ? depth0.attribs : depth0)) != null ? stack1.addClass : stack1),{"name":"classAttrib","hash":{},"data":data}))
    + ">\n		"
    + ((stack1 = ((helper = (helper = helpers.children || (depth0 != null ? depth0.children : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"children","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n	</ul>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(helpers.eq || (depth0 && depth0.eq) || helpers.helperMissing).call(depth0,((stack1 = (depth0 != null ? depth0.attribs : depth0)) != null ? stack1.type : stack1),"ordered",{"name":"eq","hash":{},"data":data}),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});