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
import { Badge } from "@/components/ui/badge"

const page = () => {
  return (
    <div className="p-10">
      <h1 className="mb-10">Links</h1>
      <section className="md:grid grid-cols-2 gap-3">
        <EachLink
          title={"BTM Library Holiday Checker"}
          shortURL={"bit.ly/is-btm-lib-open"}
          sourceURL={"library.mohdfaizan.me"}
          createDate={"2024-06-01"}
        />
        <EachLink
          title={"BTM Library Holiday Checker"}
          shortURL={"bit.ly/is-btm-lib-open"}
          sourceURL={"library.mohdfaizan.me"}
          createDate={"2024-06-01"}
        />
        <EachLink
          title={"BTM Library Holiday Checker"}
          shortURL={"bit.ly/is-btm-lib-open"}
          sourceURL={"library.mohdfaizan.me"}
          createDate={"2024-06-01"}
        />
      </section>
    </div>
  );
};

const EachLink = ({ title, shortURL, sourceURL, createDate }: any) => {
  return (
    <Card className="md:w-[500px]">
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
          <a className="underline" href={shortURL}>{shortURL}</a>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{sourceURL}</p>
      </CardContent>
      <CardFooter>
        {/* <p className="">{createDate}</p> */}
        <Badge variant="secondary">{createDate}</Badge>
      </CardFooter>
    </Card>
  );
};

export default page;
