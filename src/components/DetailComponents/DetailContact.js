import React from "react";
import { useNavigate } from "react-router-dom";

const DetailContact = () => {
  let navigate = useNavigate();
  const enquiry = () => {
    navigate("/enquiry-sent");
  };
  return (
    <div className="relative px-4 py-16 lg:p-20 z-10" id="contact">
      <div className="bg-white w-full lg:w-3/6 shadow-lg mx-auto space-y-6 px-6 py-8 lg:p-12 rounded-2xl">
        <label className="relative group block">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              className="h-5 w-5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.7168 0C8.72789 0 7.76119 0.293245 6.93895 0.842652C6.1167 1.39206 5.47584 2.17295 5.0974 3.08658C4.71896 4.00021 4.61994 5.00555 4.81287 5.97545C5.0058 6.94536 5.482 7.83627 6.18126 8.53553C6.88053 9.2348 7.77144 9.711 8.74135 9.90393C9.71125 10.0969 10.7166 9.99784 11.6302 9.6194C12.5438 9.24096 13.3247 8.6001 13.8741 7.77785C14.4236 6.95561 14.7168 5.98891 14.7168 5C14.7168 3.67392 14.19 2.40215 13.2523 1.46447C12.3146 0.526784 11.0429 0 9.7168 0V0ZM9.7168 8C9.12345 8 8.54343 7.82405 8.05009 7.49441C7.55674 7.16476 7.17222 6.69623 6.94516 6.14805C6.7181 5.59987 6.65869 4.99667 6.77444 4.41473C6.8902 3.83279 7.17592 3.29824 7.59548 2.87868C8.01503 2.45912 8.54958 2.1734 9.13153 2.05764C9.71347 1.94189 10.3167 2.0013 10.8648 2.22836C11.413 2.45542 11.8816 2.83994 12.2112 3.33329C12.5408 3.82664 12.7168 4.40666 12.7168 5C12.7168 5.79565 12.4007 6.55871 11.8381 7.12132C11.2755 7.68393 10.5124 8 9.7168 8V8ZM18.7168 19V18C18.7168 16.1435 17.9793 14.363 16.6665 13.0503C15.3538 11.7375 13.5733 11 11.7168 11H7.7168C5.86028 11 4.0798 11.7375 2.76705 13.0503C1.45429 14.363 0.716797 16.1435 0.716797 18V19H2.7168V18C2.7168 16.6739 3.24358 15.4021 4.18126 14.4645C5.11894 13.5268 6.39071 13 7.7168 13H11.7168C13.0429 13 14.3146 13.5268 15.2523 14.4645C16.19 15.4021 16.7168 16.6739 16.7168 18V19H18.7168Z"
                fill="#A1A6B1"
                className="group-focus-within:fill-viewb"
              />
            </svg>
          </span>
          <input
            type="text"
            className="input-form pl-9"
            placeholder="Full Name"
          />
        </label>

        <label className="relative group block">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 stroke-[#A1A6B1] group-focus-within:stroke-viewb"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </span>
          <input
            type="phone"
            className="input-form pl-9"
            placeholder="Number"
          />
        </label>

        <label className="relative group block">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 stroke-[#A1A6B1] group-focus-within:stroke-viewb"
              fill="none"
              viewBox="0 0 24 24"
              stroke=""
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </span>
          <input
            type="email"
            className="input-form  pl-9"
            placeholder="Email address"
          />
        </label>

        <textarea
          name=""
          id=""
          className="input-form"
          placeholder="Your message..."
          cols="30"
          rows="5"
        ></textarea>
        <button
          className="btn-secondary inline-flex justify-center items-center w-full"
          onClick={enquiry}
        >
          <span className="mr-4">Send Message</span>
          <svg
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 19.3102L16 10.0001L0 0.689941V7.93114L11.4615 10.0001L0 12.069V19.3102Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DetailContact;
