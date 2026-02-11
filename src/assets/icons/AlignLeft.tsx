import React from "react";

type Props = React.SVGProps<SVGSVGElement>;

export const AlignLeftIcon = (props: Props) => (
  <svg
    viewBox="0 0 16 16"
    width="16px"
    height="16px"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0)">
      <path d="M10.9587 8.9964C11.5089 8.99641 11.9548 9.44229 11.9548 9.99249V10.9886C11.9548 11.5388 11.5089 11.9847 10.9587 11.9847H5.97729C5.42715 11.9846 4.9812 11.5387 4.9812 10.9886V9.99249C4.9812 9.44233 5.42715 8.99648 5.97729 8.9964H10.9587ZM14.9441 4.01495C15.4941 4.01515 15.9401 4.46103 15.9402 5.01105V6.00714C15.9402 6.55723 15.4941 7.00303 14.9441 7.00323H5.97729C5.42715 7.00315 4.9812 6.5573 4.9812 6.00714V5.01105C4.98129 4.46096 5.42721 4.01504 5.97729 4.01495H14.9441Z" />
      <rect
        opacity="0.3"
        y="14.9738"
        width="13.9475"
        height="1.9925"
        rx="0.996252"
        transform="rotate(-90 0 14.9738)"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="15.94" height="15.94" transform="translate(0 0.0299683)" />
      </clipPath>
    </defs>
  </svg>
);
