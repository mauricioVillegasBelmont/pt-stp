import { validate } from "./validator";
import type {
	ValidationOptions,
	ValidationResult,
	ValidationRule,
} from "./validator";

const setInputValidation = (
	inputId: string,
	validationRule: ValidationRule,
	validationOptions: Omit<ValidationOptions, "rule" | "customMessage">,
	customMessages: {
		error?: string;
		success?: string;
	},
) => {
	const input = document.getElementById(inputId);
	const inputWrapper = document.getElementById(`${inputId}-input`);
	const messagesContainer = document.getElementById(`${inputId}-messages`);

	if (!input || !messagesContainer) {
		return;
	}

	const handleInput = () => {
		const value = (input as HTMLInputElement).value;

		const result: ValidationResult = validate(value, {
			rule: validationRule,
			...validationOptions,
			customMessage: customMessages,
		});

		messagesContainer.innerHTML = "";
		inputWrapper?.classList.remove("success", "error");

		if (result.message) {
			inputWrapper?.classList.add(result.isValid ? "success" : "error");
			const span = document.createElement("span");
			span.textContent = result.message;
			span.className = result.isValid ? "success" : "error";
			messagesContainer.appendChild(span);
		}
	};

	input.addEventListener("input", handleInput);
};

export { setInputValidation };
