import { SignInButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

function Header() {
  return (
  <nav className="fixed  top-0 right-0 left-0 z-50 px-6 py-2 border-b border-border/50 bg-background/80 backdrop-blur-md h-16">
    <div className="max-w-6xl mx-auto flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <Image src={"/logo.png"} alt="ByteMyGrin Logo" width={32} height={32} className="w-11"/>
        <span className="font-semibold text-lg">ByteMyGrin</span>
      </Link>
      <div className="hidden md:flex items-center gap-8">
        <a href="#" className="text-muted-foreground hover:text-foreground/">
         How It Works
        </a>
        <a href="#" className="text-muted-foreground hover:text-foreground/">
         Pricing
        </a>
        <a href="#" className="text-muted-foreground hover:text-foreground/">
         About
        </a>
      </div>
      <div className="flex items-center gap-3">
        <SignInButton mode="modal">
          <Button variant={"ghost"} size={"sm"}>
            Login
          </Button>
        </SignInButton>
        <SignUpButton mode="modal">
          <Button size={"sm"}>
            Sign Up
          </Button>
        </SignUpButton>
      </div>
    </div>
  </nav>
  );
}

export default Header;