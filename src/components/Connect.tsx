"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";
import { SendMail } from "@/lib/SendMail";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "firstName must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "lastName must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "please enter a valid email",
  }),
  details: z.string(),
});

export function ContactForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      details: "",
    },
  });

  function handleForm(values: z.infer<typeof formSchema>): void {
    SendMail(values)
      .then(() =>
        toast({
          title: "Thanks for reaching out!",
          description:
            "Your message has successfully navigated the digital highways and reached my inbox. Expect a response from this code ninja soon.",
        })
      )
      .then(() => form.reset());
  }

  return (
    <Card
      className="max-w-xl w-full mt-24 bg-gray-300 bg-opacity-15"
      id="connectDevDiv"
    >
      <CardHeader>
        <CardTitle className="text-2xl">Connect with me</CardTitle>
        <CardDescription className="text-lg">
          Please enter your information and details.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 text-lg bg-transparent">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleForm)}
              className="space-y-8"
            >
              <div className="grid grid-cols-2 gap-4 text-lg">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="text-lg">
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="text-lg">
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Robinson" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2 text-lg">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="text-lg">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="j.robinson@exampel.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2 text-lg">
                <FormField
                  control={form.control}
                  name="details"
                  render={({ field }) => (
                    <FormItem className="text-lg">
                      <FormLabel>Details</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="please provide any details that would help me understand your request better"
                          {...field}
                          className="text-lg h-48"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                type="submit"
                className="w-full text-2xl mt-8 bg-gray-300 bg-opacity-15"
                variant={"outline"}
              >
                Connect
              </Button>
            </form>
          </Form>
        </div>
      </CardContent>
    </Card>
  );
}
