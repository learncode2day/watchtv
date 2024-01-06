import React from "react";
import {Card, CardBody} from "@nextui-org/react";

export default function Tips() {
  return (
    <Card className=" border-2 border-teal-400">
      <CardBody>
        <p className="p-2">Please Use An <span className="text-red-500 font-semibold">AD-BLOCKER</span> For Best Experience</p>
        <p className="p-2">If you are on Android use <span className="text-orange-400 font-semibold">Brave Browser!</span></p>
        <p className="p-2">Change to a different Server if Current one doesn't work</p>
      </CardBody>
    </Card>
  );
}
