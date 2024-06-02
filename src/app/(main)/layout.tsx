import SideBar from "@/components/SideBar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-between md:w-screen">
      <SideBar />
      <div className="w-full flex flex-col items-center">
        <header className="border px-10 flex justify-between items-center border-b h-16 w-full">
          <div className="flex items-center">
            <Input placeholder="Search" />
            <Button>Upgrade</Button>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
              <Avatar>
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              Faizan
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-3">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <Button variant={"destructive"}>Logout</Button>
                {/* <DropdownMenuItem>Subscription</DropdownMenuItem> */}
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        {children}
      </div>
    </div>
  );
}
