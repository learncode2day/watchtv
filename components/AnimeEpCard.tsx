
import React from "react";
import Link from "next/link";
import { Card, CardHeader, CardBody, Image, CardFooter, Button } from "@nextui-org/react";
import { watchAnime } from "@/utils/Fetcher";
const TMDB_IMAGE_ENDPOINT = "https://image.tmdb.org/t/p/original";

export default function AnimeEpisodeCard({
  result,
  idx,
  img,
}: any) {
  let watchLink = `/anime/${idx}/season/stream/${result.id}`;
  return (
    <div>
      <Link href={watchLink}>
      <Card
      isFooterBlurred
      radius="lg"
      className="border-none w-fit"
    >
      <Image
        alt="episode image"
        className="object-cover"
        height={200}
        src={img}
        width={200}
      />
      <CardFooter className="before:bg-white/10 border-white/20 border-1 overflow-hidden p-3 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 justify-center">
        <p className="text-tiny text-white/80">Episode {result.number}</p>
        
      </CardFooter>
    </Card>
      </Link>
      {/* {
            
      } */}
    </div>
  );
}
