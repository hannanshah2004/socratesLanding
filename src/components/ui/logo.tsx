import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
  className?: string;
  textClassName?: string;
  showText?: boolean;
}

export function Logo({ className, textClassName, showText = true }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <div className="relative h-10 w-10 overflow-hidden rounded-full">
        <Image
          src="/socrateProfile.jpg"
          alt="Socrates Logo"
          width={60}
          height={60}
          className="object-cover"
        />
      </div>
      {showText && (
        <span
          className={cn(
            "text-xl font-semibold tracking-tight text-foreground",
            textClassName
          )}
        >
          Socrates
        </span>
      )}
    </Link>
  );
}
