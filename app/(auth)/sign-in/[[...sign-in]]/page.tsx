/* eslint-disable @next/next/no-img-element */
"use client";
import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Icons } from "@/components/ui/Icons";
import { SignInWithMetamaskButton } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <>
      {/*   <div className="md:hidden">
        <img
          src="/examples/authentication-light.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <img
          src="/examples/authentication-dark.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div> */}
      <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            {/*      <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg> */}
            DanDev
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                Success is born from persistence and passion; let every setback
                be a <br /> stepping stone to triumph.
              </p>
              <footer className="text-lg text-[#a9a9a9]">Daniel Cruz</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex flex-col justify-center space-y-6 w-[350px]">
            <div className="grid w-full grow items-center px-4 justify-center">
              <SignIn.Root>
                <Clerk.Loading>
                  {(isGlobalLoading) => (
                    <>
                      <SignIn.Step name="start">
                        <Card className=" w-96">
                          <CardHeader>
                            <h1 className="text-2xl text-center font-semibold tracking-tight">
                              Sign in
                            </h1>

                            <CardDescription className="text-sm md:text-base text-muted-foreground">
                              Welcome back! Please sign in to continue
                            </CardDescription>
                          </CardHeader>

                          <CardContent className="grid gap-y-4">
                            <div className="grid grid-cols-1 gap-4">
                              <Clerk.Connection name="google" asChild>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  type="button"
                                  disabled={isGlobalLoading}
                                >
                                  <Clerk.Loading scope="provider:google">
                                    {(isLoading) =>
                                      isLoading ? (
                                        <Icons.spinner className="size-4 animate-spin" />
                                      ) : (
                                        <>
                                          <Icons.google className="mr-2 size-4" />
                                          Google
                                        </>
                                      )
                                    }
                                  </Clerk.Loading>
                                </Button>
                              </Clerk.Connection>

                              <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background px-2 text-muted-foreground">
                                  Or continue with
                                </span>
                              </div>

                              <SignInWithMetamaskButton mode="modal">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  type="button"
                                  disabled={isGlobalLoading}
                                >
                                  <Clerk.Loading scope="provider:metamask">
                                    {(isLoading) =>
                                      isLoading ? (
                                        <Icons.spinner className="size-4 animate-spin" />
                                      ) : (
                                        <>
                                          <Icons.metamask className="mr-2 size-4" />
                                          Metamask
                                        </>
                                      )
                                    }
                                  </Clerk.Loading>
                                </Button>
                              </SignInWithMetamaskButton>

                              <Clerk.Connection name="github" asChild>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  type="button"
                                  disabled={isGlobalLoading}
                                >
                                  <Clerk.Loading scope="provider:github">
                                    {(isLoading) =>
                                      isLoading ? (
                                        <Icons.spinner className="size-4 animate-spin" />
                                      ) : (
                                        <>
                                          <Icons.gitHub className="mr-2 size-4" />
                                          GitHub
                                        </>
                                      )
                                    }
                                  </Clerk.Loading>
                                </Button>
                              </Clerk.Connection>
                              <Clerk.Connection name="notion" asChild>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  type="button"
                                  disabled={isGlobalLoading}
                                >
                                  <Clerk.Loading scope="provider:notion">
                                    {(isLoading) =>
                                      isLoading ? (
                                        <Icons.spinner className="size-4 animate-spin" />
                                      ) : (
                                        <>
                                          <Icons.notion className="mr-2 size-4" />
                                          Notion
                                        </>
                                      )
                                    }
                                  </Clerk.Loading>
                                </Button>
                              </Clerk.Connection>
                            </div>
                          </CardContent>
                          <CardFooter>
                            <div className="grid w-full gap-y-4">
                              <Button variant="link" size="sm" asChild>
                                <Link href="/sign-up">
                                  Don&apos;t have an account? Sign up
                                </Link>
                              </Button>
                            </div>
                          </CardFooter>
                        </Card>
                      </SignIn.Step>
                    </>
                  )}
                </Clerk.Loading>
              </SignIn.Root>
            </div>
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

/* import React from "react";

const Sign = () => {
  return <div>Sign</div>;
};

export default Sign; */
