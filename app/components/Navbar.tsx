"use client";

import { User } from "@geist-ui/icons";
import React, { useState } from "react";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="min-h-[10vh] h-full border-b-2 border-black dark:border-white flex items-center justify-around py-5">
			<a
				href="/"
				className="text-4xl uppercase font-bold dark:text-white [&>span]:text-red-500"
			>
				<span>Edu</span>Quik
			</a>
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<div
				onClick={toggleMenu}
				className={`relative ${
					isMenuOpen ? "bg-slate-500" : "bg-[#2d3748]"
				} hover:bg-slate-500 transition-all rounded-full p-1 w-fit h-full cursor-pointer`}
			>
				<User color="white" size={24} strokeWidth={2} />
				{isMenuOpen && (
					<div className="absolute top-10 right-0 bg-white w-[140px]">
						<ul className="flex flex-col items-center justify-center w-full h-full [&>a]:w-full [&>a]:h-fit [&>a]:text-center [&>a]:py-2">
							<a
								href="/account/login"
								className="hover:bg-slate-600 hover:text-white"
							>
								<li>Iniciar Sesión</li>
							</a>
							<a
								href="/account/register"
								className="hover:bg-slate-600 hover:text-white"
							>
								<li>Registrarse</li>
							</a>
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
}
