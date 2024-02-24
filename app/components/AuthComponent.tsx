"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function AuthComponent({ children }: { children: React.ReactNode }) {
	const router = useRouter();

	useEffect(() => {
		const isAuthenticated = true;

		if (!isAuthenticated) {
			router.push("/account/login");
		}
	}, [router]);

	return <>{children}</>;
}
