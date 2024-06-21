import { loginWithOauth } from "@/actions/general";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa6";

const OauthLogins = () => {
  return (
    <form action={loginWithOauth} className="w-full flex flex-col gap-2">
      <Button
        className="flex items-center gap-2 w-full"
        variant={"outline"}
        name="action"
        type="submit"
        value={"google"}
      >
        <FcGoogle size={24} /> Login with Google
      </Button>
      <Button
        className="flex items-center gap-2 w-full"
        variant={"outline"}
        name="action"
        type="submit"
        value={"github"}
      >
        <FaGithub size={24} /> Login with Github
      </Button>
    </form>
  );
};

export default OauthLogins;
