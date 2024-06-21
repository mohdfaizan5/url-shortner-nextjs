import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { auth, signIn } from "@/auth";
import { connectDB } from "@/lib/db_connection";
import { User } from "@/model/user.model";
import { redirect } from "next/navigation";
import OauthLogins from "@/components/OauthLogins";

const page = async () => {
  const session = await auth();
  console.log(session);
  if (session?.user) redirect("/home");
  return (
    <div className="flex items-center h-screen justify-center gap-16">
      <section className="flex flex-col gap-10 items-center m-primary mr-1">
        <h1>Login</h1>

        <Image
          src={"/undraw_security_on_re_e491.svg"}
          height={300}
          width={300}
          alt=""
        />
      </section>
      <section>
        <form
          className="flex flex-col gap-2"
          action={async (formData) => {
            "use server";
            await signIn("credentials", formData);
          }}
        >
          <Input placeholder="email" type="email" name="email" />
          <Input placeholder="password" type="password" name="password" />
          <Button>Login</Button>
        </form>
        <Separator className="my-5" />
        {/* <form className="flex flex-col gap-4 items-center ">
        </form> */}
        <OauthLogins />

        <Link href={"/signup"} className="underline text-xs">
          already have an account
        </Link>
      </section>
    </div>
  );
};

export default page;
