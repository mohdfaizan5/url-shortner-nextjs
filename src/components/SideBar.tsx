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

const routes = [
  { title: "Home" },
  { title: "Links" },
  { title: "QR code" },
  { title: "Analytics" },
  { title: "Settings" },
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
          <DropdownMenuTrigger>
            <Button className="mb-5">{isNavOpen ? "Create New" : "+"}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className={`p-3 ${isNavOpen ? " ml-64" : " ml-20 "}`}
          >
            {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
            {/* <DropdownMenuSeparator /> */}
            <DropdownMenuItem>Link</DropdownMenuItem>
            <DropdownMenuItem>QR code</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <nav className="flex flex-col">
        {routes.map((route) => (
          <EachRouteDiv isOpen={isNavOpen}>{route.title}</EachRouteDiv>
        ))}
      </nav>
    </aside>
  );
};

export default SideBar;

export const EachRouteDiv = ({ children, isOpen }: any) => {
  return (
    <div className="text-lg gap-2 flex items-center font-medium hover:bg-blue-200 px-2 py-2 rounded-md w-[100%]">
      <AiOutlineHome size={24} />
      {isOpen ? <p className="">{children}</p> : ""}
    </div>
  );
};
