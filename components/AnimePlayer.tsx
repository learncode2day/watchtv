
import { Button } from "@nextui-org/react";
import Link from "next/link";


export default function AnimePlayer({ animeLink,downloadLinks }: any) {



  return (
    <div className="flex flex-col m-2 justify-around lg:flex-row">
      <div>

        <iframe
          src={animeLink}
          className="border-slate-700 border-1 w-[21rem] h-[14rem] md:w-[60rem] md:h-[34rem] mx-auto"
          allowFullScreen
        ></iframe>
        <h1 className="mt-2 p-2 font-medium text-sm text-teal-300">
        Download!
        </h1>
        <div className="flex gap-2 flex-wrap">
            {downloadLinks.map((link:any) => (
                <Link href={link.url} key={link.quality}>
            <Button variant="flat">{link.quality}</Button>
            </Link>
            ))}
            
        </div>
      </div>
    </div>
  );
}
