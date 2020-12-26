import React, { useState } from "react";
import { useRouter } from "next/router";
import apiData from "../api/data.json";

const Quiz = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [index, setIndex] = useState(0);
  const data = apiData["practice"][slug];

  const onClick = (e) => {
    if (index >= data.length - 1) {
      e.preventDefault();
      router.back();
    } else {
      setIndex(index + 1);
    }
  };

  if (data === undefined) {
    return (
      <div className="flex justify-center p-16 bg-purple-500 text-white text-center text-xl">
        Coming Soon
      </div>
    );
  }

  return (
    <div>
      <div className="bg-pink-500 p-4 m-4">Quiz {47 + index} / 50</div>
      <div className="p-4 m-4 bg-purple-500">{data[index].question}</div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div onClick={onClick} className="p-4 m-4 bg-red-500">
          {data[index].choices[0].text}
        </div>
        <div onClick={onClick} className="p-4 m-4 bg-green-500">
          {data[index].choices[1].text}
        </div>
        <div onClick={onClick} className="p-4 m-4 bg-blue-500">
          {data[index].choices[2].text}
        </div>
        <div onClick={onClick} className="p-4 m-4 bg-yellow-500">
          {data[index].choices[3].text}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
