import { socials } from "@/content/socials";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 flex h-40 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black">
      {socials.map((social, index) => (
        <Link key={index}
          className="flex place-items-center gap-2 p-8"
          href={social.link}
          target="_blank"
          title={social.name}
        >
          <social.icon className="ml-auto h-6 w-6 dark:drop-shadow-[0_0_0.3rem_#ffffff70]" />
        </Link>
      ))}

    </footer>
  )
}