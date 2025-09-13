"use client";

import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
};

export const Button: React.FC<Props> = ({
  children,
  isLoading,
  disabled,
  ...props
}) => {
  const disabledNow = disabled || isLoading;

  return (
    <button
      {...props}
      disabled={disabledNow}
      className={`
        w-full flex items-center justify-center
        px-5 py-3
        my-3
        rounded-xl
        text-white font-bold text-lg
        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B06CFF]
        transition-all duration-300
        ${
          disabledNow
            ? "bg-gray-400 cursor-not-allowed shadow-none"
            : "bg-gradient-to-r from-[#C480FF] to-[#B06CFF] hover:from-[#D397FF] hover:to-[#9B70FF] active:scale-95 shadow-lg hover:shadow-xl"
        }
      `}
    >
      {isLoading ? "در حال ورود..." : children}
    </button>
  );
};
