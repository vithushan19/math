import React from "react";

const PostWithTitleBodyAndFooterSpread = ({ title, description, footer }) => {
  return (
    <div className="capture w-[1080px] h-[1080px] flex flex-col justify-between p-[64px] bg-brandPrimary text-white">
      <h1 contentEditable className="text-[72px] font-bold">
        Mobile Development
      </h1>
      <p contentEditable className="text-[36px]">
        Learn how to build mobile applications for iPhones and Android devices.
        Expanding your skills beyond websites will double the number of jobs you
        can apply to. This is an advanced skillset that will set you apart in
        the job market. Employers will be drooling over you.
      </p>
      <p className="text-[36px] text-end" contentEditable>
        Stage 4
      </p>
    </div>
  );
};

export default PostWithTitleBodyAndFooterSpread;
