import { Button, Code } from "@nextui-org/react";
import Tips from "@/components/Tips";
import { FaAngleLeft } from "react-icons/fa6";
import Link from "next/link";
import Nav from "@/components/Nav";

import { watchAnime } from "@/utils/Fetcher";
import AnimePlayer from "@/components/AnimePlayer";
export default async function StreamMovies({
  params,
}: {
  params: { slug: string; id: string };
}) {
  const stream = await watchAnime(params.id);
  const watchLink = stream.headers.Referer;
  return (
    <div>
      <Nav />
      <div className="ml-6">
        <Link href={`/anime/${params.slug}/season`}>
          <Button size="sm" variant="flat">
            <FaAngleLeft size={16} /> Back
          </Button>
        </Link>
      </div>

      <AnimePlayer animeLink={watchLink} />

      <div className="flex justify-center m-2">
        <Tips />
      </div>
    </div>
  );
}
