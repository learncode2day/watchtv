"use client"
import React, { useState } from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Input,
  Avatar,
} from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Nav() {
  const router = useRouter();
  const [value,setValue] = useState("")

  const handleInputChange = (event:any) => {
    setValue(event.target.value);
  }
  const handleSubmit = (event:any) => {
    event.preventDefault();
    router.push(`/search/${encodeURIComponent(value)}`)
  }
  return (
    <Navbar maxWidth="full">
      <NavbarContent as="div" className="items-center" justify="start">
        <form onSubmit={handleSubmit}>
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[30rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Search"
          size="sm"
          endContent={<SearchIcon size={18} />}
          type="search"
          onChange={handleInputChange}
        /></form>
      </NavbarContent>
      <NavbarContent as="div" className="items-center" justify="end">
        <Link href={"/profile"}>
          <Avatar
            isBordered
            as="button"
            className="transition-transform mr-2"
            color="primary"
            name="Jason Hughes"
            size="sm"
            src="/profile.jpg"
          />{" "}
        </Link>
      </NavbarContent>
    </Navbar>
  );
}


