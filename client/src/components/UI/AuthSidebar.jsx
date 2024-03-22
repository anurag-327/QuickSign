import {
  Key,
  Lock,
  LockKey,
  LockKeyOpen,
  Shield,
  ShieldStar,
  ShieldWarning,
} from "phosphor-react";
export default function AuthSidebar() {
  return (
    <div className="order:1 md:order-2 flex h-[300px] md:h-full md:bg-gray-100 justify-center items-center">
      <div className="flex justify-center items-center">
        <div className="relative">
          <div>
            {/* <div className="h-[150px] w-[150px] rounded-full -top-[100px] bg-blue-600 "></div> */}
            <ShieldStar
              className="mx-auto"
              size={180}
              color="#634bd8"
              weight="fill"
            />
          </div>
          <div className="h-[120px] w-[200px] absolute rounded-b-full  -bottom-[40px] -right-[10px] bg-blue-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg  bg-opacity-0">
            <Key
              className="absolute rotate-12 top-4 right-8 text-yellow-300"
              size={20}
              weight="bold"
            />
            <Lock
              className="absolute rotate-45 top-[20%] left-[10%] text-red-400"
              size={20}
              weight="bold"
            />
            <LockKey
              className="absolute rotate-135 top-14 right-4 text-green-400"
              size={20}
              weight="bold"
            />
            <LockKeyOpen
              className="absolute rotate-225 bottom-[50%] right-[30%] text-blue-400"
              size={20}
              weight="bold"
            />
            <Shield
              className="absolute rotate-315 bottom-[10%] left-[50%] text-indigo-400"
              size={20}
              weight="bold"
            />
            <ShieldStar
              className="absolute rotate-45 bottom-[30%] left-[20%] text-purple-400"
              size={20}
              weight="bold"
            />
            <ShieldWarning
              className="absolute rotate-135 bottom-[50%] left-[40%] text-pink-400"
              size={20}
              weight="bold"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
