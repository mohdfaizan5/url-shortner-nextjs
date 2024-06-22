import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TweetCard = ({name, username, text, image}:any) => {
  return (
    <Card className="hover:-translate-y-2 hover:animate-in w-[360px] p-4 flex flex-col h-full gap-2">
      <div className="flex gap-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="text-sm font-medium text-slate-900">
            {name}
          </h4>
          <p className="text-sm text-slate-500">CEO @ Vercel </p>
        </div>
      </div>
      <p className="text-sm text-slate-700">
        {text}
      </p>
    </Card>
  );
};

export default TweetCard;
