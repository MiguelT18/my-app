"use client";

import { useState } from "react";

const useSanitizeInput = () => {
	const [sanitizedValue, setSanitizedValue] = useState<string>("");

	const sanitizeInput = (input: string) => {
		const tempDiv = document.createElement("div");
		tempDiv.innerHTML = input;
		const sanitized = tempDiv.textContent || tempDiv.innerText || "";

		return sanitized.replace(
			/[&<>"'`=\/]/g,
			(s) =>
				({
					"&": "&amp;",
					"<": "&lt;",
					">": "&gt;",
					'"': "&quot;",
					"'": "&#x27;",
					"`": "&#x60;",
					"=": "&#x3D;",
					"/": "&#x2F;",
				})[s] as string,
		);
	};

	const handleChange = (value: string) => {
		setSanitizedValue(sanitizeInput(value));
	};

	return {
		sanitizedValue,
		handleChange,
	};
};

export default useSanitizeInput;
