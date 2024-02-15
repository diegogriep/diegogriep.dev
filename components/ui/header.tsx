
import { ModeToggle } from "../modeToggle";
import { Logo } from "./logo";
import { Menu } from "./menu";

export function Header() {
  return (
    <header className="sm:flex sm:flex-row text-center items-center justify-between p-12">
      <Logo />
      <Menu />
      <ModeToggle />
    </header>
  )
}