"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { createNewShortURL } from "@/actions/general";

const page = () => {
  return (
    <form
      className="p-10 flex flex-col  mx-auto gap-4 items-start"
      action={createNewShortURL}
    >
      <h1>Create new</h1>
      {/* <div>
        <p>Title</p>
        <Input
          className="w-96"
          name="title"
          placeholder=""
        />
      </div> */}
      <div>
        <p>Destination</p>
        <Input
          className="w-96"
          name="destinationLink"
          placeholder="https://example.com/my-long-url"
        />
      </div>
      <h2>Ways to short</h2>
      <div className="flex items-end w-96">
        <Input disabled value="bit.ly/" />
        <div>
          <span className="text-sm"> Custom back half (optional)</span>
          <Input className="w-56" name="customBackHalf" />
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="qr-code" name="isQRcodeSelected" />
        <Label htmlFor="qr-code">QR Code</Label>
      </div>

      <Button type="submit" className="w-96">
        Generate
      </Button>
    </form>
  );
};

export default page;
