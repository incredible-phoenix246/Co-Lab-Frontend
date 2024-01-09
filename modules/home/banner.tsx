"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { SearchNormal1 } from "iconsax-react";
import CustomDropdown from "@/components/ui/customDropDown";
import { Input } from "@/components/ui/Input";

const Banner = () => {
  // const handleCustomDropdownChange = (option: string) => {
  //     // setSelectedOption(option);
  //     if (option === 'Nigeria' || option === 'Ghana' || option === 'Cameroon') {
  //       // return handleFilters('Country', option);
  //     }

  return (
    <div className="flex flex-col items-center justify-between">
      <div className="flex items-center w-[670px] h-[439px]  pl-[100px] flex-col">
        <h2 className="text-[#235554] font-semibold text-[50px] leading-[73.2px]">
          A market-place of timeless, easy-to-use digital templates
        </h2>
        <span className="text-[20px] font-normal leading-[28px]">
          Browse a wide range of templates, sign up and start downloading for
          free
        </span>
        <div className="flex justify-between gap-x-3">
          <Input
            className="w-[380px] px-[24px] py-[12px] h-[56px]"
            leftIcon={<SearchNormal1 size="32" color="#9B9B9B" />}
          />
          <CustomDropdown
            options={["Lagos, Nigeria", "Accra, Ghana", "Nairobi, Kenya"]}
            selectedValue={""}
            placeholder="Location"
            onChange={function (option: string): void {
              throw new Error("Function not implemented.");
            }} // onChange={handleCustomDropdownChange}
            className="w-[168px] h-[56px] ml-3"
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Banner;
