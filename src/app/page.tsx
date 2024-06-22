import { HorizontalScroller2 } from "@/components/BrandScroller";
import SideBar from "@/components/SideBar";
import TweetCard from "@/components/TweetCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tweet } from "react-tweet";

const page = () => {
  return (
    <div className="flex flex-col w-full">
      <header className="flex justify-between items-center px-10 py-5 border border-b absolute left-0 right-0">
        <div>
          <Image alt="" src={"/vercel.svg"} width={30} height={30} />
          <h2 className="text-2xl font-bold">URL shortener</h2>
        </div>
        <nav className="flex gap-3 items-center text-lg">
          <Link href={""}>Home</Link>
          <Link href={""}>About</Link>
          <Link href={""}>Feature</Link>
          <Link href={""}>Pricing</Link>
        </nav>
        <div>
          <Link href={"/login"}>
            <CustomBtn>Login</CustomBtn>
          </Link>
        </div>
      </header>
      <main className="h-[85vh] flex flex-col items-center justify-center gap-5">
        <h1 className="text-5xl text-center">
          Headline that focuses on <br /> your product benefits
        </h1>
        <h3 className="text-center text-lg font-extralight">
          This is your subheading. The goal? Explain what your product is, and
          the key features, concisely. <br /> You can also include benefits
          language and point out any USPs.
        </h3>
        <Link href={"/home"}>
          <CustomBtn>👉Get Started</CustomBtn>
        </Link>
      </main>
      <section className="flex justify-center mb-24">
        <Image
          src={"/dashboard-dummy-img.png"}
          className="  rounded-t-3xl "
          width={800}
          height={800}
          alt=""
        />
      </section>
      <section className="grid grid-cols-1 md:gap-3 md:grid-cols-3 mx-auto">
        <TweetCard
          name="Guillermo Rauch"
          text="This is a game changer for anyone using @tailwindcss"
        />
        <TweetCard
          name="Guillermo Rauch"
          text="This is a game changer for anyone using @tailwindcss is a game changer for anyone using tailwindcss is a game changer for anyone using lwindcss"
        />
        <TweetCard
          name="Guillermo Rauch"
          text="This is a game changer for anyone using @tailwindcss"
        />
        <TweetCard
          name="Guillermo Rauch"
          text="This is a game changer for anyone using @tailwindcss is a game changer for anyone using @tailwindcss is a game changer for anyone using @tailwindcss"
        />
        <TweetCard
          name="Guillermo Rauch"
          text="This is a game changer for anyone using @tailwindcss"
        />
      </section>{" "}
      <HorizontalScroller2 />
      <section className=" flex flex-col items-center justify-center py-10 ">
        <h1 className="text-3xl font-semibold">FAQ's</h1>
        <div className="w-[500px]">
          <h3 className="text-xl font-semibold mt-3 mb-1">
            What do I put in this area?
          </h3>{" "}
          <p>
            Review your sales objections, customer support queries over email,
            and chatbot conversations. Identify the 5 most common customer
            objections. Address them in this area
          </p>
        </div>
        <div className="w-[500px]">
          <h3 className="text-xl font-semibold mt-3 mb-1">
            What do I put in this area?
          </h3>{" "}
          <p>
            Review your sales objections, customer support queries over email,
            and chatbot conversations. Ident
          </p>
        </div>
        <div className="w-[500px]">
          <h3 className="text-xl font-semibold mt-3 mb-1">
            What do I put in this area?
          </h3>{" "}
          <p>
            Review your sales objections, customer support queries over email,
            and chatbot conversations. Identify the 5 most common customer
            objections. Address them in this area
          </p>
        </div>
        <div className="w-[500px]">
          <h3 className="text-xl font-semibold mt-3 mb-1">
            What do I put in this area?
          </h3>
          <p>
            Review your sales objections, customer support queries over email,
            and chatbot conversations. Identify the 5 most common customer
            objections. Address the
          </p>
        </div>
      </section>
      <footer className="h-52 bg-black"></footer>
    </div>
  );
};

const CustomBtn = ({ children }: any) => {
  return (
    <button className="group relative h-12 overflow-hidden rounded-full bg-primary px-6 text-neutral-50 transition hover:shadow-2xl">
      <span className="relative">{children}</span>
      <div className="animate-shine-infinite absolute inset-0 -top-[20px] flex h-[calc(100%+40px)] w-full justify-center blur-[12px]">
        <div className="relative h-full w-8 bg-white/30"></div>
      </div>
    </button>
  );
};

export default page;
