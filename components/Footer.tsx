import { Divider } from "@nextui-org/react";
export default function Footer() {
  return (
    <div className="m-1 p-2">
      <Divider className="mt-1 mb-2" />
      <div className="mt-2 p-2">
        <h1 className="font-semibold">Disclamer</h1>
        <p className="text-gray-700">
            WatchTV does not host any files, it only links to 3rd party
            services. Legal issues should be taken up with the file hosts and
            providers. <br></br>WatchTV is not responsible for any media files shown by
            the video providers. For DMCA, contact <b><u><a href="mailto:dmca@starnode.host">dmca@starnode.host</a></u></b>
        </p>
      </div>
    </div>
  );
}
