import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-4 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center">
        <div className="flex">
          <Link href="/">
            <span className="font-bold">Moaz Ayman</span>
          </Link>
          <Link href={"/posts"}>
            <span className="ml-4 text-sm text-muted-foreground hover:text-foreground transition-colors">
              Posts
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Mobile menu button can go here */}
          </div>
          <nav className="flex items-center">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
