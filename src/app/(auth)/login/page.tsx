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

import { LoginFormSchema } from "@/models";

type FormInput = z.infer<typeof LoginFormSchema>;

export default function Login() {
  const form = useForm<FormInput>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      username: "",
      password: ""
    }
  });

  function onSubmit(values: FormInput) {
    console.log(values);
  }

  // const login = async () => {};

  return (
    <>
      <h1
        className={`my-10 text-center text-3xl font-bold ${Poppins.className}`}
      >
        Login
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
                <FormLabel>Username or Email</FormLabel>
                <FormControl>
                  <Input placeholder="username" {...field} />
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
