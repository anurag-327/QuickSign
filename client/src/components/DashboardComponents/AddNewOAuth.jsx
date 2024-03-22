import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { getToken } from "../../helper/tokenHandler";
import { toast } from "react-hot-toast";
import { BASE_URL } from "../../base";
const AddNewOAuth = () => {
  const [loading, setLoading] = useState(false);
  const token = getToken();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, touchedFields },
  } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);
    let options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token.token}`,
      },
      body: JSON.stringify(data),
    };
    const res = await fetch(`${BASE_URL}/api/application/register`, options);
    const result = await res.json();
    if (result.status == 201) {
      setLoading(false);
      toast.success("Successfully Added!");
      document.getElementById("Form").reset();
    } else {
      setLoading(false);
      console.log(result, data);
      toast.error("Error Adding Application!");
    }
  };

  return (
    <div className="w-full px-3 bg-inherit ">
      <h2 className=" text-center text-xl font-bold">Add new OAuth App</h2>
      <form
        id="Form"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col mt-10  w-[100%] sm:w-[80%] sm:min-w-[400px] mx-auto  gap-4 loginsection"
      >
        <div className="relative rounded-lg w-full">
          <h3 className="text-base font-semibold">
            Name <span className="text-red-500 text-lg">*</span>
          </h3>
          <input
            type="name"
            className="peer m-0 block h-[48px] w-full rounded border border-solid border-gray-300 outline-none px-3 py-2 text-base font-normal leading-tight text-black "
            id="name"
            {...register("name", { required: "Required" })}
            placeholder="Ex-QuickSign"
            name="name"
          />
          {touchedFields.name && errors.name && (
            <span className="text-center text-sm text-red-600 w-full">
              {errors.name.message}
            </span>
          )}
        </div>
        <div className="relative mt-5 rounded-lg w-full">
          <h3 className="text-base font-semibold mb-1">Description</h3>
          <textarea
            type="text"
            rows={5}
            className="peer m-0 block w-full rounded border border-solid border-gray-300 outline-none px-3 py-4 text-base font-normal leading-tight text-black "
            id="description"
            placeholder="Description"
            {...register("description")}
            name="description"
          />
        </div>
        <div className="relative mt-5 rounded-lg w-full">
          <h3 className="text-base font-semibold mb-1">
            Homepage URL <span className="text-red-500 text-2xl">*</span>
          </h3>
          <input
            type="url"
            className="peer m-0 block h-[48px] w-full rounded border border-solid border-gray-300 outline-none px-3 py-2 text-base font-normal leading-tight text-black "
            id="homepageURL"
            {...register("homepageURL", {
              required: "Required",
              // pattern: {
              //   value:
              //     /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[a-zA-Z0-9-._?&=/]*)?$/,
              //   message: "Not a valid url",
              // },
            })}
            placeholder="https//www.quick-sign.com/"
            name="homepageURL"
          />
          {touchedFields.homepageURL && errors.homepageURL && (
            <span className="text-center text-sm text-red-600 w-full">
              {errors.homepageURL.message}
            </span>
          )}
        </div>
        <div className="relative mt-5 rounded-lg w-full">
          <h3 className="text-base font-semibold mb-1">
            Authorization Callback URL{" "}
            <span className="text-red-500 text-2xl">*</span>
          </h3>
          <input
            type="url"
            className="peer m-0 block h-[48px] w-full rounded border border-solid border-gray-300 outline-none px-3 py-2 text-base font-normal leading-tight text-black "
            id="callbackURL"
            {...register("callbackURL", {
              required: "Required",
              // pattern: {
              //   value:
              //     /^(http?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[a-zA-Z0-9-._?&=/]*)?$/,
              //   message: "Not a valid url",
              // },
            })}
            placeholder="https//www.quick-sign.com/login"
            name="callbackURL"
          />
          {errors.callbackURL && (
            <span className="text-center text-sm text-red-600 w-full">
              {errors.callbackURL.message}
            </span>
          )}
        </div>
        {/* <div className='mt-5 shadow-md border border-gray-300 px-3 py-8'>
                    <label htmlFor='profile'>
                         <img  src={"https://github.com/anurag-327/QuickSign/assets/98267696/373a8c6a-6e65-4b02-9ba6-27cdf49ea4b8"}  className='w-[100px] object-cover border cursor-pointer border-gray-800 rounded-full m-auto h-auto' alt="profile"/>
                    </label>
                    <input   className='hidden' id="profile" name="profile" type="file"></input>
                    <div className='text-lg text-center mt-3 font-light'>
                       Drop your Organization Logo here
                    </div>
                </div> */}
        <div className="mt-4">
          <button
            disabled={loading}
            className={`w-[100%] block border-none px-2 py-3 cursor-pointer ${
              isSubmitting ? "bg-blue-300" : "bg-brand"
            } bg-blue-600 text-white text-lg font-semibold rounded-md`}
            type="Submit"
          >
            {isSubmitting ? "Creating" : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewOAuth;
