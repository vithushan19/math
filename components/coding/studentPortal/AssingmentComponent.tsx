import React, { useState } from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import HintRow from "./HintRow";

export type Hint = {
  description: string;
  icon?: string;
  link?: string;
};

export type AssignmentComponentData =
  | {
      component: "title";
      text: string;
    }
  | {
      component: "prompt";
      text: string;
    }
  | {
      component: "hint-list";
      hintRow: Hint[];
    }
  | {
      component: "output";
      screenshot: string;
    }
  | {
      component: "submission";
      codeSandboxTitle: string;
      link: string;
      assignmentInputBox: HTMLInputElement;
    }
  | {
      component: "loom-video";
      videoId: string;
    }
  | {
      component: "custom";
      children: React.ReactNode;
    }
  | {
      component: "code-snippet";
      text?: string;
      code: string;
    };

export type AssignmentComponentProps = {
  data: AssignmentComponentData;
};
// create input box component similar to hint row and call it into data so that I can manipulate it in this component.
export default function AssignmentComponent({
  data,
}: AssignmentComponentProps) {
  //   console.log(data.component === "prompt");

  //   console.log(data.component === "code-snippet");

  //   console.log(data.component === "hint-list");
  //   return (
  //     <div>
  //       <p>{data.component === "title"}</p>
  //     </div>
  //   );
  if (data.component === "title") {
    return <h1 className="text-5xl font-bold">{data.text}</h1>;
  }
  //   else if (data.component === "prompt") {
  //     return <p>{data.text}</p>;
  //   } else if (data.component === "code-snippet") {
  //     return (
  //       <div className="mx-4 space-y-4">
  //         {data.text && <p>{data.text}</p>}
  //         <pre className="p-4 border-2 bg-slate-100 border-black-transparent rounded-xl">
  //           <Sandpack template="react-ts" files={{ "App.tsx": data.code }} />
  //         </pre>
  //       </div>
  //     );
  //   } else if (data.component === "hint-list") {
  //     return (
  //       <>
  //         <h1 className="font-bold">Hints</h1>
  //         <div className="flex flex-col gap-8">
  //           {data.hintRow.map((it, index) => (
  //             <HintRow
  //               description={it.description}
  //               disabled={false}
  //               icon={it.icon}
  //               link={it.link}
  //             />
  //           ))}
  //         </div>
  //       </>
  //     );
  //   } else if (data.component === "submission") {
  //     return (
  //       <>
  //         <h1 className="font-bold">{data.codeSandboxTitle}</h1>
  //         <div className="aspect-w-16 aspect-h-9">
  //           <iframe className="rounded-xl" src={data.link} />
  //         </div>
  //       </>
  //     );
  //   }
  //   if (data.component === "loom-video") {
  //     return (
  //       <div className="pb-56 mb-8 h-96">
  //         <iframe
  //           src={`https://www.loom.com/embed/${data.videoId}`}
  //           frameBorder="0"
  //           webkit-allowfullscreen
  //           moz-allowfullscreen
  //           allowFullScreen
  //           className="w-full h-96"
  //         ></iframe>
  //       </div>
  //     );
  //   }
}

//   const [submissionInput, setSubmissionInput] =
//     useState<AssignmentComponentData[]>();
