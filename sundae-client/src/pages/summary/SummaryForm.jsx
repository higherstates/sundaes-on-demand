import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./SummaryForm.css";

const SummaryForm = () => {
	const [isDisabled, setIsDisabled] = useState(false);

	const checkboxLabel = (
		<span>
			I agree to <span style={{ color: "blue" }}>Terms and Conditions</span>
		</span>
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
