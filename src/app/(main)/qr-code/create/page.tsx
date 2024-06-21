import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { createNewQR } from "@/actions/general";
import QRCode from "react-qr-code";

const page = () => {
  return (
    <div className="flex items-center">
      <form
        action={createNewQR}
        className="p-10 flex flex-col  mx-auto gap-4 items-start"
      >
        <h1>Create new QR code</h1>
        <div>
          <p>Title</p>
          <Input className="w-96" name="title" placeholder="" />
        </div>
        <div>
          <p>Destination Url</p>
          <Input
            className="w-96"
            name="destinationLink"
            placeholder="https://example.com/my-long-url"
          />
        </div>
        {/* <h2>Ways to short</h2>
        <div className="flex items-end w-96">
          <Input disabled value="bit.ly/" />
          <div>
            <span className="text-sm"> Custom back half (optional)</span>
            <Input className="w-56" />
          </div>
        </div> */}

        <Button className="w-96">Generate</Button>
      </form>
      <section>
        <QRCode
          className="blur-md"
          size={200}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={"https://www.youtube.com/results?search_query=auth+js+v5"}
          viewBox={`0 0 256 256`}
        />
        {/* <Image width={180} height={180} alt="" src={"/qr-example.svg"}/> */}
      </section>
    </div>
  );
};

export default page;
