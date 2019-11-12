var that = this;
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("CustomControl.DemoApp_CustControl.controller.View1", {
		onInit: function () {

			// this is just to test the git commit#3
			/*this.getView().byId('image_ctrl').addDelegate({
			                                                          onfocusin : function(oEvent){
			                                                                         
			                                                          	 this.getView().byId('image_ctrl').setWidth('200px');
			                                                           	 this.getView().byId('image_ctrl').setHeight('200px');
			                                                          	  
			                                                          },

			                                                                          onsapfocusleave : function(oEvent){
			                                                                                          var ctr = oEvent.target.id.split("--")[1].substring(1,5);
			                                                                                          var item1 = "t" + ctr; 
			                                                                                          this.getView().byId(item1).removeStyleClass("borderColor1"); }
			                                          });   */

			/*this.getView().byId('image_ctrl').attachBrowserEvent("mouseenter", function (oEvent) {
				that.getView().byId('image_ctrl').setWidth('200px');
				that.getView().byId('image_ctrl').setHeight('200px');
			});*/

		},
		onClick:function(){
			var oDialog = new sap.m.Dialog({
				stretch : sap.ui.Device.system.phone,
				customHeader : new sap.m.Bar({
					contentLeft : new sap.m.Label({
						text : "Title text here..."
					}),
					contentRight : new sap.m.Button({
						icon : "sap-icon://decline",
						press : function(){
							oDialog.close();
						}
					})
				}),
				verticalScrolling : false,
				horizontalScrolling : false,
				content : [
					new sap.m.Image({
						src : "test-resources/sap/ui/documentation/sdk/images/nature/ALotOfElephants_small.jpg",
						width : "300px",
						height : "300px"
					})
				]
			});
			oDialog.open();
		}
	});
});