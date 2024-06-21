import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IoShareSocial } from "react-icons/io5";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { QRcode } from "@/model/qrcode.model";
import QRCode from "react-qr-code";

const page = async () => {
  const allQRs = await QRcode.find(); // (:TODO) only find the ones with user id
  console.log(allQRs);
  return (
    <div className="p-10">
      <h1 className="mb-10">QR codes</h1>
      <section className="flex flex-col gap-5">
        {allQRs.length > 0
          ? allQRs.map((item, key) => (
              <EachQR
                key={key}
                title={item.title ? item.title : "No title"}
                sourceURL={item.destinationLink}
                createDate={item.createdAt.toDateString()}
              />
            ))
          : "No qrs"}
      </section>
    </div>
  );
};
const EachQR = ({ title, sourceURL, createDate, key }: any) => {
  return (
    <Card className="md:w-[600px] md:px-5 h-48 flex items-center" key={key}>
      <div>
        <QRCode
          size={130}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={sourceURL}
          viewBox={`0 0 256 256`}
        />
        {/* <Image src={"/qr-example.svg"} height={190} width={190} alt={title} /> */}
      </div>
      <div>
        <CardHeader>
          <CardTitle className="flex justify-between">
            <span className="w-8/12">{title}</span>
            <>
              <Button>Copy</Button>
              <Button variant={"outline"} className="ml-1">
                <IoShareSocial />
              </Button>
            </>
          </CardTitle>
          <CardDescription>
            <span className="underline" >
              {sourceURL}
            </span>
          </CardDescription>
        </CardHeader>
        {/* <CardContent className="py-0">
          <p></p>
        </CardContent> */}
        <CardFooter>
          {/* <p className="">{createDate}</p> */}
          <Badge variant="outline">{createDate}</Badge>
        </CardFooter>
      </div>
    </Card>
  );
};
export default page;
