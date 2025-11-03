"use client"

import {zodResolver} from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import {toast} from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";

import { 
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle

 } from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";

const registerSchema = z.object({
    email: z.email("Please Enter Valid mail address"),
    password: z.string().min(1,"Password must be at least 6 characters"),
    confirmPassword: z.string()
})
.refine((data)=> data.password === data.confirmPassword,{
    message: "Password doesn't match",
    path: ["confirmPassword"]
})

type RegisterFormValues = z.infer<typeof registerSchema>;

export const RegisterForm = () =>{
    const router = useRouter();
    const form = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
        defaultValues:{
            email: "",
            password: "",
            confirmPassword: ""
        }
    });
    
    const onSubmit = async (values: RegisterFormValues) =>{
        await authClient.signUp.email(
            {
                name: values.email,
                email: values.email,
                password: values.password,
                callbackURL: "/"
            },
            {
                onSuccess : () => {
                    router.push("/");
                },
                onError: (ctx) =>{
                    toast.error(ctx.error.message || "Something went wrong");       
            }
            }
        )
    };
    const isPending = form.formState.isSubmitting;

    return(
        <div className="flex flex-col gap-6">
            <Card>
                <CardHeader className="text-center">
                    <CardTitle>
                        Get Started
                    </CardTitle>
                    <CardDescription>
                        Create an account to continue
                    </CardDescription>
                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                <div className="grid gap-6">
                                    <div className="flex flex-col gap-4">
                                        <Button 
                                        variant="outline" 
                                        disabled={isPending} 
                                        className={cn("w-full")}
                                        type="button"
                                        >
                                            Continue With Github
                                        </Button>

                                        <Button 
                                        variant="outline" 
                                        disabled={isPending} 
                                        className={cn("w-full")}
                                        type="button"
                                        >
                                            Continue With Google
                                        </Button>
                                    </div>

                                    <div className="grid gap-6">
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render ={({field})=>(
                                                <FormItem>
                                                    <FormLabel>Email</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                        type="email" 
                                                        placeholder="m@example.com"
                                                        {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="password"
                                            render ={({field})=>(
                                                <FormItem>
                                                    <FormLabel>Password</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                        type="password"
                                                        placeholder="***"
                                                        {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="confirmPassword"
                                            render ={({field})=>(
                                                <FormItem>
                                                    <FormLabel>Confirm Password</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                        type="password"
                                                        placeholder="***"
                                                        {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <Button
                                        disabled={isPending}
                                        className={cn("w-full mt-4")}
                                        type="submit"
                                        >
                                            {isPending ? "Signing Up..." : "Signup"}
                                        </Button>
                                        <div className="text-sm text-center text-muted-foreground">
                                            Already have an account?{" "}
                                            <Link
                                            href="/login"
                                            className="underline underline-offset-4"
                                            >
                                                Login
                                            </Link>

                                       </div>
                                    </div>
                                </div>
                            </form>
                        </Form>
                    </CardContent>
                </CardHeader>
            </Card>
        </div>
    )


}