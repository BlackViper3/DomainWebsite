"use client";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Skils</a>
              <ul className="p-2">
                <li>
                  <a>Frontend</a>
                </li>
                <li>
                  <a>Backend</a>
                </li>
                <li>
                  <a>DevOpsśś</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <svg
          width="89"
          height="28"
          viewBox="0 0 89 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.15975 21V13.328H6.15175L0.355752 0.559999H5.67575L9.45575 9.408H10.1558L13.5158 0.559999H18.5558L13.2638 13.328H12.2558V21H7.15975ZM21.247 21.392C19.6044 21.392 18.2604 20.9627 17.215 20.104C16.1884 19.2267 15.675 18.0133 15.675 16.464C15.675 15.3067 15.983 14.3733 16.599 13.664C17.215 12.936 18.0644 12.404 19.147 12.068C20.2297 11.732 21.471 11.564 22.871 11.564H25.307C25.2884 10.8547 25.111 10.3413 24.775 10.024C24.4577 9.688 23.935 9.52 23.207 9.52C22.8524 9.52 22.3297 9.52933 21.639 9.548C20.9484 9.56667 20.2204 9.59467 19.455 9.632C18.6897 9.66933 17.9897 9.70667 17.355 9.744V5.488C17.803 5.45067 18.335 5.41333 18.951 5.376C19.567 5.33867 20.2017 5.31067 20.855 5.292C21.527 5.27333 22.143 5.264 22.703 5.264C25.0924 5.264 26.931 5.78667 28.219 6.832C29.5257 7.87733 30.179 9.47333 30.179 11.62V21H26.147V18.144C25.811 19.1893 25.2324 19.992 24.411 20.552C23.5897 21.112 22.535 21.392 21.247 21.392ZM22.871 17.976C23.5244 17.976 24.075 17.7893 24.523 17.416C24.9897 17.024 25.251 16.3147 25.307 15.288V14.196H22.871C22.1804 14.196 21.6484 14.3733 21.275 14.728C20.9017 15.064 20.715 15.5213 20.715 16.1C20.715 16.66 20.9017 17.1173 21.275 17.472C21.6484 17.808 22.1804 17.976 22.871 17.976ZM37.1121 27.188C36.3468 27.188 35.5534 27.16 34.7321 27.104C33.9294 27.048 33.2014 26.9733 32.5481 26.88V22.624C33.2014 22.6987 33.9294 22.764 34.7321 22.82C35.5348 22.8947 36.2721 22.932 36.9441 22.932C38.6614 22.932 39.9214 22.652 40.7241 22.092C41.5454 21.5507 41.9561 20.692 41.9561 19.516V18.172C41.4894 19.1053 40.8174 19.8333 39.9401 20.356C39.0814 20.86 38.0454 21.112 36.8321 21.112C35.4321 21.112 34.2188 20.7853 33.1921 20.132C32.1841 19.4787 31.4001 18.5827 30.8401 17.444C30.2988 16.2867 30.0281 14.9707 30.0281 13.496V12.824C30.0281 11.3493 30.3268 10.0333 30.9241 8.876C31.5214 7.7 32.3521 6.776 33.4161 6.104C34.4801 5.432 35.7214 5.096 37.1401 5.096C38.4841 5.096 39.6321 5.42267 40.5841 6.076C41.5361 6.72933 42.2361 7.68133 42.6841 8.932V5.544H46.7161V19.18C46.7161 22.0547 45.9134 24.108 44.3081 25.34C42.7028 26.572 40.3041 27.188 37.1121 27.188ZM38.5401 16.912C39.4548 16.912 40.2294 16.604 40.8641 15.988C41.5174 15.372 41.8441 14.4947 41.8441 13.356V12.684C41.8441 11.6013 41.5081 10.7707 40.8361 10.192C40.1828 9.59467 39.4174 9.296 38.5401 9.296C37.5321 9.296 36.7108 9.65067 36.0761 10.36C35.4414 11.0507 35.1241 11.984 35.1241 13.16C35.1241 14.336 35.4414 15.26 36.0761 15.932C36.7108 16.5853 37.5321 16.912 38.5401 16.912ZM46.5881 21V17.836L53.2521 9.8L52.9441 9.408H46.6441V5.544H59.1881V8.708L52.5241 16.744L52.8321 17.136H59.3561V21H46.5881ZM63.5522 21.392C61.9095 21.392 60.5655 20.9627 59.5202 20.104C58.4935 19.2267 57.9802 18.0133 57.9802 16.464C57.9802 15.3067 58.2882 14.3733 58.9042 13.664C59.5202 12.936 60.3695 12.404 61.4522 12.068C62.5349 11.732 63.7762 11.564 65.1762 11.564H67.6122C67.5935 10.8547 67.4162 10.3413 67.0802 10.024C66.7629 9.688 66.2402 9.52 65.5122 9.52C65.1575 9.52 64.6349 9.52933 63.9442 9.548C63.2535 9.56667 62.5255 9.59467 61.7602 9.632C60.9949 9.66933 60.2949 9.70667 59.6602 9.744V5.488C60.1082 5.45067 60.6402 5.41333 61.2562 5.376C61.8722 5.33867 62.5069 5.31067 63.1602 5.292C63.8322 5.27333 64.4482 5.264 65.0082 5.264C67.3975 5.264 69.2362 5.78667 70.5242 6.832C71.8309 7.87733 72.4842 9.47333 72.4842 11.62V21H68.4522V18.144C68.1162 19.1893 67.5375 19.992 66.7162 20.552C65.8949 21.112 64.8402 21.392 63.5522 21.392ZM65.1762 17.976C65.8295 17.976 66.3802 17.7893 66.8282 17.416C67.2949 17.024 67.5562 16.3147 67.6122 15.288V14.196H65.1762C64.4855 14.196 63.9535 14.3733 63.5802 14.728C63.2069 15.064 63.0202 15.5213 63.0202 16.1C63.0202 16.66 63.2069 17.1173 63.5802 17.472C63.9535 17.808 64.4855 17.976 65.1762 17.976ZM73.2292 21V5.544H77.2612V9.604C77.5599 8.07333 78.1479 6.93467 79.0252 6.188C79.9026 5.42267 81.0412 5.04 82.4412 5.04H82.6652C84.4199 5.04 85.7732 5.628 86.7252 6.804C87.6959 7.96133 88.1812 9.744 88.1812 12.152V21H83.0852V12.012C83.0852 11.3027 82.8706 10.724 82.4412 10.276C82.0306 9.80933 81.4612 9.576 80.7332 9.576C80.0052 9.576 79.4172 9.80933 78.9692 10.276C78.5399 10.724 78.3252 11.3213 78.3252 12.068V21H73.2292Z"
            fill="var(--secondary-color)"
          />
        </svg>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex-1">
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <details>
              <summary>Skills</summary>
              <ul className="p-2">
                <li>
                  <a>Frontend</a>
                </li>
                <li>
                  <a>Backend</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Header;
