import React from "react";

const Footer = () => {
  return (
    <footer className="relative bottom-0 right-0 left-0">
      <img
        src="./images/footer-bg-left.png"
        className="absolute bottom-0 left-6 z-0"
        alt=""
      />
      <img
        src="./images/footer-bg-right.png"
        className="absolute bottom-0 right-16 z-0"
        alt=""
      />
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-y-12 lg:gap-y-0 px-4 lg:px-24 pt-40 pb-8 font-ftrFont text-secondary z-10">
        <div className="relative col-span-3">
          <div className="flex flex-row pb-4">
            <img
              src="./images/flogo-icon.png"
              className="mr-2"
              alt="logo Icon"
            />
            <h2 className="font-bold font-second text-fhead text-lg">
              StorageConnect
            </h2>
          </div>

          <p className=" pb-8 w-72">
            Nam posuere accumsan porta. Integer id orci sed ante tincidunt
            tincidunt sit amet sed libero.
          </p>

          <p>© StorageConnect 2022, All Rights Reserved</p>
        </div>

        <div className="col-span-2">
          <h1 className="fheader">Quick Links</h1>
          <ul className="leading-9 ">
            <li>Active Listings</li>
            <li>Self your Self Storage</li>
            <li>Free Evaluation</li>
            <li>Learn</li>
          </ul>
        </div>

        <div className="col-span-3">
          <h1 className="fheader">Newsletter</h1>
          <p>Get latest updates right in your inbox</p>
          <input
            type="text"
            placeholder="Enter your email"
            className="border-skyback border px-4 py-3 rounded-md font-main text-xs my-4"
          />

          <button className="btn-secondary">Subscribe Now</button>
        </div>

        <div className="col-span-2 relative z-10">
          <h1 className="fheader">Let's Get Social</h1>

          <div className="flex flex-row gap-2 pb-6">
            <div className="flex items-center justify-center h-10 w-10 font-semibold bg-viewb space-x-2 rounded-full">
              <svg
                width="13"
                height="25"
                viewBox="0 0 13 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.66667 8.33333V5.85286C8.66667 4.73307 8.92396 4.16667 10.7318 4.16667H13V0H9.2151C4.57708 0 3.04688 2.04427 3.04688 5.55339V8.33333H0V12.5H3.04688V25H8.66667V12.5H12.4854L13 8.33333H8.66667Z"
                  fill="white"
                />
              </svg>
            </div>

            <div className="flex items-center justify-center h-10 w-10 font-semibold bg-viewb space-x-2 rounded-full">
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.0605 0H2.0379C1.21737 0 0.5 0.590779 0.5 1.40193V16.4574C0.5 17.2732 1.21737 18 2.0379 18H17.0558C17.8811 18 18.5 17.2686 18.5 16.4574V1.40193C18.5047 0.590779 17.8811 0 17.0605 0ZM6.07957 15.0039H3.50078V6.98619H6.07957V15.0039ZM4.87926 5.76713H4.8605C4.03529 5.76713 3.50078 5.1529 3.50078 4.38395C3.50078 3.60094 4.04936 3.00078 4.89332 3.00078C5.73729 3.00078 6.25305 3.59625 6.27181 4.38395C6.27181 5.1529 5.73729 5.76713 4.87926 5.76713ZM15.5039 15.0039H12.9251V10.62C12.9251 9.56968 12.55 8.85231 11.6169 8.85231C10.9043 8.85231 10.4823 9.33524 10.2947 9.80412C10.2244 9.97291 10.2056 10.2027 10.2056 10.4371V15.0039H7.62685V6.98619H10.2056V8.10211C10.5807 7.5676 11.1668 6.79865 12.5312 6.79865C14.2239 6.79865 15.5039 7.91456 15.5039 10.3199V15.0039Z"
                  fill="white"
                />
              </svg>
            </div>

            <div className="flex items-center justify-center h-10 w-10 font-semibold bg-viewb space-x-2 rounded-full">
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20 1.89583C19.2626 2.21667 18.4743 2.43333 17.6436 2.53333C18.4912 2.03333 19.1439 1.24167 19.449 0.3C18.6565 0.7625 17.7792 1.1 16.8426 1.27917C16.0924 0.491667 15.0244 0 13.8462 0C11.5787 0 9.74359 1.80833 9.74359 4.0375C9.74359 4.35417 9.7775 4.6625 9.84954 4.95833C6.4378 4.79167 3.41174 3.18333 1.39013 0.7375C1.03836 1.33333 0.834923 2.02917 0.834923 2.76667C0.834923 4.16667 1.56389 5.40417 2.66582 6.12917C1.98771 6.1125 1.35198 5.92917 0.801017 5.625C0.801017 5.64167 0.801017 5.65833 0.801017 5.675C0.801017 7.63333 2.21657 9.2625 4.09409 9.63333C3.75079 9.725 3.38631 9.775 3.01335 9.775C2.75058 9.775 2.49205 9.75 2.242 9.7C2.7633 11.3042 4.28057 12.4708 6.07756 12.5042C4.67472 13.5875 2.90316 14.2333 0.979021 14.2333C0.648442 14.2333 0.322102 14.2125 0 14.175C1.80971 15.3333 3.96694 16 6.28099 16C13.8377 16 17.9657 9.84583 17.9657 4.50833C17.9657 4.33333 17.9614 4.15833 17.953 3.9875C18.754 3.41667 19.449 2.70833 20 1.89583Z"
                  fill="white"
                />
              </svg>
            </div>

            <div className="flex items-center justify-center h-10 w-10 font-semibold bg-viewb space-x-2 rounded-full">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8.25" cy="9" r="3.5" fill="white" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.12735 5.33807C6.03395 4.43147 7.23931 3.92683 8.52142 3.92683C9.80354 3.92683 11.0089 4.43413 11.9155 5.34073C12.4907 5.91596 12.9017 6.6072 13.1254 7.37863H16.7286V2.53577C16.7286 1.39963 15.8504 0.521484 14.7143 0.521484H2.37142C1.23528 0.521484 0.271423 1.39963 0.271423 2.53577V7.37863H3.91737C4.14117 6.6072 4.55212 5.9133 5.12735 5.33807ZM15.3571 4.08686C15.3571 4.38982 15.1115 4.63544 14.8085 4.63544H13.1628C12.8599 4.63544 12.6143 4.38986 12.6143 4.08686V2.44115C12.6143 2.13819 12.8598 1.89258 13.1628 1.89258H14.8085C15.1115 1.89258 15.3571 2.13815 15.3571 2.44115V4.08686Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.9155 12.1262C11.0089 13.0328 9.80354 13.5268 8.52142 13.5268C7.23931 13.5268 6.03395 13.0355 5.12735 12.1289C4.22242 11.224 3.72339 9.99286 3.72151 8.75H0.271423V14.8786C0.271423 16.0147 1.23528 16.9786 2.37142 16.9786H14.7143C15.8504 16.9786 16.7286 16.0147 16.7286 14.8786V8.75H13.3213C13.3195 9.99286 12.8205 11.2213 11.9155 12.1262Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          <select
            id="countries"
            className="bg-white text-fhead border font-bold border-viewb rounded-md py-2 px-4"
          >
            <option defaultValue>English - En</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
