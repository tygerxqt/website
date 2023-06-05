import Image from "next/image";
import { Button } from "./ui/button";
import { FaHamburger } from "react-icons/fa";
import { Menu } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export default function Nav() {
    return (
        <>
            <nav className="flex flex-row items-center justify-between w-full gap-4 px-2 py-4">
                <div>
                    <Image width={32} height={32} src="/logos/dark.jpg" alt="logo" className="hidden dark:block" />
                    <Image width={32} height={32} src="/logos/light.jpg" alt="logo" className="dark:hidden" />
                </div>

                <div className="hidden sm:flex">
                    <a href="/">
                        <Button variant="link">
                            About
                        </Button>
                    </a>
                    <a href="/projects">
                        <Button variant="link">
                            Projects
                        </Button>
                    </a>
                    <a href="/photos">
                        <Button variant="link">
                            Photos
                        </Button>
                    </a>
                    <a href="/blog">
                        <Button variant="link">
                            Blog
                        </Button>
                    </a>
                </div>

                <div>
                    <ThemeToggle />
                    <Button variant="ghost" className="sm:hidden" size="icon">
                        <Menu />
                    </Button>
                </div>

            </nav>
        </>
    )
}