// "use client";

import Carousel from "../components/treeComps/carousel";
import Testimonials from "../components/testimonials";
import Share from "../components/treeComps/share";
import Contact from "@/components/contact";
import { CoverPhoto, Info, Links, FavShots } from "@/components/treeComps";

export default function Home() {
  // getTreeData();

  return (
    <main className="flex flex-col gap-2 items-center justify-between max-w-xl m-auto">
      <section className="w-full">
        {/* Cover photo */}
        <CoverPhoto />
        {/* Share */}
        <div className="relative">
          <Share />
        </div>
        {/* Info & Links */}
        <div className="flex items-center flex-col text-center pt-14 bg-white">
          <Info />
          {/* Links */}
          <Links />
        </div>
      </section>
      {/* ------------------- */}
      <section className="bg-white w-full py-4">
        <FavShots />
      </section>
      {/* ------------------- */}
      <section className="bg-white w-full py-4">
        <h1 className="text-center mt-2 mb-4 font-semibold">
          Clients Testimonials
        </h1>
        <div>
          <Testimonials />
        </div>
      </section>
      {/* -------------------- */}
      <section className="bg-white w-full py-4">
        <h1 className="text-center mt-2 font-semibold">Contact me</h1>
        <div className="flex items-center justify-center gap-4">
          <h1 className="text-sm my-2 uppercase">Portrait</h1>
          <h1 className="text-sm my-2 uppercase">Fashion</h1>
          <h1 className="text-sm my-2 uppercase">Event</h1>
          <h1 className="text-sm my-2 uppercase">Wedding</h1>
        </div>
        {/* <p className='text-center my-2'>Models! Let's create something beautiful together!</p> */}
        <div className="mt-4">
          <Contact />
        </div>
      </section>
    </main>
  );
}
