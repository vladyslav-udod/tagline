import React from "react";

type Props = React.SVGProps<SVGSVGElement>;

export const ArrowLeftIcon = (props: Props) => (
  <svg
    viewBox="0 0 16 16"
    width="16px"
    height="16px"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9.43428 3.45652C9.72605 3.16494 10.1992 3.16491 10.4909 3.45652C10.7825 3.74828 10.7825 4.22141 10.4909 4.51317L7.03389 7.96922L10.4909 11.4263C10.7826 11.7179 10.7824 12.1911 10.4909 12.4829C10.1991 12.7747 9.72608 12.7747 9.43428 12.4829L5.44893 8.49852C5.15731 8.20677 5.15734 7.73365 5.44893 7.44188L9.43428 3.45652Z" />
  </svg>
);
