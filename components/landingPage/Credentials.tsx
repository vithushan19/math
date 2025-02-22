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
    "/images/about/samsung.jpg",
    "/images/about/roblox.jpg",
    "/images/about/td.png",
    "/images/about/lumosity.png",
    "/images/about/wordsWithFriends.png",
    "/images/about/peloton.png",
    "/images/about/amd.png",
    "/images/about/faire.png",
    "/images/about/sap.png",
    "/images/about/box.jpg",
    "/images/about/phantom.png",
  ];
  return (
    <div className="flex flex-col items-center justify-center w-full p-8 bg-slate-200 sm:p-16">
      <p className="mb-4 text-3xl font-bold text-center">
        Our expert instructors have worked at
      </p>
      <div className="grid justify-between w-full grid-cols-2 max-w-7xl sm:flex sm:flex-wrap ">
        {images.map((image) => (
          <div className="flex justify-center p-4 m-4 bg-white shadow-lg w-36">
            <img
              src={image}
              className="object-contain h-24 transition-all transform hover:scale-110"
            />
          </div>
        ))}
      </div>
      {/* <p className="mt-16 text-3xl font-bold">{headerText}</p> */}
    </div>
  );
}
