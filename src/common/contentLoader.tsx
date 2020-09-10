import React from "react";

function ContentLoader() {
  return (
    <svg
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 476 124"
    >
      <rect
        width="100%"
        height="100%"
        fill='url("#fill")'
        clipPath="url(#clip-path)"
      ></rect>
      <defs>
        <clipPath id="clip-path">
          <rect width="400" height="16" x="48" y="36" rx="3" ry="3"></rect>
          <rect width="200" height="16" x="48" y="68" rx="3" ry="3"></rect>
          <rect width="120" height="8" x="48" y="100" rx="3" ry="3"></rect>
          <rect width="120" height="8" x="328" y="100" rx="3" ry="3"></rect>
          {/* <circle cx="41" cy="55" r="20"></circle> */}
        </clipPath>
        <linearGradient id="fill">
          <stop offset="0.6" stopColor="#f3f3f3">
            <animate
              attributeName="offset"
              dur="2s"
              keyTimes="0; 0.25; 1"
              repeatCount="indefinite"
              values="-2; -2; 1"
            ></animate>
          </stop>
          <stop offset="1.6" stopColor="#ecebeb">
            <animate
              attributeName="offset"
              dur="2s"
              keyTimes="0; 0.25; 1"
              repeatCount="indefinite"
              values="-1; -1; 2"
            ></animate>
          </stop>
          <stop offset="2.6" stopColor="#f3f3f3">
            <animate
              attributeName="offset"
              dur="2s"
              keyTimes="0; 0.25; 1"
              repeatCount="indefinite"
              values="0; 0; 3"
            ></animate>
          </stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default ContentLoader;
