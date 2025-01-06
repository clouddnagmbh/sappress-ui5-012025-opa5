/*global QUnit*/
import opaTest from "sap/ui/test/opaQunit";
import AppPage from "./pages/AppPage";
import ViewPage from "./pages/MainPage";
import Opa5 from "sap/ui/test/Opa5";

QUnit.module("Navigation Journey");

const onTheAppPage = new AppPage();
const onTheViewPage = new ViewPage();

Opa5.extendConfig({ viewNamespace: "at.clouddna.demo.view.", autoWait: true });

opaTest("Should see the message toast after save button press", function () {
	// Arrangements = Given
	// eslint-disable-next-line @typescript-eslint/no-floating-promises
	onTheAppPage.iStartMyUIComponent({
		componentConfig: {
			name: "at.clouddna.demo"
		}
	});

	// Assertions = When
	onTheAppPage.iShouldSeeTheApp();
	onTheViewPage.iShouldSeeThePageView();
	onTheViewPage.iPressOnTheButton();
	onTheViewPage.iShouldSeeTheToast();

	// Cleanup
	// eslint-disable-next-line @typescript-eslint/no-floating-promises
	onTheAppPage.iTeardownMyApp();
});
