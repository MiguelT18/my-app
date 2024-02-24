import AuthComponent from "./components/AuthComponent";
import Navbar from "./components/Navbar";

export default function Home() {
	return (
		<AuthComponent>
			<Navbar />
			<main>
				<div className="bg-slate-900 max-w-[600px] mx-auto p-5 rounded-2xl text-center my-14 [&>h1]:text-3xl [&>h1]:uppercase [&>h1]:font-bold [&>h1]:mb-3 [&>h1]:text-white [&>p]:text-gray-300">
					<h1>Home Page</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
						numquam magni, odit, atque sapiente optio doloribus officia
						perferendis facilis suscipit, sunt repellat. Magni quis vitae,
						voluptatem doloremque officia laudantium odit.
					</p>
				</div>
			</main>
		</AuthComponent>
	);
}
