import { Dispatch, SetStateAction, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const CheckoutConfirmPage = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    city: "",
    country: "",
  });

  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //API implementation start here
    console.log("Order Details:", input);
    setOpen(false); // Close the dialog after submission
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
        <DialogTitle className="text-lg font-bold text-gray-900 dark:text-white">
          Review Your Order
        </DialogTitle>
        <DialogDescription className="text-xs text-gray-600 dark:text-gray-300 mb-4">
          Please double-check your delivery details before proceeding.
        </DialogDescription>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Full Name
              </Label>
              <Input
                id="name"
                type="text"
                name="name"
                value={input.name}
                onChange={changeEventHandler}
                placeholder="Enter your full name"
                className="mt-1"
                required
              />
            </div>
            <div>
              <Label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                name="email"
                value={input.email}
                onChange={changeEventHandler}
                placeholder="Enter your email"
                className="mt-1"
                required
              />
            </div>
            <div>
              <Label
                htmlFor="contact"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Contact Number
              </Label>
              <Input
                id="contact"
                type="text"
                name="contact"
                value={input.contact}
                onChange={changeEventHandler}
                placeholder="Enter your contact number"
                className="mt-1"
                required
              />
            </div>
            <div>
              <Label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Address
              </Label>
              <Input
                id="address"
                type="text"
                name="address"
                value={input.address}
                onChange={changeEventHandler}
                placeholder="Enter your address"
                className="mt-1"
                required
              />
            </div>
            <div>
              <Label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                City
              </Label>
              <Input
                id="city"
                type="text"
                name="city"
                value={input.city}
                onChange={changeEventHandler}
                placeholder="Enter your city"
                className="mt-1"
                required
              />
            </div>
            <div>
              <Label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Country
              </Label>
              <Input
                id="country"
                type="text"
                name="country"
                value={input.country}
                onChange={changeEventHandler}
                placeholder="Enter your country"
                className="mt-1"
                required
              />
            </div>
          </div>

          <DialogFooter className="col-span-2 pt-5">
            <Button
              type="submit"
              className="px-4 py-2 text-sm rounded-lg bg-yellow-300 hover:bg-yellow-200 active:bg-yellow-400  text-black font-semibold   transition duration-200 transform hover:scale-105 active:scale-95"
            >
              Confirm Order
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutConfirmPage;
