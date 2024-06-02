"use client";
import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { FaLink } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { MdAnalytics } from "react-icons/md";
import { IoQrCodeOutline } from "react-icons/io5";

const routes = [
  { title: "Home", route: "/home", icon: <AiOutlineHome /> },
  { title: "Links", route: "/links", icon: <FaLink /> },
  { title: "QR code", route: "/qr-code", icon: <IoQrCodeOutline /> },
  { title: "Analytics", route: "/analytics", icon: <MdAnalytics /> },
];

const SideBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <aside
      className={`${
        isNavOpen ? " w-64" : " w-20 "
      } flex flex-col justify-between relative items-center py-10 border h-screen border-r`}
    >
      <Button
        onClick={() => setIsNavOpen(!isNavOpen)}
        className="mb-5 absolute -right-4 top-16"
        variant={"outline"}
      >
        {">"}
      </Button>
      <section>
        <div className="flex flex-col items-center">
          <Link href={"/"}>
            <h2 className="text-3xl font-bold mb-10">
              {isNavOpen ? "~Logo~" : "~"}
            </h2>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              {isNavOpen ? "+  Create New" : "+"}
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className={`p-3 text-lg ${isNavOpen ? " ml-[220px]" : " ml-20 "}`}
            >
              {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
              {/* <DropdownMenuSeparator /> */}
              <DropdownMenuItem className="p-3">
                <Link href={"/links/create"}>Link</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-3">
                <Link href={"/qr-code/create"}>QR code</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <nav className="flex flex-col mt-10">
          {routes.map((route) => (
            <EachRouteDiv
              isOpen={isNavOpen}
              icon={route.icon}
              route={route.route}
            >
              {route.title}
            </EachRouteDiv>
          ))}
        </nav>
      </section>
      <section>
        <Link href={"/settings"}>
          <div className="text-lg gap-2 flex items-center font-medium hover:bg-primary hover:text-white px-2 py-2 rounded-md w-[100%]">
            <span className="text-2xl">
              <IoSettingsOutline />
            </span>
            {isNavOpen ? <p className="">Settings</p> : ""}
          </div>
        </Link>
      </section>
    </aside>
  );
};

export default SideBar;

export const EachRouteDiv = ({ children, icon, isOpen, route }: any) => {
  return (
    <Link href={route}>
      <div
        key={route}
        className="text-lg gap-2 flex items-center font-medium hover:bg-primary/50 hover:duration-150 hover:text-white px-2 py-2 rounded-md w-[100%]"
      >
        <span className="text-2xl">{icon}</span>
        {isOpen ? <p className="">{children}</p> : ""}
      </div>
    </Link>
  );
};
