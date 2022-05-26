import { render, fireEvent, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("checkbox to disable and enable button", () => {
	render(<SummaryForm />);

	const checkbox = screen.getByRole("checkbox", {
		name: "I agree to Terms and Conditions",
	});
	const button = screen.getByRole("button", { name: "Confirm order" });

	// Checkbox is unchecked by default:
	expect(checkbox).not.toBeChecked();

	// Button is disabled by default:
	expect(button).toBeDisabled();

	// Checking the checkbox enables the button:
	fireEvent.click(checkbox);
	expect(checkbox).toBeChecked();
	expect(button).toBeEnabled();

	// Unchecking the checkbox disables the button:
	fireEvent.click(checkbox);
	expect(checkbox).not.toBeChecked();
	expect(button).toBeDisabled();
});
