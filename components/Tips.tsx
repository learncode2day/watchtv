import React from "react";
import {Snippet} from "@nextui-org/react";
export default function Tips() {
  return (
   <Snippet symbol={"#"} hideCopyButton={true} variant="flat" color="secondary" className="p-8">
       <span>Please Use An <span className="text-red-500 font-semibold">AD-BLOCKER</span> <br /> For Best Experience</span>
       <span>If you are on Android <br /> use <span className="text-orange-400 font-semibold">Brave Browser!</span></span>
       <span>Change to a different Server <br /> If Current doesn't work</span>
    </Snippet>
  );
}
