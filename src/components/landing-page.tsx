"use client";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-background to-background/95">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="Nodebase" className="h-8 w-8" />
            <span className="text-lg md:text-xl font-semibold tracking-tight">
              Nodebase
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="sm">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/signup" className="flex items-center">
                Get Started
                <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center py-16 md:py-24 lg:py-28">
          <span className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-xs md:text-sm text-muted-foreground mb-4 md:mb-6 shadow-sm">
            Visual workflow automation for modern teams
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4 md:mb-6 max-w-3xl">
            Build powerful workflows with a visual node-based editor
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-8 md:mb-10">
            Connect your tools, automate complex processes, and monitor
            executions in real time – without writing boilerplate glue code.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/signup" className="flex items-center">
                Start building for free
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Link href="/login">Login to your workspace</Link>
            </Button>
          </div>
          <p className="mt-4 text-xs md:text-sm text-muted-foreground">
            No credit card required • Free tier available
          </p>
        </section>

        {/* Feature Cards */}
        <section className="py-10 md:py-16 lg:py-20">
          <div className="grid gap-4 md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Visual editor</CardTitle>
                <CardDescription>
                  Design workflows with a drag-and-drop node-based interface.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Combine triggers, actions, and AI-powered nodes to automate
                  complex flows that stay readable for your whole team.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle>Rich integrations</CardTitle>
                <CardDescription>
                  Connect with Stripe, Slack, Discord, Google Forms and more.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Use prebuilt nodes for your favorite tools or extend Nodebase
                  with your own custom HTTP and AI nodes.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full md:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle>Execution insights</CardTitle>
                <CardDescription>
                  Inspect runs, debug failures, and replay executions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Get a clear, visual history of every execution so you can
                  confidently ship and maintain mission-critical automations.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t mt-8 md:mt-12">
        <div className="container mx-auto px-4 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-muted-foreground">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Nodebase. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <Link href="/login" className="hover:underline">
              Login
            </Link>
            <span className="hidden md:inline">•</span>
            <Link href="/signup" className="hover:underline">
              Get started
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
