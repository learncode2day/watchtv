

export default function AnimePlayer({ animeLink, downloadLinks }: any) {
  return (
    <div className="overflow-hidden ">
      <iframe
        src={animeLink}
        className="overflow-hidden border-slate-700 border-1 w-[21rem] h-[16rem] md:w-[60rem] md:h-[34rem] mx-auto "
        allowFullScreen
      ></iframe>
    </div>
  );
}
