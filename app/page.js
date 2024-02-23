import Image from "next/image";
import Navbar from "./components/ui/Navbar";
import Banner from "./components/blocks/Banner";
import MiniSlider from "./components/blocks/MiniSlider";
import Gallery from "./components/blocks/Gallery";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Banner />
      <div className="px-3 md:px-32 ">
        <MiniSlider />
        <Gallery />
      </div>
    </main>
  );
}
