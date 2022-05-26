import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm";

test("checkbox to disable and enable button", async () => {
	render(<SummaryForm />);
	const user = userEvent.setup();

	const checkbox = screen.getByRole("checkbox", {
		name: "I agree to Terms and Conditions",
	});
	const button = screen.getByRole("button", { name: "Confirm order" });

	// Checkbox is unchecked by default:
	expect(checkbox).not.toBeChecked();

	// Button is disabled by default:
	expect(button).toBeDisabled();

	// Checking the checkbox enables the button:
	await user.click(checkbox);
	expect(checkbox).toBeChecked();
	expect(button).toBeEnabled();

	// Unchecking the checkbox disables the button:
	await user.click(checkbox);
	expect(checkbox).not.toBeChecked();
	expect(button).toBeDisabled();
});

test("popover responds to hover", async () => {
	render(<SummaryForm />);
	const user = userEvent.setup();

	// Popover starts out hidden:
	const nullPopover = screen.queryByText(
		/no ice cream will actually be delivered/i
	);
	expect(nullPopover).not.toBeInTheDocument();

	// Popover appears when mouse over checkbox's label:
	const termsAndConditions = screen.getByText(/terms and condition/i);
	await user.hover(termsAndConditions);

	const popover = screen.getByText(/no ice cream will actually be delivered/i);
	expect(popover).toBeInTheDocument();

	// Popover disappear when mouse out checkbox's label:'
	await user.unhover(termsAndConditions);
	const nullPopoverAgain = screen.queryByText(
		/no ice cream will actually be delivered/i
	);
	expect(nullPopoverAgain).not.toBeInTheDocument();
});
