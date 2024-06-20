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
                title={item.title? item.title : "No title"}
                sourceURL={item.destinationLink}
                createDate={item.createdAt.toDateString()}
              />
            ))
          : "No qrs"}
      </section>
      
    </div>
  );
};
const EachQR = ({ title, shortURL, sourceURL, createDate }: any) => {
  return (
    <Card className="md:w-[600px] h-48 flex items-center">
      <div>
        <Image src={"/qr-example.svg"} height={190} width={190} alt={title} />
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
            <a className="underline" href={shortURL}>
              {sourceURL}
            </a>
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
