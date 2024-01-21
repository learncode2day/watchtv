
import InfoCard from "@/components/InfoCard";
import Nav from "@/components/Nav";
import ProfileCard from "@/components/ProfileCard";
import { findMovie, getAnimeInfo, getMovieCasts, relatedMovies } from "@/utils/Fetcher";
const TMDB_IMAGE_ENDPOINT = "https://image.tmdb.org/t/p/original";

import { FaAngleLeft } from "react-icons/fa6";
import {Button} from "@nextui-org/react";
import Link from "next/link";

export default async function Anime({ params }: { params: { slug: string } }) {
  const result = await getAnimeInfo(params.slug);
 
 
  const backdropImage = `url("${result.cover}")`;
  return (
    <main
      className="bg-cover bg-center bg-no-repeat sm:bg-cover h-[60vh] sm:h-[90vh] w-fit sm:w-full"
      style={{ backgroundImage: backdropImage }}
    >
      <Nav />
        <div className="ml-5 mt-3">
        <Link href={`/anime`}>
          <Button size="sm" variant="flat">
            <FaAngleLeft size={16} /> Back
          </Button>
        </Link>
      </div>
      <div className=" absolute top-[40%] sm:top-[65%]">
        <InfoCard result={result} type={"anime"}/>
        <h1 className="text-xl pt-5 px-5">Description</h1>
        <p className="text-xs  pl-5">{result.description}</p>
        <h2 className="text-xl pt-5 pl-5">Casts:</h2>
        <div className="flex flex-wrap gap-2 m-5">
          {/* {cast.map((c:any) => (<ProfileCard key={c.id} path={c.profile_path} name={c.name}/>))} */}
        </div>
      </div>
    </main>
  );
}
