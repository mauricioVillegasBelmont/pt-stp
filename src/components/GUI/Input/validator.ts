import validator from "validator";

export type ValidationRule =
	| "email"
	| "url"
	| "numeric"
	| "alpha"
	| "alphanumeric"
	| "mobilePhone"
	| "creditCard"
	| "isLength"
	| "isEmpty"
	| "isBoolean"
	| "isDate"
	| "isFloat"
	| "isInt"
	| "isIP"
	| "isISBN"
	| "isUUID"
	| "isStrongPassword"
	| null;

export interface ValidationOptions {
	rule?: ValidationRule;
	minLength?: number;
	maxLength?: number;
	customMessage?: {
		error?: string;
		success?: string;
	};
	validatorOptions?: any;
}

export interface ValidationResult {
	isValid: boolean;
	message: string;
}

export function validate(
	value: string,
	options: ValidationOptions = {},
): ValidationResult {
	const {
		rule = null,
		minLength,
		maxLength,
		customMessage,
		validatorOptions,
	} = options;

	if (!rule && !minLength && !maxLength) {
		return {
			isValid: true,
			message: customMessage?.success || "",
		};
	}

	let isValid = true;
	let message = "";

	// Check empty
	if (!value || value.trim() === "") {
		isValid = false;
		message = customMessage?.error || "Este campo es requerido";
		return { isValid, message };
	}

	// Validate by rule
	switch (rule) {
		case "email":
			isValid = validator.isEmail(value);
			message = isValid
				? customMessage?.success || ""
				: customMessage?.error || "Ingresa un correo electrónico válido";
			break;

		case "url":
			isValid = validator.isURL(value);
			message = isValid
				? customMessage?.success || ""
				: customMessage?.error || "Ingresa una URL válida";
			break;

		case "numeric":
			isValid = validator.isNumeric(value);
			message = isValid
				? customMessage?.success || ""
				: customMessage?.error || "Ingresa solo números";
			break;

		case "alpha":
			isValid = validator.isAlpha(value);
			message = isValid
				? customMessage?.success || ""
				: customMessage?.error || "Ingresa solo letras";
			break;

		case "alphanumeric":
			isValid = validator.isAlphanumeric(value);
			message = isValid
				? customMessage?.success || ""
				: customMessage?.error || "Ingresa solo letras y números";
			break;

		case "mobilePhone":
			isValid = validator.isMobilePhone(value, "any");
			message = isValid
				? customMessage?.success || ""
				: customMessage?.error || "Ingresa un número de teléfono válido";
			break;

		case "creditCard":
			isValid = validator.isCreditCard(value);
			message = isValid
				? customMessage?.success || ""
				: customMessage?.error || "Ingresa un número de tarjeta válido";
			break;

		case "isBoolean":
			isValid = validator.isBoolean(value);
			message = isValid
				? customMessage?.success || ""
				: customMessage?.error || "Ingresa un valor booleano válido";
			break;

		case "isDate":
			isValid = validator.isDate(value);
			message = isValid
				? customMessage?.success || ""
				: customMessage?.error || "Ingresa una fecha válida";
			break;

		case "isFloat":
			isValid = validator.isFloat(value, validatorOptions);
			message = isValid
				? customMessage?.success || ""
				: customMessage?.error || "Ingresa un número decimal válido";
			break;

		case "isInt":
			isValid = validator.isInt(value, validatorOptions);
			message = isValid
				? customMessage?.success || ""
				: customMessage?.error || "Ingresa un número entero válido";
			break;

		case "isIP":
			isValid = validator.isIP(value);
			message = isValid
				? customMessage?.success || ""
				: customMessage?.error || "Ingresa una dirección IP válida";
			break;

		case "isUUID":
			isValid = validator.isUUID(value);
			message = isValid
				? customMessage?.success || ""
				: customMessage?.error || "Ingresa un UUID válido";
			break;

		case "isStrongPassword":
			isValid = validator.isStrongPassword(value, validatorOptions);
			message = isValid
				? customMessage?.success || ""
				: customMessage?.error || "La contraseña es muy débil";
			break;

		default:
			break;
	}

	// Check length constraints
	if (isValid && minLength !== undefined) {
		if (value.length < minLength) {
			isValid = false;
			message = customMessage?.error || `Mínimo ${minLength} caracteres`;
		}
	}

	if (isValid && maxLength !== undefined) {
		if (value.length > maxLength) {
			isValid = false;
			message = customMessage?.error || `Máximo ${maxLength} caracteres`;
		}
	}

	if (isValid && !message) {
		message = customMessage?.success || "";
	}

	return { isValid, message };
}
