import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const page = () => {
  return (
    <div className="p-10 flex flex-col mx-auto gap-2 items-start">
      <h1>Create new</h1>
      <div>
        <p>Destination</p>
        <Input placeholder="https://example.com/my-long-url" />
      </div>
      <h2>Ways to short</h2>
      <div className="flex items-end w-96">
        <Input disabled placeholder="bit.ly/" />
        <div>
          <span className="text-sm"> Custom back half (optional)</span>
          <Input className="w-56" />
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="qr-code" />
        <Label htmlFor="qr-code">QR Code</Label>
      </div>

      <Button>Generate</Button>
    </div>
  );
};

export default page;
