import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-background to-blue-50/50 py-12 lg:py-20">
      <div className="container relative">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-4 md:gap-6">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              For every student, every classroom.
              <span className="text-primary">Real results.</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              We're a nonprofit with the mission to provide a free, world-class
              AI educational experience for anyone, anywhere.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link href="#learners">Learners</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full"
              >
                <Link href="#teachers">Teachers</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full"
              >
                <Link href="#parents">Parents</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] w-full lg:h-[500px]">
            <div className="absolute -bottom-6 left-4 z-10 h-20 w-20 overflow-hidden rounded-full border-4 border-background md:h-24 md:w-24">
              <div className="relative h-full w-full">
                <Image
                  src="/student1.png"
                  alt="Student using Socrates"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -right-4 top-1/3 z-10 h-20 w-20 overflow-hidden rounded-full border-4 border-background md:h-24 md:w-24">
              <div className="relative h-full w-full">
                <Image
                  src="/student2.png"
                  alt="Student using Socrates"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute left-1/2 top-10 z-10 h-20 w-20 -translate-x-1/2 overflow-hidden rounded-full border-4 border-background md:h-24 md:w-24">
              <div className="relative h-full w-full">
                <Image
                  src="/teacher.png"
                  alt="Teacher using Socrates"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute right-8 top-1/4 z-0 h-16 w-16 rounded-lg bg-orange-100 md:h-20 md:w-20">
              <div className="relative h-full w-full p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-full w-full text-orange-500"
                >
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                </svg>
              </div>
            </div>
            <div className="absolute left-8 top-2/3 z-0 h-16 w-16 rounded-lg bg-blue-100 md:h-20 md:w-20">
              <div className="relative h-full w-full p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-full w-full text-blue-500"
                >
                  <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1" />
                  <path d="M17 3h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1" />
                  <path d="M12 12v6" />
                  <path d="M8 18a2 2 0 0 0 4 0" />
                  <path d="M19 10V8a7 7 0 0 0-14 0v2" />
                </svg>
              </div>
            </div>
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              <Image
                src="/hero-illustration.jpg"
                alt="Students collaborating with Socrates AI"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
