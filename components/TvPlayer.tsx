"use client";
import { Button } from "@nextui-org/react";
import { useState } from "react";

export default function TvPlayer({ tvId, seasonId, epsId, tvName }: any) {
  const blackvid = `https://blackvid.space/embed?tmdb=${tvId}&season=${seasonId}&episode=${epsId}`;
  const vidsrc = `https://vidsrc.to/embed/tv/${tvId}/${seasonId}/${epsId}`;
  const vidplay = `https://vidsrc.xyz/embed/tv?tmdb=${tvId}&season=${seasonId}&episode=${epsId}`;
  const superEmbed = ` https://multiembed.mov/directstream.php?video_id=${tvId}&tmdb=1&s=${seasonId}&e=${epsId}`;
  const tvembed = `https://tvembed.cc/tv/${tvId}/${seasonId}/${epsId}`;
  const moviesapi = `https://moviesapi.club/tv/${tvId}-${seasonId}-${epsId}`;
  const goSeason = seasonId < 9 ? `0${seasonId}` : `${seasonId}`;
  const goEps = epsId < 9 ? `0${epsId}` : `${epsId}`;
  const gomovies = `https://playerhost.net/show/${tvName}/${goSeason}-${goEps}`;
  const smashystream = `https://embed.smashystream.com/playere.php?tmdb=${tvId}&season=${seasonId}&episode=${epsId}`
  const [streamLink, setStreamLink] = useState(vidsrc);
  let isActive = (provider: any) => streamLink.includes(`${provider}`);
  return (
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
              setStreamLink(moviesapi);
            }}
            className="w-fit"
            variant="flat"
            color={isActive("moviesapi") ? "success" : "default"}
          >
            MoviesApi
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
              setStreamLink(gomovies);
            }}
            className="w-fit"
            variant="flat"
            color={isActive("playerhost") ? "success" : "default"}
          >
            GoMovies
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
          <Button
            onPress={() => {
              setStreamLink(smashystream);
            }}
            className="w-fit"
            variant="flat"
            color={isActive("smashystream") ? "success" : "default"}
          >
            SmashyStream
          </Button>
        </div>
      </div>
    </div>
  );
}
