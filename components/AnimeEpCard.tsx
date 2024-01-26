
import React from "react";
import Link from "next/link";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { watchAnime } from "@/utils/Fetcher";
const TMDB_IMAGE_ENDPOINT = "https://image.tmdb.org/t/p/original";

export default function AnimeEpisodeCard({
  result,
  idx,
}: any) {
  let watchLink = `/anime/${idx}/season/stream/${result.id}`;
  return (
    <div>
      <Link href={watchLink}>
        <Card className="py-4 m-2 sm:m-6">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">
              Episode {result.number}
            </p>
            <small className="text-default-500">24 Mins</small>
            <h4 className="font-medium text-medium">{result.title}</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={
                result.image
                  ? result.image
                  : "/epNotFound.jpg"
              }
              width={270}
            />
          </CardBody>
          <div className="absolute top-[40%] left-[300px] text-sm text-gray-500 hidden md:block">
            <h2>Synopsis</h2>
            <p>{result.description}</p>
           
          </div>
        </Card>
      </Link>
    </div>
  );
}
