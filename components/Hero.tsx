import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa6";

export default function Hero() {
  return (
    <div className="flex justify-evenly gap-2 m-5">
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            PrimeFlix - Watch Everything For Free!
          </p>
          <h4 className="text-white/90 font-medium text-xl">
            Join Our Discord Server!
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src="/hero.jpg"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Use An Ad-Blocker</p>
              <p className="text-tiny text-white/60">
                For an ad-free experience.
              </p>
            </div>
          </div>
          <Link href={"https://discord.gg/xSUceYpr"}>
            <Button radius="full" color="secondary" size="md" variant="shadow">
              <FaDiscord size={20} />
              Join Now
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
