import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M216,64H125.22A40.2,40.2,0,0,0,120,48a40,40,0,0,0-76.48,14.65A40,40,0,0,0,40,120a39.9,39.9,0,0,0,14.63-3.51L61.79,165.3a24,24,0,0,0,22.84,18.7H152a24,24,0,0,0,23.63-20.4l13.1-72.06A8,8,0,0,0,181,84H216a8,8,0,0,0,0-16ZM152,168H84.63a8,8,0,0,1-7.61-6.23L59.61,118H177Z"
      />
    </svg>
  );
}
