import { ReactNode } from "react";

export function Main({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main className="lg:max-w-5xl m-auto flex flex-col items-center justify-bwtween px-8 mb-32">
      {children}
    </main>
  )
}