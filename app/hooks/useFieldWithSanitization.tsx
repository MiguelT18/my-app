import React, { useState } from "react";
import useSanitizeField from "@/app/hooks/useSanitizeField";

const useFieldWithSanitization = ({
	type,
	name = "",
}: { type: string; name?: string }) => {
	const { sanitizedValue, handleChange } = useSanitizeField();
	const [error, setError] = useState<string>("");

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		handleChange(value);

		if (name === "name" && !isValidName(value)) {
			setError("El nombre no es válido");
		} else if (name === "lastname" && !isValidName(value)) {
			setError("El apellido no es válido");
		} else if (name === "username" && !isValidUsername(value)) {
			setError("El nombre de usuario no es válido");
		} else if (name === "email" && !isValidEmail(value)) {
			setError("El email no es válido");
		} else {
			setError("");
		}
	};

	return {
		name,
		type,
		value: sanitizedValue,
		onChange,
		error,
	};
};

const isValidName = (name: string): boolean => {
	const nameRegex = /^[a-zA-Z]+$/;
	return nameRegex.test(name);
};

const isValidUsername = (username: string): boolean => {
	const usernameRegex = /^[a-zA-Z0-9_]+$/;
	return usernameRegex.test(username);
};

const isValidEmail = (email: string): boolean => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};

export default useFieldWithSanitization;
