"use client";

import React, { useState } from "react";
import Navbar from "@/app/components/Navbar";
import GoogleIcon from "@/public/icons/GoogleIcon";
import AppleIcon from "@/public/icons/AppleIcon";
import GithubIcon from "@/public/icons/GithubIcon";
import useFieldWithSanitization from "@/app/hooks/useFieldWithSanitization";

export default function Login() {
	const [error, setError] = useState("");

	const inputProps = {
		email_username: useFieldWithSanitization({ type: "text" }),
		password: useFieldWithSanitization({ type: "password" }),
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (
			inputProps.email_username.value === "" ||
			inputProps.password.value === ""
		) {
			setError("Los campos no pueden ir vacíos.");
		} else {
			setError("");
		}
	};

	return (
		<div className="min-h-screen h-full">
			<Navbar />
			<main className="pt-2 pb-8">
				<form
					onSubmit={handleSubmit}
					className="h-fit w-full max-w-[600px] mx-auto px-4"
				>
					<h1 className="dark:text-white uppercase text-2xl text-center font-bold my-6">
						Iniciar Sesión
					</h1>
					<div className="mb-6">
						<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
							Nombre de usuario o correo:
						</label>
						<input
							{...inputProps.email_username}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="john_doe404"
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="password"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Contraseña:
						</label>
						<input
							{...inputProps.password}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="•••••••••"
						/>
					</div>
					<div className="flex items-start mb-6">
						<div className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
							Olvidaste tu contraseña?
							<a
								href="/user/register"
								className="text-blue-600 hover:underline dark:text-blue-500 ml-2"
							>
								Crea una cuenta
							</a>
							.
						</div>
					</div>
					<button
						type="submit"
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Submit
					</button>
					{error && <p className="text-red-500 text-sm mt-2">{error}</p>}

					<p className="dark:text-white text-center mt-5">
						También puedes iniciar sesión con:
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
		</div>
	);
}
