"use client";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
export default function TvPlayer({ tvId, seasonId, epsId, tvName }: any) {
  const notify = () =>
    toast("Changing The Server.", {
      icon: "👍",
      style: {
        background: "transparent",
        backdropFilter: "blur(20px)",
      },
    });
  const blackvid = `https://blackvid.space/embed?tmdb=${tvId}&season=${seasonId}&episode=${epsId}`;
  const vidsrc = `https://vidsrc.to/embed/tv/${tvId}/${seasonId}/${epsId}`;
  const vidplay = `https://vidsrc.xyz/embed/tv?tmdb=${tvId}&season=${seasonId}&episode=${epsId}`;
  const superEmbed = ` https://multiembed.mov/directstream.php?video_id=${tvId}&tmdb=1&s=${seasonId}&e=${epsId}`;
  const tvembed = `https://tvembed.cc/tv/${tvId}/${seasonId}/${epsId}`;
  const moviesapi = `https://moviesapi.club/tv/${tvId}-${seasonId}-${epsId}`;
  const goSeason = seasonId < 9 ? `0${seasonId}` : `${seasonId}`;
  const goEps = epsId < 9 ? `0${epsId}` : `${epsId}`;
  const gomovies = `https://playerhost.net/show/${tvName}/${goSeason}-${goEps}`;
  const smashystream = `https://embed.smashystream.com/playere.php?tmdb=${tvId}&season=${seasonId}&episode=${epsId}`;
  const remotestream = `https://remotestre.am/e/?tmdb=${tvId}&s=${seasonId}&e=${epsId}`;
  const twoembed = `https://www.2embed.cc/embedtv/${tvId}&s=${seasonId}&e=${epsId}`;
  const susflix = `https://susflix.tv/api/embed/tv?id=${tvId}&s=${seasonId}&e=${epsId}`;
  const justbinge = `https://justbinge.lol/embed/tv/${tvId}/${seasonId}/${epsId}`;
  const [streamLink, setStreamLink] = useState(vidsrc);
  let isActive = (provider: any) => streamLink.includes(`${provider}`);
  return (
    <div className="flex flex-col m-2 justify-around lg:flex-row">
      <div>
        <Toaster />
        <iframe
          src={streamLink}
          className="border-slate-700 border-1 w-[21rem] h-[12rem] md:w-[60rem] md:h-[34rem] mx-auto"
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
              setStreamLink(moviesapi);
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
              setStreamLink(justbinge);
              notify();
            }}
            className="w-fit"
            variant="flat"
            color={isActive("justbinge") ? "success" : "default"}
            size="sm"
          >
            JustBinge
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
            GoMovies
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
