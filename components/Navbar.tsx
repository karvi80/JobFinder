import { navIcons, navItems } from "@/constants";
import Image from "next/image";
import Link from "next/link";



const Navbar = () => {
  return (
    <div>
      <header className="w-full flex flex-col items-center justify-center">
        <nav className="nav">
          <Link href="/" className="flex items-center gap-1">
            <Image src="/logo.png" alt="logo" width={50} height={50} />
            <p className="nav-logo ml-1">
              Job<span className="text-primary">Finder</span>
            </p>
          </Link>

          <div>
            <ul className="hidden lg:flex items-center gap-5">
              {navItems.map((item) => (
                <li key={item.title}>
                  <Link href={item.link}>{item.title}</Link>
                </li>))}
            </ul>
          </div>

          <div className="flex items-center gap-5">
            {navIcons.map((icon) => (
              <Image
                key={icon.alt}
                src={icon.src}
                alt={icon.alt}
                width={27}
                height={27}
              />
            ))}
          </div>
        </nav>
        <div>
            <ul className="lg:hidden flex items-center gap-5">
              {navItems.map((item) => (
                <li key={item.title}>
                  <Link href={item.link}>{item.title}</Link>
                </li>))}
            </ul>
          </div>
      </header>
    </div>
  );
};

export default Navbar;
