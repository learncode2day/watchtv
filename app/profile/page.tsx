import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

export default function Profile() {
  return (
    <div className="p-10">
      <div className="flex  m-10">
        <Card isFooterBlurred radius="lg" className="border-none">
          <Image
            alt="Woman listing to music"
            className="object-cover"
            height={200}
            src="/profile.jpg"
            width={200}
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80">Aryadev</p>
            <Link href={"https://github.com/Aryadev19"}>
              <Button
                className="text-tiny text-white bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                <FaGithub size="20" />
              </Button>{" "}
            </Link>
          </CardFooter>
        </Card>
      </div>
      <h2 className="text-2xl font-semibold m-5 pl-5">About:</h2>
      <div className="m-5 pl-5 text-lg">
        Hi My Name is Aryadev! I got bored and made this website. Currently it's
        unfinished but I am planning to make it fully working. You can watch
        movies and tv series for free. I don't support pirating and I do not
        host any content on my website all the things provided were hosted by
        third party providers. So sue them. Also you can search for movies and
        series it has MultiSearch support.
      </div>
      <div className="text-center m-5 p-5 font-semibold text-xl">
        {" "}
        Made with ❤️ By Aryadev!
      </div>
    </div>
  );
}
