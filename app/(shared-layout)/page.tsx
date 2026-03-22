import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Welcome
        </p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
          A simple blog site
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          This is a basic homepage. You can read blog posts or create a new one.
        </p>


      </div>
    </section>
  );
}
