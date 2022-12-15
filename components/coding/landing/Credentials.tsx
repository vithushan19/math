import React from "react";

type CredentialsProps = {
  headerText: string;
};

export default function Credentials({ headerText }: CredentialsProps) {
  const images = [
    "/images/about/spotify.png",
    "/images/about/meta.png",
    "/images/about/duolingo.png",
    "/images/about/shopify.png",
    "/images/about/nvidia.png",
    "/images/about/sap.png",
    "/images/about/td.png",
    "/images/about/lumosity.png",
    "/images/about/wordsWithFriends.png",
    "/images/about/peloton.png",
    "/images/about/amd.png",
    "/images/about/box.jpg",
    "/images/about/virgin.jpg",
  ];
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white sm:p-16">
      <p className="mb-4 text-3xl font-bold ">
        Our expert coaches have worked at
      </p>
      <div className="flex flex-wrap justify-between w-full border-t-8 border-charmander">
        {images.map((image) => (
          <div className="flex justify-center p-4 m-4 bg-white shadow-lg">
            <img
              src={image}
              className="h-24 transition-all transform hover:scale-110"
            />
          </div>
        ))}
      </div>
      {/* <p className="mt-16 text-3xl font-bold">{headerText}</p> */}
    </div>
  );
}
