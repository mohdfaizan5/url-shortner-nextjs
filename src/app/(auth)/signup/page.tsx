import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { signIn } from "@/auth";
import { signupAction } from "@/lib/actions";

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
        <form className="flex flex-col gap-2" action={signupAction}>
          <Input name="text" type="text" placeholder="name" />
          <Input name="email" type="email" placeholder="email" />
          <Input name="password" placeholder="password" type="password" />
          <Input
            name="confirmPassword"
            placeholder="confirm password"
            type="password"
          />
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
