import React from "react";

const BPagination = () => {
  return (
    <div>
      <div className="flex flex-row space-x-4 justify-end">
        <div className="flex items-center justify-center rounded-full w-10 h-10">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 0L20.5595 0.00768842C31.3412 0.304326 40 9.14712 40 20C40 31.02 31.04 40 20 40C8.98 40 0 31.02 0 20C0 8.96 8.98 0 20 0ZM23.96 12C23.36 11.4 22.42 11.4 21.84 12L14.86 18.94C14.58 19.22 14.42 19.6 14.42 20C14.42 20.4 14.58 20.78 14.86 21.06L21.84 28C22.12 28.3 22.5 28.44 22.88 28.44C23.28 28.44 23.66 28.3 23.96 28C24.54 27.4 24.54 26.46 23.94 25.88L18.04 20L23.94 14.12C24.54 13.54 24.54 12.58 23.96 12Z"
              fill="#1849C6"
            />
          </svg>
        </div>
        <div className="flex items-center justify-center rounded-full text-viewb text-lg font-semibold border border-viewb w-10 h-10">
          1
        </div>
        <div className="flex items-center justify-center rounded-full text-viewb text-lg font-semibold border border-viewb w-10 h-10">
          2
        </div>
        <div className="flex items-center justify-center rounded-full text-viewb text-lg font-semibold border border-viewb w-10 h-10">
          3
        </div>
        <div className="flex items-center justify-center rounded-full text-viewb text-lg font-semibold border border-viewb w-10 h-10">
          4
        </div>
        <div className="flex items-center justify-center rounded-full w-10 h-10">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 0L19.4405 0.00768842C8.65884 0.304326 0 9.14712 0 20C0 31.02 8.96 40 20 40C31.02 40 40 31.02 40 20C40 8.96 31.02 0 20 0ZM16.04 12C16.64 11.4 17.58 11.4 18.16 12L25.14 18.94C25.42 19.22 25.58 19.6 25.58 20C25.58 20.4 25.42 20.78 25.14 21.06L18.16 28C17.88 28.3 17.5 28.44 17.12 28.44C16.72 28.44 16.34 28.3 16.04 28C15.46 27.4 15.46 26.46 16.06 25.88L21.96 20L16.06 14.12C15.46 13.54 15.46 12.58 16.04 12Z"
              fill="#1849C6"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BPagination;
