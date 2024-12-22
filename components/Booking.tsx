import { section } from "framer-motion/client";
import { GoArrowUpRight } from "react-icons/go";
export const Booking = () => {
  return (
    <div className="lg:max-w-6xl mx-auto pb-28">
      <div className="flex relative">
        <div className="flex flex-col mx-auto">
          <div className=" flex items-center flex-col">
            <p className="text-red-600 tracking-wider">BOOK AN</p>
            <h1 className="text-3xl">Appointement Form</h1>
          </div>

          <p className="mt-10 text-red-600">Contact info</p>
          <div className="grid grid-cols-2 mt-5 gap-x-5 gap-y-2">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Phone Number" />
            <input type="date" placeholder="Date" />
            <input type="text" placeholder="Time" />
          </div>

          <p className="mt-10 text-red-600">Car info</p>
          <div className="grid grid-cols-2 mt-5 gap-x-5 gap-y-2">
            <input type="text" placeholder="Maker" />
            <input type="text" placeholder="Model" />
          </div>

          <p className="mt-10 text-red-600">Select Services Needed</p>
          <div className="grid grid-cols-2 lg:grid-cols-3 mt-5 gap-y-5 gap-x-4">
            <label className="flex items-center gap-2">
              <input type="checkbox" value="Air Conditioner" />
              Air Conditionner
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" value="Brake Repair" />
              Brake Repair
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" value="Heating & Cooling" />
              Heating & Cooling
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" value="Engine Diagnostics" />
              Engine Diagnostics
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" value="Oil, Lube & Filters" />
              Oil, Lube & Filters
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" value="Steering & Suspension" />
              Steering & Suspension
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" value="Transmission Repair" />
              Transmission Repair
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" value="Wheel Alignment" />
              Wheel Alignment
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" value="Other" />
              Other:
              <input
                type="text"
                placeholder="Specify other services"
                className="p-2 border border-gray-300 rounded w-full"
              />
            </label>
          </div>
        </div>
      </div>
      <div className="pt-12">
        <button className="bg-red-600 px-6 py-2 rounded-md text-white font-medium text-lg hover:bg-red-700 transition-all duration-300 flex items-center mx-auto gap-2">
          Make Appointment
          <GoArrowUpRight />
        </button>
      </div>
    </div>
  );
};
