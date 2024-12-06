import { Avatar } from "@radix-ui/react-avatar";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { AvatarFallback, AvatarImage } from "./ui/avatar";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import CheckoutConfirmPage from "./CheckoutConfirmPage";

const Cart = () => {
  const [open,setOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-col max-w-7xl mx-auto my-10">
      <div className="flex justify-end">
        <Button variant="link">Clear All</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Items</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Total</TableHead>
            <TableHead className="text-right">Remove</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <Avatar>
                <AvatarImage src="" alt="" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </TableCell>
            <TableCell>Briyani</TableCell>
            <TableCell>80</TableCell>
            <TableCell>
              <div className="w-fit flex items-center rounded-full border border-gray-100 dark:border-gray-800 shadow-md"></div>
              <Button
                variant={"outline"}
                className="rounded-full bg-gray-200"
                size={"icon"}
              >
                <Minus />
              </Button>
              <Button
                disabled
                variant={"outline"}
                className="font-bold border-none"
                size={"icon"}
              >
                1
              </Button>
              <Button
                variant={"outline"}
                className="rounded-full bg-yellow-300 hover:bg-yellow-200 active:bg-yellow-400  text-black font-semibold   transition duration-200 transform hover:scale-105 active:scale-95"
                size={"icon"}
              >
                <Plus />
              </Button>
            </TableCell>
            <TableCell>80</TableCell>
            <TableCell className="text-right">
              <Button
                size={"sm"}
                className="rounded-full bg-yellow-300 hover:bg-yellow-200 active:bg-yellow-400  text-black font-semibold   transition duration-200 transform hover:scale-105 active:scale-95"
              >
                Remove
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow className="text-2xl font-bold">
          <TableCell colSpan={5}>Total</TableCell>
          <TableCell className="text-right">80</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <div className="flex justify-end my-5">
        <Button onClick={()=> setOpen(true)} className="rounded-lg bg-yellow-300 hover:bg-yellow-200 active:bg-yellow-400  text-black font-semibold   transition duration-200 transform hover:scale-105 active:scale-95">
          Proceed To Checkout
        </Button>
        <CheckoutConfirmPage open={open} setOpen={setOpen}/>
      </div>
    </div>
  );
};

export default Cart;
