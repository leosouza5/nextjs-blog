"use client";

import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { ThemeToggle } from "./theme-toggle";
import { useConvexAuth } from "convex/react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { SearchInput } from "./SearchInput";

export default function Navbar() {
  const { isAuthenticated, isLoading } = useConvexAuth()
  const router = useRouter()

  return (
    <nav className="w-full py-4 sm:py-5">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-8">
          <Link href={"/"}>
            <h1 className="text-3xl font-bold">
              Next<span className="text-blue-500">Blog</span>
            </h1>
          </Link>

          <div className="hidden items-center gap-2 sm:flex">
            <Link className={buttonVariants({ variant: "ghost" })} href="/">Home</Link>
            <Link className={buttonVariants({ variant: "ghost" })} href="/blog" prefetch={false}>Blog</Link>
            <Link className={buttonVariants({ variant: "ghost" })} href="/create" prefetch={false}>Create</Link>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:block mr-2">
            <SearchInput />
          </div>
          {isLoading ? null : isAuthenticated ? (
            <Button onClick={() => authClient.signOut(
              {
                fetchOptions: {
                  onSuccess: () => {

                    toast.success("Logged out successfully")
                    router.replace("/")
                    router.refresh()
                  },
                  onError: (error) => {
                    toast.error(error.error.message)
                  }
                }
              }
            )}>Logout</Button>
          ) : (
            <>
              <Link className={buttonVariants()} href="/auth/sign-up">Sign up</Link>
              <Link className={buttonVariants({ variant: "outline" })} href="/auth/login">Login</Link>
            </>
          )}
          <ThemeToggle />
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2 overflow-x-auto pb-1 sm:hidden">
        <Link className={buttonVariants({ variant: "ghost" })} href="/">Home</Link>
        <Link className={buttonVariants({ variant: "ghost" })} href="/blog" prefetch={false}>Blog</Link>
        <Link className={buttonVariants({ variant: "ghost" })} href="/create" prefetch={false}>Create</Link>
      </div>
    </nav>
  )
}
