import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const page = async () => {
  const session = await auth();
  console.log(session);
  return (
    <div className="p-10">
      <h1 className="mb-10">Profile</h1>
      <div className="mb-10 flex flex-col gap-2 items-start">
        <Input className="w-96" placeholder="username" />
        <p className="text-xs">warandrule@gmail.com</p>
        <Button disabled={false}>Update username</Button>
      </div>

      <section>
        <h2 className="mb-5">Security & authentication</h2>
        <div className="flex flex-col gap-5">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="password">Old Password</Label>
            <Input type="text" id="password" placeholder="Current Password" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="new-password">New Password</Label>
            <Input type="text" id="new-password" placeholder="New Password" />
            <Input
              type="text"
              id="confirm-new-password"
              placeholder="Confirm Password"
            />
          </div>
        </div>
      </section>
      <Button className="mt-5" disabled={false} variant={"destructive"}>
        Delete Account
      </Button>
    </div>
  );
};

export default page;
