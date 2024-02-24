"use client";

import React, { useState } from "react";
import Navbar from "@/app/components/Navbar";
import AppleIcon from "@/public/icons/AppleIcon.jsx";
import GoogleIcon from "@/public/icons/GoogleIcon.jsx";
import GithubIcon from "@/public/icons/GithubIcon.jsx";
import useFieldWithSanitization from "@/app/hooks/useFieldWithSanitization";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const SUPABASE_URL = "https://beknrirhxchkbwsntmfy.supabase.co";
const API_KEY =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJla25yaXJoeGNoa2J3c250bWZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2MDYxMjAsImV4cCI6MjAyNDE4MjEyMH0.tYt0wvovd5hjqBH5i_dCeU7y0HccZ6iP2B-v-FYoAvk";

export default function Register() {
	const router = useRouter();
	const supabase = createClientComponentClient({
		supabaseUrl: SUPABASE_URL,
		supabaseKey: API_KEY,
	});

	const [error, setError] = useState("");

	const inputProps = {
		name: useFieldWithSanitization({ type: "text", name: "name" }),
		lastName: useFieldWithSanitization({ type: "text", name: "lastname" }),
		username: useFieldWithSanitization({ type: "text", name: "username" }),
		email: useFieldWithSanitization({ type: "email", name: "email" }),
		password: useFieldWithSanitization({ type: "password" }),
		repeat_password: useFieldWithSanitization({ type: "password" }),
	};

	const userData = {
		name: inputProps.name.value,
		lastName: inputProps.lastName.value,
		username: inputProps.username.value,
		email: inputProps.email.value,
		password: inputProps.password.value,
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (
			!inputProps.name.value ||
			!inputProps.lastName.value ||
			!inputProps.username.value ||
			!inputProps.email.value ||
			!inputProps.password.value ||
			!inputProps.repeat_password.value
		) {
			setError("Por favor completa todos los campos");
			return;
		}

		if (inputProps.password.value !== inputProps.repeat_password.value) {
			setError("Las contraseñas no coinciden");
		} else {
			setError("");
		}

		await supabase.auth.signUp({
			email: userData.email,
			password: userData.password,
			options: {
				emailRedirectTo: `${location.origin}/auth/callback`,
			},
		});
		router.refresh();
	};

	return (
		<>
			<Navbar />
			<main className="pb-8 pt-2">
				<form
					action="/auth/sign-up"
					method="post"
					onSubmit={handleSubmit}
					className="h-fit w-full max-w-[600px] mx-auto px-4"
				>
					<h1 className="dark:text-white text-black uppercase text-2xl text-center font-bold my-6">
						Crear una cuenta
					</h1>
					<div className="grid gap-6 mb-6 md:grid-cols-2">
						<div>
							<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								Nombres:
							</label>
							<input
								{...inputProps.name}
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="John"
							/>
							{inputProps.name.error && (
								<p className="text-red-500 text-sm mt-1">
									{inputProps.name.error}
								</p>
							)}
						</div>
						<div>
							<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								Apellidos:
							</label>
							<input
								{...inputProps.lastName}
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Doe"
							/>
							{inputProps.lastName.error && (
								<p className="text-red-500 text-sm mt-1">
									{inputProps.lastName.error}
								</p>
							)}
						</div>
					</div>
					<div className="mb-6">
						<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
							Nombre de usuario:
						</label>
						<input
							{...inputProps.username}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="john_doe404"
						/>
						{inputProps.username.error && (
							<p className="text-red-500 text-sm mt-1">
								{inputProps.username.error}
							</p>
						)}
					</div>
					<div className="mb-6">
						<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
							Correo Electrónico:
						</label>
						<input
							{...inputProps.email}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="john.doe@company.com"
						/>
						{inputProps.email.error && (
							<p className="text-red-500 text-sm mt-1">
								{inputProps.email.error}
							</p>
						)}
					</div>
					<div className="mb-6">
						<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
							Contraseña:
						</label>
						<input
							{...inputProps.password}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="•••••••••"
						/>
					</div>
					<div className="mb-6">
						<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
							Repite tu contraseña:
						</label>
						<input
							{...inputProps.repeat_password}
							type="password"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="•••••••••"
						/>
					</div>
					<div className="flex items-start mb-6">
						<div className="w-full flex flex-wrap justify-between gap-5">
							<div className="text-center ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
								Ya tienes una cuenta?{" "}
								<a
									href="/user/login"
									className="text-blue-600 hover:underline dark:text-blue-500"
								>
									Inicia sesión
								</a>
								.
							</div>
						</div>
					</div>
					<button
						type="submit"
						formAction="/auth/sign-up"
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Crear Cuenta
					</button>
					{error && <p className="text-red-500 text-sm mt-3">{error}</p>}

					<p className="dark:text-white text-center mt-5">
						También puedes registrarte con:
					</p>
					<div className="w-full h-full flex max-sm:flex-col max-sm:[&>button]:w-full max-sm:[&>button]:max-w-[400px] justify-evenly items-center gap-3 mt-3">
						<button
							type="button"
							className="text-black bg-white border-2 dark:border-none border-gray-300 hover:bg-gray-100/90 transition-all focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-3xl text-sm py-2 dark:py-2.5 flex justify-center gap-2 w-full max-w-[30%] items-center dark:focus:ring-gray-500/40"
						>
							<GoogleIcon />
							Google
						</button>

						<button
							type="button"
							className="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/40 font-medium rounded-3xl text-sm py-2 dark:py-2.5 flex justify-center transition-all gap-2 w-full max-w-[30%] items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-500/40"
						>
							<AppleIcon />
							Apple
						</button>

						<button
							type="button"
							className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-3xl text-sm py-2 dark:py-2.5 flex justify-center transition-all gap-2 w-full max-w-[30%] items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/40 me-2 mb-2"
						>
							<GithubIcon />
							Github
						</button>
					</div>
				</form>
			</main>
		</>
	);
}
