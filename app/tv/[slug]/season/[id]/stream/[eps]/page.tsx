"use client";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import Tips from "@/components/Tips";
import { FaAngleLeft } from "react-icons/fa6";
import Link from "next/link";
import Nav from "@/components/Nav";
export default function StreamMovies({ params }: { params: { slug: string, id:string,eps:string } }) {
  const blackvid = `https://blackvid.space/embed?tmdb=${params.slug}&season=${params.id}&episode=${params.eps}`;
  const vidsrc = `https://vidsrc.to/embed/tv/${params.slug}/${params.id}/${params.eps}`;
  const superEmbed = ` https://multiembed.mov/directstream.php?video_id=${params.slug}&tmdb=1&s=${params.id}&e=${params.eps}`;
  const [streamLink, setStreamLink] = useState(vidsrc);
  let isActive = (provider: any) => streamLink.includes(`${provider}`);
  return (
    <div>
      <Nav />
      <div className="absoulte left-2 m-5">
        <Link href={`/tv/${params.slug}/season/${params.id}`}>
          <Button size="sm" variant="flat">
            <FaAngleLeft size={16} /> Back
          </Button>
        </Link>
      </div>
      <div className="flex flex-col m-3 justify-around md:flex-row">
        <div className="mt-20">
          <iframe
            src={streamLink}
            className="border-white border-2 md:w-[40rem] md:h-[24rem] mx-auto"
            allowFullScreen
          ></iframe>
          <h1 className="mt-2 p-2 font-medium text-teal-300">
            Choose a Provider!
            {params.slug} and
            {params.id} and
            {params.eps}
          </h1>
          <div className="flex gap-2 ">
            <Button
              onPress={() => {
                setStreamLink(vidsrc);
              }}
              className="w-fit"
              variant="flat"
              color={isActive("vidsrc") ? "success" : "default"}
            >
              VidSrc
            </Button>
            <Button
              onPress={() => {
                setStreamLink(superEmbed);
              }}
              className="w-fit"
              variant="flat"
              color={isActive("multiembed") ? "success" : "default"}
            >
              SuperEmbed
            </Button>
            <Button
              onPress={() => {
                setStreamLink(blackvid);
              }}
              className="w-fit"
              variant="flat"
              color={isActive("blackvid") ? "success" : "default"}
            >
              Blackvid
            </Button>
          </div>
        </div>
        <div className=" mt-5 md:mt-32 w-fit">
          <Tips />
        </div>
      </div>
    </div>
  );
}
