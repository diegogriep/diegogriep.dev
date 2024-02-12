import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href={'/'} title="Go to home" className="sm:flex sm:items-center sm:space-y-0 sm:space-x-4">
      <Image
        className="border-2 border-white hover:grayscale block mx-auto h-16 w-16 rounded-full sm:mx-0 sm:shrink-0 transition delay-150 ease-in-out hover:scale-110" src="/images/diego-griep.jpeg" alt="Diego's Face" width={64} height={64} />
      <div className="text-center sm:text-left">
        <h1>
          Diego Griep
          <strong className='block uppercase font-thin text-xs'>Senior Frontend Engineer</strong>
        </h1>
      </div>
    </Link>
  )
}