/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"CustomControl/DemoApp_CustControl/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});