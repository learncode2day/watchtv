"use client";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import Tips from "@/components/Tips";
import { FaAngleLeft } from "react-icons/fa6";
import Link from "next/link";
import Nav from "@/components/Nav";
export default function StreamMovies({ params }: { params: { slug: string } }) {
  const blackvid = `https://blackvid.space/embed?tmdb=${params.slug}`;
  const vidsrc = `https://vidsrc.to/embed/movie/${params.slug}/`;
  const superEmbed = ` https://multiembed.mov/directstream.php?video_id=${params.slug}&tmdb=1`;
  const vidplay = `https://vidsrc.xyz/embed/movie?tmdb=${params.slug}`;
  const tvembed = `https://tvembed.cc/movie/${params.slug}`;
  const [streamLink, setStreamLink] = useState(vidsrc);
  let isActive = (provider: any) => streamLink.includes(`${provider}`);
  return (
    <div>
      <Nav />
      <div className="ml-6">
        <Link href={`/movie/${params.slug}`}>
          <Button size="sm" variant="flat">
            <FaAngleLeft size={16} /> Back
          </Button>
        </Link>
      </div>
      <div className="flex flex-col m-3 justify-around lg:flex-row">
        <div>
          <iframe
            src={streamLink}
            className="border-white border-2 w-[22rem] h-[12rem] md:w-[60rem] md:h-[34rem] mx-auto"
            
            allowFullScreen
            
          ></iframe>
          <h1 className="mt-2 p-2 font-medium text-teal-300">
            Choose a Provider!
          </h1>
          <div className="flex gap-2 flex-wrap">
            <Button
              onPress={() => {
                setStreamLink(vidsrc);
              }}
              className="w-fit"
              variant="flat"
              color={isActive("vidsrc.to") ? "success" : "default"}
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
                setStreamLink(vidplay);
              }}
              className="w-fit"
              variant="flat"
              color={isActive("vidsrc.xyz") ? "success" : "default"}
            >
              VidPlay
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
            <Button
              onPress={() => {
                setStreamLink(tvembed);
              }}
              className="w-fit"
              variant="flat"
              color={isActive("tvembed") ? "success" : "default"}
            >
              TvEmbed
            </Button>
          </div>
        </div>
      </div>
      <div className="flex justify-center m-2">
        <Tips />
      </div>
    </div>
  );
}
