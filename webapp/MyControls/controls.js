sap.ui.define([
	"sap/ui/core/Control"
], function (Control) {
	"use strict";
	return Control.extend("CustomControl.DemoApp_CustControl.MyControls.controls", {
		metadata : {
			properties:{
				"text":"",
				"color":"",
				"border":""
			},
			aggregation:{},
			event:{},
			methods:{}
		},
		init : function () {
			this.setBorder("2px solid black");
		},
		renderer : function (oRM, oControl) {
			oRM.write("<h1");
			oRM.addStyle("color",oControl.getColor());
			oRM.addStyle("border",oControl.getBorder());
			oRM.writeStyles();
			oRM.write(">"+oControl.getText()+"</h1>");
		}
	});
});