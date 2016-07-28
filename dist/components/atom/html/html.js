var Handlebars = require("handlebars/runtime");module.exports = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<!DOCTYPE html>\n<html>\n"
    + alias2((helpers.component || (depth0 && depth0.component) || alias1).call(depth0,"html__head",{"name":"component","hash":{"title":(helpers.joinSpace || (depth0 && depth0.joinSpace) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.attribs : depth0)) != null ? stack1.pageName : stack1),((stack1 = (data && data.root)) && stack1.siteName),{"name":"joinSpace","hash":{},"data":data})},"data":data}))
    + "\n<body>\n\n"
    + ((stack1 = ((helper = (helper = helpers.children || (depth0 != null ? depth0.children : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"children","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n\n"
    + alias2((helpers.component || (depth0 && depth0.component) || alias1).call(depth0,"html__foot",{"name":"component","hash":{},"data":data}))
    + "\n</body>\n</html>\n";
},"useData":true});