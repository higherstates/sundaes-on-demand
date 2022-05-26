import React, { useState } from "react";
import { Form, Button, Popover, OverlayTrigger } from "react-bootstrap";
import "./SummaryForm.css";

const SummaryForm = () => {
	const [isDisabled, setIsDisabled] = useState(false);
	console.log(isDisabled);

	const popover = (
		<Popover id="popover-basic">
			<Popover.Body>No ice cream will actually be delivered</Popover.Body>
		</Popover>
	);

	const checkboxLabel = (
		<OverlayTrigger placement="right" overlay={popover}>
			<span>
				I agree to <span style={{ color: "blue" }}>Terms and Conditions</span>
			</span>
		</OverlayTrigger>
	);

	return (
		<Form>
			<Form.Group controlId="checkbox-confirm">
				<Form.Check
					className="d-flex justify-content-center"
					type="checkbox"
					checked={isDisabled}
					label={checkboxLabel}
					onChange={(e) => setIsDisabled(e.target.checked)}
				/>
			</Form.Group>
			<Button disabled={!isDisabled} variant="light" type="submit">
				Confirm order
			</Button>
		</Form>
	);
};

export default SummaryForm;
