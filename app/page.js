import Image from "next/image";
import Navbar from "./components/blocks/Navbar";
import Banner from "./components/blocks/Banner";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Banner />
    </main>
  );
}
