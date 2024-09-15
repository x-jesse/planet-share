/**
 * This code was generated by Builder.io.
 */
import React from "react";

const LocationInput = ({ label }) => {
  return (
    <div className="flex gap-5 justify-between mt-3 w-full text-xl">
      <label htmlFor={`${label.toLowerCase().replace(/\s+/g, "-")}-input`}>
        {label}
      </label>
      <div className="flex gap-2 whitespace-nowrap">
        <input
          type="number"
          id={`${label.toLowerCase().replace(/\s+/g, "-")}-input`}
          className="flex shrink-0 rounded-2xl border border-white border-solid bg-white bg-opacity-30 h-[27px] w-[27px]"
          aria-label={`${label} in kilometers`}
        />
        <span>km</span>
      </div>
    </div>
  );
};

export default LocationInput;
