"use client";
import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const routes = [
  { title: "Home", route: "/home" },
  { title: "Links", route: "/links" },
  { title: "QR code", route: "/qr-code" },
  { title: "Analytics", route: "/analytics" },
  { title: "Settings", route: "/settings" },
];

const SideBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <aside
      className={`${
        isNavOpen ? " w-64" : " w-20 "
      } flex flex-col relative items-center py-10 border h-screen border-r`}
    >
      <Button
        onClick={() => setIsNavOpen(!isNavOpen)}
        className="mb-5 absolute -right-4 top-16"
        variant={"outline"}
      >
        {">"}
      </Button>
      <div>
        <h2 className="text-3xl font-bold mb-10">Logo</h2>
        <DropdownMenu>
          <DropdownMenuTrigger className="mb-5  rounded-md border-2 px-5 border-primary py-3">
            {isNavOpen ? "Create New" : "+"}
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className={`p-3 ${isNavOpen ? " ml-64" : " ml-20 "}`}
          >
            {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
            {/* <DropdownMenuSeparator /> */}
            <DropdownMenuItem>
              <Link href={"/links/create"}>Link</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/qr-code/create"}>QR code</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <nav className="flex flex-col">
        {routes.map((route) => (
          <EachRouteDiv isOpen={isNavOpen} route={route.route}>
            {route.title}
          </EachRouteDiv>
        ))}
      </nav>
    </aside>
  );
};

export default SideBar;

export const EachRouteDiv = ({ children, isOpen, route }: any) => {
  return (
    <Link href={route}>
      <div className="text-lg gap-2 flex items-center font-medium hover:bg-primary hover:text-white px-2 py-2 rounded-md w-[100%]">
        <AiOutlineHome size={24} />
        {isOpen ? <p className="">{children}</p> : ""}
      </div>
    </Link>
  );
};
