import SideBar from "@/components/SideBar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { logOut } from "@/actions/general";
import { auth } from "@/auth";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
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
                <AvatarImage src={session?.user?.image as string} />
              </Avatar>
              {session?.user?.name}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-3">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <form action={logOut}>
                <Button variant={"destructive"} type="submit">
                  Logout
                </Button>
              </form>
              {/* <DropdownMenuItem>Subscription</DropdownMenuItem> */}
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        {children}
      </div>
    </div>
  );
}
