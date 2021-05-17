import Link from "next/link";
import React from "react";

type DiagnosticEvidenceProps = {
  topic: string;
};

const DiagnosticEvidence = ({ topic }: DiagnosticEvidenceProps) => {
  return (
    <>
      <p className="mb-12"> {topic} </p>
      <div className="flex justify-between w-1/4 border-b border-black p-2">
        <span> I can... </span>
        <span className="pl-16"> Grade Level </span>
      </div>
      <div className="flex justify-between flex-row w-1/4 p-2">
        <div>Add one digit numbers</div>
        <div>Got It</div>
      </div>
      <Link href="/diagnostic/data">
        <button className="mt-4 bg-blue-500 rounded p-3 text-white text-sm">
          Go To Data
        </button>
      </Link>
    </>
  );
};

export default DiagnosticEvidence;
