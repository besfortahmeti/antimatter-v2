import React from "react";
import * as ShadcnUI from "@/components/ui";
import { cn } from "@/lib/utils";

// Mock helper components for runner scope
export const FieldGroup = ({
  className,
  ...props
}: React.ComponentProps<"div">) => (
  <div className={cn("flex flex-col gap-2", className)} {...props} />
);
export const Field = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cn("grid gap-2", className)} {...props} />
);
export const FieldLabel = ShadcnUI.Label;
export const FieldDescription = ({
  className,
  ...props
}: React.ComponentProps<"p">) => (
  <p className={cn("text-sm text-muted-foreground", className)} {...props} />
);

export const loginFormCode = `
export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </Field>
              <Field>
                <Button type="submit">Login</Button>
                <Button variant="outline" type="button">
                  Login with Google
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <a href="#">Sign up</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}
`;

export const mockElements = [
  {
    id: 1,
    title: "Timeline",
    subtitle: "Aceternity UI",
    name: "Aceternity UI",
    description: "Timeline · Default",
    icon: "A",
    url: "https://ui.aceternity.com/components/timeline",
    imageUrl: null,
    videoUrl: null,
    code: loginFormCode,
    content: <div className="p-4">Timeline Content Placeholder</div>,
  },
  {
    id: 2,
    title: "Sidebar",
    subtitle: "Aceternity UI",
    name: "Aceternity UI",
    description: "Sidebar · Default",
    icon: "A",
    url: "#",
    imageUrl: null,
    videoUrl: null,
    code: loginFormCode,
    content: <div className="p-4">Sidebar Content Placeholder</div>,
  },
  {
    id: 3,
    title: "Container Scroll Animation",
    subtitle: "Aceternity UI",
    name: "Aceternity UI",
    description: "Container Scroll Animation · Default",
    icon: "A",
    url: "#",
    imageUrl: null,
    videoUrl: null,
    code: loginFormCode,
    content: <div className="p-4">Container Scroll Content Placeholder</div>,
  },
  {
    id: 4,
    title: "Expandable Tabs",
    subtitle: "Victor Welander",
    name: "Victor Welander",
    description: "Expandable Tabs",
    icon: null,
    userAvatar: null,
    url: "#",
    imageUrl: null,
    videoUrl: null,
    code: loginFormCode,
    content: <div className="p-4">Expandable Tabs Content Placeholder</div>,
  },
  {
    id: 5,
    title: "Generic Component",
    subtitle: "Aceternity UI",
    name: "Aceternity UI",
    description: "Generic Component · Default",
    icon: "A",
    url: "#",
    imageUrl: null,
    videoUrl: null,
    code: loginFormCode,
    content: <div className="p-4">Generic Content Placeholder</div>,
  },
];
