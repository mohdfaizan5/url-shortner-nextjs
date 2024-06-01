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
const page = () => {
  return (
    <div className="p-10">
      <h1 className="mb-10">Links</h1>
      <section className="flex flex-col gap-5">
        <EachQR
          title={"BTM Library Holiday Checker"}
          shortURL={"bit.ly/is-btm-lib-open"}
          sourceURL={"library.mohdfaizan.me"}
          createDate={"2024-06-01"}
        />
        <EachQR
          title={"BTM Library Holiday Checker"}
          shortURL={"bit.ly/is-btm-lib-open"}
          sourceURL={"library.mohdfaizan.me"}
          createDate={"2024-06-01"}
        />
        <EachQR
          title={"BTM Library Holiday Checker"}
          shortURL={"bit.ly/is-btm-lib-open"}
          sourceURL={"library.mohdfaizan.me"}
          createDate={"2024-06-01"}
        />
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
              {shortURL}
            </a>
          </CardDescription>
        </CardHeader>
        <CardContent className="py-0">
          <p>{sourceURL}</p>
        </CardContent>
        <CardFooter>
          {/* <p className="">{createDate}</p> */}
          <Badge variant="outline">{createDate}</Badge>
        </CardFooter>
      </div>
    </Card>
  );
};
export default page;
