import React, { useState } from "react";
import { CodesandboxLogo, Copy, ShieldStar } from "phosphor-react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useForm } from "react-hook-form";
import { getToken } from "../../helper/tokenHandler";
import { BASE_URL } from "../../base";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const ApplicationDashboard = ({ application, setApplication }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState("");
  const token = getToken();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    let options = {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token.token}`,
      },
      body: JSON.stringify({ ...data, applicationId: application._id }),
    };
    const res = await fetch(`${BASE_URL}/api/application/update`, options);
    const result = await res.json();
    console.log(result);
    if (result.status == 200) {
      setLoading(false);
      //   setApplication(result.application)
      toast.success("Successfully updated!");
    } else {
      setLoading(false);
      console.log(result, data);
      toast.error("Error updating Details!");
    }
  };
  async function deleteAccount() {
    setDeleteLoading(true);
    let options = {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token.token}`,
      },
    };
    const res = await fetch(
      `${BASE_URL}/api/application/delete/${application._id}`,
      options
    );
    const data = await res.json();
    if (data.status == 200) {
      setDeleteLoading(false);
      toast.success("Deleted Successfully");
      navigate("/dashboard");
    } else {
      setDeleteLoading(false);
      toast.error("Error Deleting Account");
    }
  }
  return (
    <div className="sm:px-8 px-4  mx-auto  border rounded-xl border-gray-200 shadow-sm overflow-hidden py-4 w-[100%] sm:w-[100%]  justify-center items-start flex-col gap-3">
      <Toaster position="top-center" reverseOrder />
      <h2 className="text-3xl gap-4 flex sm:text-4xl flec items-center mt-5 font-bold ">
        <ShieldStar size={50} weight="fill" /> Welcome {application.name}
      </h2>

      <div className="px-5 py-5 mt-8 bg-gray-100 border border-gray-200 rounded-lg">
        <p className="whitespace-pre-wrap text-lg ">
          If you encounter any issues or have questions about using QuickSign's
          OAuth system, please refer to our{" "}
          <a
            href="https://quicksign-doc.vercel.app/"
            className="font-bold text-blue-600 underline"
          >
            Developer Docs
          </a>{" "}
          for detailed guidance.
        </p>
      </div>

      <div>
        <h2 className="text-3xl  flex  gap-4 text-start my-10 font-semibold ">
          <ShieldStar size={40} weight="fill" />
          Your Application credentials
        </h2>
        <div className="flex gap-4 flex-col">
          <div className="px-8 py-4   shadow-md overflow-auto  whitespace-pre-wrap  border border-gray-200 rounded-lg">
            <div className="flex justify-between mb-2">
              <h3 className="text-lg">Client ID</h3>

              <CopyToClipboard
                text={application._id}
                onCopy={() => toast.success("copied")}
              >
                <button>
                  <Copy
                    className="cursor-pointer text-yellow-600"
                    size={25}
                    weight="fill"
                  />
                </button>
              </CopyToClipboard>
            </div>
            <input
              readOnly
              className="w-full overflow-visible bg-gray-200 outline-none py-3 px-3 rounded-md  text-lg  "
              defaultValue={application._id}
            />
          </div>
          <div className="px-8 py-4 shadow-md overflow-auto  whitespace-pre-wrap  border border-gray-200 rounded-lg">
            <div className="flex justify-between mb-2">
              <h3 className="text-lg ">Client Secret</h3>
              <CopyToClipboard
                text={application.clientSecret}
                onCopy={() => toast.success("copied")}
              >
                <button>
                  <Copy
                    className="cursor-pointer text-yellow-600"
                    size={25}
                    weight="fill"
                  />
                </button>
              </CopyToClipboard>
            </div>
            <input
              readOnly
              className="w-full overflow-visible bg-gray-200 outline-none  py-3 px-3 rounded-md  text-lg"
              defaultValue={application.clientSecret}
            />
          </div>
        </div>
      </div>

      <div className="">
        <h2 className="text-3xl text-black flex  gap-4 text-start my-10 font-bold ">
          <ShieldStar size={40} weight="fill" />
          General Credentials
        </h2>
        <form
          id="Form"
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col  w-[100%] sm:w-[70%] sm:min-w-[400px] mx-auto  gap-4 mt-5 loginsection"
        >
          <div className="relative mt-10 rounded-lg w-full">
            <h3 className="text-lg font-bold mb-2">
              Name <span className="text-red-500 text-2xl">*</span>
            </h3>
            <input
              type="name"
              className="peer m-0 block h-[58px] w-full rounded border border-solid border-gray-200 bg-gray-200 outline-none px-3 py-4 text-base font-normal leading-tight text-black "
              id="name"
              {...register("name", { required: true })}
              placeholder="Ex-QuickSign"
              defaultValue={application.name}
              name="name"
            />
            {errors.name && (
              <span className="text-center text-red-400 w-full">
                This field is required !
              </span>
            )}
          </div>
          <div className="relative mt-5 rounded-lg w-full">
            <h3 className="text-lg font-bold mb-2">Description</h3>
            <textarea
              type="text"
              rows={5}
              className="peer m-0 block w-full rounded border border-solid border-gray-200 bg-gray-200 outline-none px-3 py-4 text-base font-normal leading-tight text-black "
              id="description"
              placeholder="Description"
              {...register("description")}
              defaultValue={application.description}
              name="description"
            />
          </div>
          <div className="relative mt-5 rounded-lg w-full">
            <h3 className="text-lg font-bold mb-2">
              Homepage URL <span className="text-red-500 text-2xl">*</span>
            </h3>
            <input
              type="text"
              className="peer m-0 block h-[58px] w-full rounded border border-solid border-gray-200 bg-gray-200 outline-none px-3 py-4 text-base font-normal leading-tight text-black "
              id="homepageURL"
              {...register("homepageURL", {
                required: true,
                pattern:
                  /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi,
              })}
              placeholder="https//www.quick-sign.com/"
              defaultValue={application.homepageURL}
              name="homepageURL"
            />
            {errors.homepageURL && (
              <span className="text-center text-red-400 w-full">
                Not a valid URL !
              </span>
            )}
          </div>
          <div className="relative mt-5 rounded-lg w-full">
            <h3 className="text-lg font-bold mb-2">
              Authorization Callback URL{" "}
              <span className="text-red-500 text-2xl">*</span>
            </h3>
            <input
              type="text"
              className="peer m-0 block h-[58px] w-full rounded border border-solid border-gray-200 bg-gray-200 outline-none px-3 py-4 text-base font-normal leading-tight text-black "
              id="callbackURL"
              {...register("callbackURL", {
                required: true,
                pattern:
                  /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi,
              })}
              placeholder="https//www.quick-sign.com/login"
              defaultValue={application.callbackURL}
              name="callbackURL"
            />
            {errors.callbackURL && (
              <span className="text-center text-red-400 w-full">
                Not a valid URL !
              </span>
            )}
          </div>
          {/* <div className='mt-5 bg-gray-200 border border-gray-200 px-3 py-8'>
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
                loading ? "bg-green-300" : "bg-green-600"
              } bg-blue-600 text-white text-lg font-semibold rounded-md`}
              type="Submit"
            >
              {loading ? "Updating" : "Update"}
            </button>
          </div>
        </form>
        <div className="px-6 sm:px-8 py-6 w-full mt-20  overflow-auto  whitespace-pre-wrap  border border-gray-200 rounded-lg">
          <div className="  w-full">
            <h3 className="text-2xl text-red-600 font-bold mb-2">
              Delete Application
            </h3>
            <p className="text-center my-4 whitespace-pre-wrap text-sm">
              Note! This is a destructive action continuing will delete your
              profie
            </p>
            <p>
              Type{" "}
              <span className="text-red-400  my-2 font-bold">
                QuickSign/Delete/{application.name}
              </span>{" "}
              to delete your account
            </p>
            <input
              id="deleteBox"
              value={deleteMessage}
              type="text"
              autoCorrect="off"
              autoComplete="off"
              onChange={(e) => setDeleteMessage(e.target.value)}
              className="w-full  mt-2 outline-none bg-gray-50 border py-3 px-3 rounded-md font-semibold text-lg"
            />
          </div>
          {deleteMessage === `QuickSign/Delete/${application.name}` && (
            <button
              onClick={deleteAccount}
              className={`bg-red-500 mt-4 rounded-md mr-4 float-right px-3 py-2 ${
                deleteLoading ? "bg-red-200" : "bg-red-500"
              }`}
            >
              Delete my account
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationDashboard;
