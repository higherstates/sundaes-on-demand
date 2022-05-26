import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./SummaryForm.css";

const SummaryForm = () => {
	const [isDisabled, setIsDisabled] = useState(true);

	return (
		<>
			<Form.Group>
				<Form.Check
					className="d-flex justify-content-center"
					type="checkbox"
					id="checkbox-confirm"
					name="checkbox-confirm"
					label="I agree to Terms and Conditions"
					onClick={() => setIsDisabled((prev) => !prev)}
				/>
			</Form.Group>
			<Button disabled={isDisabled} variant="light">
				Confirm order
			</Button>
		</>
	);
};

export default SummaryForm;
