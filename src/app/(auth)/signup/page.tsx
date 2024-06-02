import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-row-reverse items-center h-screen justify-center gap-16">
      <section className="flex flex-col gap-10 items-center m-primary mr-1">
        <h1>SignIn</h1>

        <Image
          src={"/undraw_security_on_re_e491.svg"}
          height={300}
          width={300}
          alt=""
        />
      </section>
      <section>
        <form className="flex flex-col gap-2">
          <Input placeholder="username" />
          <Input placeholder="password" type="password" />
          <Input placeholder="confirm password" type="password" />
          <Button>Login</Button>
        </form>
        <Separator className="my-5" />
        <form className="flex flex-col gap-4 items-center ">
          <Button className="flex items-center gap-2" variant={"outline"}>
            <FcGoogle size={24} /> Signin with Google
          </Button>
          <Link href={"/login"} className="underline text-xs">
            Create a new account
          </Link>
        </form>
      </section>
    </div>
  );
};

export default page;
