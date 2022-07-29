import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = (props) => {
  let navigate = useNavigate();
  const post = () => {
    navigate("/post");
  };
  return (
    <div
      className={`bg-white w-full lg:w-72 rounded-lg border-2 ${
        props.border === "gray" ? "border-gray-300" : "border-white"
      }  text-center pb-4`}
    >
      <img src={props.image} className="rounded-t-lg w-full" alt="" />

      <div className="w-full px-3 text-left pb-4">
        <h1 className="text-secondary font-semibold text-lg py-4">
          {props.name}
        </h1>

        <div className="flex flex-row space-x-2">
          <div className="flex flex-row items-center space-x-1">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.991 0C4.023 0 0 4.032 0 9C0 13.968 4.023 18 8.991 18C13.968 18 18 13.973 18 9C18 4.02695 13.968 0 8.991 0ZM9 16.2C5.022 16.2 1.8 12.978 1.8 9C1.8 5.022 5.022 1.8 9 1.8C12.978 1.8 16.2 5.022 16.2 9C16.2 12.978 12.978 16.2 9 16.2ZM9.45 4.5H8.1V9.9L12.825 12.735L13.5 11.628L9.45 9.225V4.5Z"
                fill="#000103"
                fillOpacity="0.7"
              />
            </svg>
            <p className="text-secondary text-sm font-medium text">
              {props.time}
            </p>
          </div>

          <div className="flex flex-row items-center space-x-1">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.12843 17.9989C9.61117 17.9983 10.0744 17.808 10.418 17.469L16.8261 11.0509C16.9906 10.8874 17.0931 10.6719 17.1161 10.4411L17.9958 1.09388C18.0093 0.947454 17.9903 0.799861 17.9402 0.661621C17.89 0.523381 17.8101 0.397898 17.7059 0.294116C17.6021 0.189949 17.4766 0.109958 17.3384 0.0598464C17.2001 0.0097344 17.0525 -0.00926534 16.9061 0.00420171L7.55889 0.883941C7.32815 0.906929 7.11257 1.00942 6.94907 1.17385L0.530979 7.58195C0.190945 7.92301 0 8.38497 0 8.86657C0 9.34818 0.190945 9.81013 0.530979 10.1512L7.84881 17.469C8.18882 17.8074 8.64872 17.9978 9.12843 17.9989ZM15.1266 9.89127L9.12843 15.8895L2.08052 8.84158L8.07874 2.84336L15.8864 2.11358L15.1266 9.89127Z"
                fill="#000103"
                fillOpacity="0.7"
              />
              <path
                d="M11.4973 8.00293C10.6689 8.00293 9.99728 7.33136 9.99728 6.50293C9.99728 5.6745 10.6689 5.00293 11.4973 5.00293C12.3257 5.00293 12.9973 5.6745 12.9973 6.50293C12.9973 7.33136 12.3257 8.00293 11.4973 8.00293Z"
                fill="#000103"
                fillOpacity="0.7"
              />
            </svg>
            <p className="text-secondary text-sm font-medium text">
              {props.tag}
            </p>
          </div>

          <div className="flex flex-row items-center space-x-1">
            <img src="./images/profile-icon.png" alt="Profile Icon" />
            <p className="text-secondary text-sm font-medium text">
              {props.profile}
            </p>
          </div>
        </div>
      </div>

      <button className="btn-secondary px-12 py-2 mx-auto" onClick={post}>
        Read More
      </button>
    </div>
  );
};

export default BlogCard;
