import Image from "next/image";
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
import { MdOutlineQrCodeScanner } from "react-icons/md";

const Dashboard = () => {
  return (
    <div className="flex items-center p-10 gap-10">
      <section className="flex gap-5">
        <Card className="flex flex-col gap-3 p-10">
          <div>
            <CardHeader>
              <CardTitle>Make links short</CardTitle>
              {/* <CardDescription>Card Description</CardDescription> */}
            </CardHeader>
          </div>
          <div>
            <Image
              src={"/undraw_link_shortener_mvf6.svg"}
              height={200}
              width={200}
              alt=""
            />
          </div>
          <CardFooter>
            <Button className="w-full">Go to links</Button>
          </CardFooter>
        </Card>
        <Card className="flex flex-col items-center gap-3 p-10">
          <CardHeader>
            <CardTitle>Make it scannable</CardTitle>
            {/* <CardDescription>Card Description</CardDescription> */}
          </CardHeader>
          {/* <Image
            src={"/undraw_link_shortener_mvf6.svg"}
            height={200}
            width={200}
            alt=""
          /> */}
          <MdOutlineQrCodeScanner size={180}/>

          <CardFooter>
            <Button className="w-full">Go to Codes</Button>
          </CardFooter>
        </Card>
      </section>
      {/* <section>
        <Image
          src={"/undraw_link_shortener_mvf6.svg"}
          height={200}
          width={200}
          alt=""
        />
      </section> */}
    </div>
  );
};

export default Dashboard;
