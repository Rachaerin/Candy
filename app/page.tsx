import TailwindLink from "@/components/ui/TailwindLink";
import { DEFAULT_WEB_TITLE } from "@/lib/_metadata";
import Image from "next/image";
import mountains from "../public/img/Anime_girl_with_blue_hair.webp";

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl my-4 font-bold">{DEFAULT_WEB_TITLE}</h1>
      <div className="relative h-[200px] md:h-[300px]">
        <Image
          src={mountains}
          alt="cover"
          fill
          preload
          placeholder="blur"
          objectFit="cover"
        />
      </div>
      <p className="my-4 text-nowrap">
        Hi, I&#39;m Rachaerin. Email:{" "}
        <TailwindLink href="mailto:chengyongliu@foxmail.com">
          chengyongliu@foxmail.com
        </TailwindLink>
      </p>
      <ul className="pl-4 list-disc list-inside">
        <li>
          <TailwindLink href="https://github.com/Rachaerin">
            About Me
          </TailwindLink>
          , from myself, often amusingly inaccurate.
        </li>
        <li>
          <TailwindLink href="/">My family</TailwindLink>: they lack the
          corresponding website address.
        </li>
      </ul>
      <h3 className="my-4">Favorite text:</h3>
      <div className="pl-4">
        <p>
          1. Let life be buautiful like summer flowers and death like autumn
          leaves.
        </p>
        <p>2. Wath you are you do not see, waht you see is your shadow.</p>
        <p>
          3. The evening sky to me is like a window, and a lighted lamp, and a
          waiting behind it.
        </p>
      </div>
      <h3 className="my-4">
        Interests: <TailwindLink href="/posts">Writing</TailwindLink>,{" "}
        <TailwindLink href="/travel">Travel</TailwindLink>,{" "}
        <TailwindLink href="/books">Books</TailwindLink>,{" "}
        <TailwindLink href="/games">Games</TailwindLink>,{" "}
        <TailwindLink href="tv">Film & TV</TailwindLink>,{" "}
        <TailwindLink href="tv">Friends</TailwindLink>.
      </h3>
    </main>
  );
}
