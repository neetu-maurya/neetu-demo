import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@radix-ui/react-separator";
import { Link } from "react-router-dom";
import { Loader2, LockKeyhole, Mail } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Logininputstate, userLoginSchema } from "@/schema/userschema";

//typescript me type define karne ka 2 tarika hota hai
/*interface LoginInputState{
  email:string;
  password:string;
} when you use class component then we use it simply in inheritance
interface LoginInputWithAge extends LoginInputState{
age:string;
}
*/
/*type LoginInputState = {
  email: string;
  password: string;
}; use of zod thats why we comment this part */
const Login = () => {
  const [input, Setinput] = useState<Logininputstate>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<Logininputstate>>({});
  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    Setinput({ ...input, [name]: value });
  };
  const loginSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    const result = userLoginSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors as Partial<Logininputstate>);
      return;
    }
    console.log(input);
  };
  const loading = false;
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={loginSubmitHandler}
        className="md:p-8 w-full max-w-md md:border border-gray-200 rounded-lg mx-4"
      >
        <div className="mb-4">
          <h1 className="font-bold text-3xl text-red-500 animate-bounce-reflection text-center">
            TotatoEats :)
          </h1>
          <p className="text-sm text-black">
            Welcome back! Please log in to continue.
          </p>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              className="pl-10 focus-visible:ring-1"
            />
            <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            {errors && (
              <span className="text-xs text-red-500">{errors.email}</span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              className="pl-10 focus-visible:ring-1"
            />
            <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            {errors && (
              <span className="text-xs text-red-500">{errors.password}</span>
            )}
          </div>
        </div>
        <div className="mb-10">
          {loading ? (
            <Button
              disabled
              className="bg-yellow-300 hover:bg-yellow-200 active:bg-yellow-400 w-full text-black font-semibold py-2 rounded-lg shadow-md transition duration-200 transform hover:scale-105 active:scale-95"
            >
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait...
            </Button>
          ) : (
            <Button
              type="submit"
              className="bg-yellow-300 hover:bg-yellow-200 active:bg-yellow-400 w-full text-black font-semibold py-2 rounded-lg shadow-md transition duration-200 transform hover:scale-105 active:scale-95"
            >
              Login
            </Button>
          )}
          <div className="mt-4">
            <Link to="/forgot-password" className="text-blue-500 hover:underline">
              Forgot Password
            </Link>
          </div>
        </div>
        <Separator />
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
