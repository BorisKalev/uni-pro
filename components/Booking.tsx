import Image from "next/image";
import deal from "@/app/images/close-up-sales-manager-black-suit-selling-car-customer.jpg";
export const Booking = () => {
  return (
    <div className="">
      <div className="flex">
        <Image
          src={deal}
          alt="shaking hands"
          className="w-[500px]  object-contain"
        ></Image>

        <div className="flex flex-col mx-auto">
          <p className="text-red-600 tracking-wider">BOOK AN</p>
          <h1 className="text-3xl">Appointement Form</h1>

          <p className="mt-10">Contact info</p>
          <div className="grid grid-cols-2 mt-5 gap-x-5 gap-y-2">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Phone Number" />
            <input type="date" placeholder="Date" />
            <input type="text" placeholder="Time" />
          </div>

          <p className="mt-10">Car info</p>
          <div className="grid grid-cols-2 mt-5 gap-x-5 gap-y-2">
            <input type="text" placeholder="Maker" />
            <input type="text" placeholder="Model" />
          </div>

          <p className="mt-10">Select Services Needed</p>
          <div className="grid grid-cols-3"></div>
        </div>
      </div>
    </div>
  );
};
