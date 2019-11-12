/*sap.ui.define([
	"sap/ui/core/Control"
	],function(Control){
		"use strict";
		return Control.extend("CustomControl.DemoApp_CustControl.control.customStyle",{
		"metadata":{
			"properties":{
				title : {type : "string"},
				"src1":"string"
			},
			events:{}
		},
		init:function(){
			
		},
		
		renderer:function(oRm,oControl){
			oRm.write("<div");
			oRm.writeControlData(oControl);
			
			oRm.addClass("myCustTile");
			oRm.writeClasses();
			oRm.write(">");
			oRm.write("<img");
			oRm.addClass("img1");
			oRm.writeClasses();
			oRm.writeAttributeEscaped("src",oControl.getSrc1());
			oRm.write(">");
			oRm.write("</img>");
			oRm.write("<div> name: "+oControl.getTitle()+"</div>");
			oRm.write("</div>");
		},
		onAfterRendering : function(evt){},
		setSrc1:function(value){
			this.setProperty("src1",value,true);
			return this;
		},
		setTitle:function(value){
			this.setProperty("title",value,true);
			return this;
		}
		
		});
	});
	*/

sap.ui.define([
	"sap/m/Image"
], function (Image) {
	return Image.extend("CustomControl.DemoApp_CustControl.Control.customStyle", { //inherit Button definition                                      
		metadata: {
			events: {
				"myFunction": {} //new event definition hover
			}
		},
		renderer: {},
		onmouseover: function () {
				this.fireMyFunction();
			}
			//Standard renderer method is not overridden
	});

});