import React from "react";

const CoverPostForCarouselWithBrand = ({ title }) => {
  return (
    <div className="capture w-[1080px] h-[1080px] flex flex-col justify-between p-[64px] bg-brandPrimary text-white">
      <img
        src="/images/sales/marketing/skillify_white_logo.svg"
        className="w-[192px]"
      />
      <h1 contentEditable className="text-[144px] text-center font-bold">
        {title}
      </h1>
      <div className="flex items-center gap-[40px] justify-end ">
        <p className="text-[18px] text-end ">Swipe to learn more</p>
        <div>
          <img
            src="/images/sales/marketing/white_arrow.svg"
            className="w-[192px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CoverPostForCarouselWithBrand;
