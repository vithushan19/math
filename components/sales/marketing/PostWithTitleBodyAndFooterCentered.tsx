import React from "react";

const PostWithTitleBodyAndFooterCentered = ({ title, description, footer }) => {
  return (
    <div className="capture w-[1080px] h-[1080px] flex flex-col justify-between p-[64px] bg-brandPrimary text-white">
      <div />
      <div className="flex flex-col">
        <h1 contentEditable className="text-[72px] font-bold mb-[20px]">
          {title}
        </h1>
        <p contentEditable className="text-[36px]">
          {description}
        </p>
      </div>
      <p className="text-[36px] text-end " contentEditable>
        {footer}
      </p>
    </div>
  );
};

export default PostWithTitleBodyAndFooterCentered;
