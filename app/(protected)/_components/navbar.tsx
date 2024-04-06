"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-secondary flex justify-between items-center p-4 rounded-xl w-[600px] shadow-sm">
      <div className="flex gap-x-2">
        <Button 
          asChild
          variant={pathname === "/home" ? "default" : "outline"}
        >
          <Link href="/home">
            Home
          </Link>
        </Button>
        <Button 
          asChild
          variant={pathname === "/campaigns" ? "default" : "outline"}
        >
          <Link href="/campaigns">
            Campaigns
          </Link>
        </Button>
        <Button 
          asChild
          variant={pathname === "/socials" ? "default" : "outline"}
        >
          <Link href="/socials">
            Socials
          </Link>
        </Button>
        <Button 
          asChild
          variant={pathname === "/settings" ? "default" : "outline"}
        >
          <Link href="/settings">
            Settings
          </Link>
        </Button>
      </div>
      <UserButton />
    </nav>
  );
};
