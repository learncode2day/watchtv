import InfoCard from "@/components/InfoCard";
import Nav from "@/components/Nav";
import ProfileCard from "@/components/ProfileCard";
import { findTV, getTVCasts } from "@/utils/Fetcher";
const TMDB_IMAGE_ENDPOINT = "https://image.tmdb.org/t/p/original";
import { FaAngleLeft } from "react-icons/fa6";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default async function Movie({ params }: { params: { slug: string } }) {
  const result = await findTV(params.slug);
  var cast = await getTVCasts(params.slug);
  cast = cast.slice(0, 6);
  const backdropImage = `url("${TMDB_IMAGE_ENDPOINT}${result.backdrop_path}")`;
  return (
    <main
      className="bg-center bg-cover bg-no-repeat sm:bg-cover h-[60vh] sm:h-[90vh] w-fit sm:w-full"
      style={{ backgroundImage: backdropImage }}
    >
      <Nav />
      <div className="ml-5 mt-3">
        <Link href={`/`}>
          <Button size="sm" variant="flat">
            <FaAngleLeft size={16} /> Back
          </Button>
        </Link>
      </div>
      <div className=" absolute top-[40%] sm:top-[65%]">
        <InfoCard result={result} />
        <h1 className="text-xl pt-5 px-5">Description</h1>
        <p className="text-xs  pl-5">{result.overview}</p>
        <h2 className="text-xl pt-5 pl-5">Casts:</h2>
        <div className="flex flex-wrap gap-5 m-5">
          {cast.map((c: any) => (
            <ProfileCard key={c.id} path={c.profile_path} name={c.name} />
          ))}
        </div>
      </div>
    </main>
  );
}
