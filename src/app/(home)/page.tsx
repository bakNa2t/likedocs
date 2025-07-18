import Link from "next/link";
import { Navbar } from "./navbar";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 right-0 h-16 z-10 bg-white p-4">
        <Navbar />
      </div>

      <div className="mt-16">
        <h1 className="text-3xl font-bold">Welcome to Likedocs</h1>
        Click{" "}
        <Link href={"/documents/000"}>
          <span className="text-blue-600 underline">&nbsp;here&nbsp;</span>
        </Link>
        to go to document id
      </div>
    </div>
  );
};

export default Home;
