"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Poppins } from "@/fonts";
import { useForm } from "react-hook-form";

import { SignupFormSchema } from "@/models";

type FormInput = z.infer<typeof SignupFormSchema>;

export default function Register() {
  const form = useForm<FormInput>({
    resolver: zodResolver(SignupFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: ""
    }
  });

  function onSubmit(values: FormInput) {
    console.log(values);
  }

  // const signup = async () => {};

  return (
    <>
      <h1
        className={`my-10 text-center text-3xl font-bold ${Poppins.className}`}
      >
        Register
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-[80%] space-y-3 sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[30%]"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="user@email.com" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="!my-8 flex justify-center">
            <Button type="submit" className="px-10">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
