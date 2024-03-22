"use client";
import { ShieldStar } from "@phosphor-icons/react/dist/ssr";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
export default function () {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [profile, setProfile] = useState(null);
  const status = searchParams.get("status") || false;
  const token = searchParams.get("token") || null;
  async function init(token) {
    const body = {
      method: "post",
      headers: {
        "content-type": "application/json",
        api: process.env.NEXT_PUBLIC_QUICKSIGN_CLIENTSECRET,
      },
      body: JSON.stringify({ token: token }),
    };
    const response = await fetch(
      process.env.NEXT_PUBLIC_QUICKSIGN_APIURL,
      body
    );
    const data = await response.json();
    if (data.status == 200) {
      console.log(data);
      setLoading(false);
      setProfile(data.data);
    } else {
      setError(true);
      console.log(data);
    }
  }
  useEffect(() => {
    if (token) {
      init(token);
    } else {
      router.push("/");
    }
  }, []);
  if (loading)
    return (
      <div className="flex flex-col items-center justify-center w-full min-h-screen">
        <span className="text-white">Fetching Profile...</span>
      </div>
    );
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[80vh] text-white">
      <div className="z-40 mt-20 card animatecard2 ">
        <div>
          <div className="w-[350px] sm:w-[420px] relative  bg-branddark rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border-2 border-gray-600">
            <div className="flex flex-col justify-center w-full p-8 mt-10 text-blue-100">
              <div className="flex flex-col items-center justify-center w-full gap-1 -mt-8 text-center">
                <ShieldStar size={40} weight="fill" className="mx-center" />
                <span className="font-semibold">
                  Thank you for trying QuickSign
                </span>
              </div>

              <div className="mt-10">
                <div className="mb-2 text-xs">
                  <span>Signed in as</span>
                </div>
                <div>
                  <div className="flex flex-col gap-4 text-xs">
                    <div>
                      <span>Name</span>
                      <input
                        type="text"
                        readOnly
                        defaultValue={profile.name}
                        placeholder="name"
                        className="w-full px-4 py-2 mt-1 text-xs text-gray-300 bg-gray-900 border border-gray-600 rounded-full outline-none resize-none"
                      ></input>
                    </div>
                    <div>
                      <span>Email Address</span>
                      <input
                        type="email"
                        readOnly
                        defaultValue={profile.email}
                        placeholder="johndoe@gmail.com"
                        className="w-full px-4 py-2 mt-1 text-xs text-gray-300 bg-gray-900 border border-gray-600 rounded-full outline-none resize-none"
                      ></input>
                    </div>
                    <a
                      href="https://quick-sign.vercel.app"
                      className="w-full py-2 text-sm font-semibold text-center bg-blue-500 rounded-full"
                    >
                      <span className="mt-2">Back to QuickSign</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
