"use client";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function MoviePlayer({ movieId, movieName }: any) {
  const notify = () =>
    toast("Changing The Server.", {
      icon: "👍",
      style: {
        background: "transparent",
        backdropFilter: "blur(20px)",
      },
    });
  const blackvid = `https://blackvid.space/embed?tmdb=${movieId}`;
  const vidsrc = `https://vidsrc.to/embed/movie/${movieId}`;
  const superEmbed = ` https://multiembed.mov/directstream.php?video_id=${movieId}&tmdb=1`;
  const vidplay = `https://vidsrc.xyz/embed/movie?tmdb=${movieId}`;
  const tvembed = `https://tvembed.cc/movie/${movieId}`;
  const moviesApi = `https://moviesapi.club/movie/${movieId}`;
  const gomovies = `https://playerhost.net/movie/${movieName}`;
  const smashystream = `https://embed.smashystream.com/playere.php?tmdb=${movieId}`;
  const remotestream = `https://remotestre.am/e/?tmdb=${movieId}`;
  const twoembed = `https://www.2embed.cc/embed/${movieId}`;
  const susflix = `https://susflix.tv/api/embed/movie?id=${movieId}`;

  const [streamLink, setStreamLink] = useState(vidsrc);
  let isActive = (provider: any) => streamLink.includes(`${provider}`);
  return (
    <div className="flex flex-col m-2 justify-around lg:flex-row">
      <div>
        <Toaster />
        <iframe
          src={streamLink}
          className="border-slate-700 border-1 w-[21rem] h-[14rem] md:w-[60rem] md:h-[34rem] mx-auto"
          allowFullScreen
        ></iframe>
        <h1 className="mt-2 p-2 font-medium text-sm text-teal-300">
          If current server doesn't work, please try other servers
        </h1>
        <div className="flex gap-2 flex-wrap">
          <Button
            onPress={() => {
              setStreamLink(vidsrc);
              notify();
            }}
            className="w-fit"
            variant="flat"
            color={isActive("vidsrc.to") ? "success" : "default"}
            size="sm"
          >
            VidSrc
          </Button>
          <Button
            onPress={() => {
              setStreamLink(moviesApi);
              notify();
            }}
            className="w-fit"
            variant="flat"
            color={isActive("moviesapi") ? "success" : "default"}
            size="sm"
          >
            MoviesApi
          </Button>

          <Button
            onPress={() => {
              setStreamLink(superEmbed);
              notify();
            }}
            className="w-fit"
            variant="flat"
            color={isActive("multiembed") ? "success" : "default"}
            size="sm"
          >
            SuperEmbed
          </Button>
          <Button
            onPress={() => {
              setStreamLink(remotestream);
              notify();
            }}
            className="w-fit"
            variant="flat"
            color={isActive("remotestre") ? "success" : "default"}
            size="sm"
          >
            RemoteStream
          </Button>
          <Button
            onPress={() => {
              setStreamLink(vidplay);
              notify();
            }}
            className="w-fit"
            variant="flat"
            color={isActive("vidsrc.xyz") ? "success" : "default"}
            size="sm"
          >
            VidPlay
          </Button>
          <Button
            onPress={() => {
              setStreamLink(blackvid);
              notify();
            }}
            className="w-fit"
            variant="flat"
            color={isActive("blackvid") ? "success" : "default"}
            size="sm"
          >
            Blackvid
          </Button>
          <Button
            onPress={() => {
              setStreamLink(susflix);
              notify();
            }}
            className="w-fit"
            variant="flat"
            color={isActive("susflix") ? "success" : "default"}
            size="sm"
          >
            FebBox
          </Button>
          <Button
            onPress={() => {
              setStreamLink(gomovies);
              notify();
            }}
            className="w-fit"
            variant="flat"
            color={isActive("playerhost") ? "success" : "default"}
            size="sm"
          >
            Gomovies
          </Button>
          <Button
            onPress={() => {
              setStreamLink(tvembed);
              notify();
            }}
            className="w-fit"
            variant="flat"
            color={isActive("tvembed") ? "success" : "default"}
            size="sm"
          >
            TvEmbed
          </Button>
          <Button
            onPress={() => {
              setStreamLink(twoembed);
              notify();
            }}
            className="w-fit"
            variant="flat"
            color={isActive("2embed") ? "success" : "default"}
            size="sm"
          >
            2Embed
          </Button>
          <Button
            onPress={() => {
              setStreamLink(smashystream);
              notify();
            }}
            className="w-fit"
            variant="flat"
            color={isActive("smashystream") ? "success" : "default"}
            size="sm"
          >
            SmashyStream
          </Button>
        </div>
      </div>
    </div>
  );
}
