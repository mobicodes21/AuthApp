"use client";

import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  id: string;
};

export const Input: React.FC<Props> = ({ label, error, id, ...props }) => (
  <div className="w-full mb-4">
    <label
      htmlFor={id}
      className="block text-sm font-semibold mb-2 text-gray-700"
    >
      {label}
    </label>
    <input
      id={id}
      {...props}
      className={`
        w-full px-4 py-3
        rounded-xl
        text-gray-900 placeholder-gray-400
        border ${error ? "border-red-500" : "border-gray-300"}
        shadow-sm
        focus:outline-none focus:ring-2 focus:ring-offset-1 
        ${
          error
            ? "focus:ring-red-400 focus:border-red-400"
            : "focus:ring-[#D97CFF] focus:border-[#C480FF]"
        }
        transition-all duration-200
        bg-white/90 backdrop-blur-sm
     `}
      aria-invalid={!!error}
      aria-describedby={error ? `${id}-error` : undefined}
    />
    {error && (
      <p
        id={`${id}-error`}
        role="alert"
        className="text-sm mt-1 text-red-600 font-medium"
      >
        {error}
      </p>
    )}
  </div>
);
