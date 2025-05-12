import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/ui/logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
          <Logo />
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="https://socraticseminar.vercel.app/login"
            className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground md:block"
          >
            Log in
          </Link>
          <Button size="sm" className="rounded-full" asChild>
            <Link href="https://socraticseminar.vercel.app/signup">
              Join for Free
            </Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                aria-label="Toggle Menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-6 py-6">
                <Logo />
                <nav className="grid gap-3">
                  <Link
                    href="https://socraticseminar.vercel.app/login"
                    className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Log in
                  </Link>
                  <Button size="sm" className="mt-2 rounded-full w-full" asChild>
                    <Link href="https://socraticseminar.vercel.app/signup">
                      Join for Free
                    </Link>
                  </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
