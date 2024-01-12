import React from "react";
import { Snippet } from "@nextui-org/react";
export default function Tips() {
  return (
    <Snippet
      symbol={"#"}
      hideCopyButton={true}
      variant="flat"
      color="secondary"
      className="p-8"
    >
      <span>
        Please Use An{" "}
        <span className="text-red-500 font-semibold">AD-BLOCKER</span>{" "}
        <br className="block sm:hidden" /> For Best Experience
      </span>
      <span>
        Change to a different Provier <br className="block sm:hidden" /> If
        Current doesn't work
      </span>
      <span>
        Try changing servers provied
        <br className="block sm:hidden" /> within the current player also
      </span>
      <span>
        For example <span className="text-indigo-500 font-semibold">echo</span>{" "}
        server in
        <br className="block sm:hidden" />{" "}
        <span className="text-indigo-500 font-semibold">TvEmbed</span> doesn't
        work, try
        <br className="block sm:hidden" /> changing it to something else
      </span>
    </Snippet>
  );
}
