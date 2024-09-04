import Appbar from "@/components/Appbar";
import ServerComp from "@/components/ServerComp";

export default async function Home() {
	return (
		<div>
			<Appbar />
			<ServerComp />
		</div>
	);
}
