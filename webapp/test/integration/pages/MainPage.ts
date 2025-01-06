import Input from "sap/m/Input";
import Press from "sap/ui/test/actions/Press";
import Opa5 from "sap/ui/test/Opa5";

const sViewName = "Main";

export default class MainPage extends Opa5 {
	// Actions
	iPressOnTheButton() {
		this.waitFor({
			id: "saveButton",
			viewName: sViewName,
			actions: new Press(),
			success: () => {
				Opa5.assert.ok(true, "The button was pressed");
			},
			errorMessage: "Did not find the save button"
		});
	}

	// Assertions = Then
	iShouldSeeThePageView() {
		return this.waitFor({
			id: "page",
			viewName: sViewName,
			success: function () {
				Opa5.assert.ok(true, "The " + sViewName + " view is displayed");
			},
			errorMessage: "Did not find the " + sViewName + " view"
		});
	}

	iShouldSeeTheToast() {
		let oInput: Input;

		this.waitFor({
			id: "inputFirstname",
			viewName: sViewName,
			success: (oControl: any) => {
				oInput = oControl;
			}
		});

		return this.waitFor({
			viewName: sViewName,
			autoWait: false,
			check: () => {
				let oMessageToast = Opa5.getJQuery().find(".sapMMessageToast") as any;
				return oMessageToast[0].innerText === "Successfully saved, " + oInput.getValue();
			},
			success: () => {
				Opa5.assert.ok(true, "The toast message is displayed");
			},
			errorMessage: "Did not find the toast"
		});

	}

}