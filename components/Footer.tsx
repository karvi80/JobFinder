import { footers } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className="mt-20 pb-10 px-10 md:flex md:items-center gap-3 md:gap-6 md:justify-center md:flex-wrap grid grid-cols-2 justify-start">
            {footers.map((footer) => (
                <Link key={footer.title}
                href={footer.link}
                className="flex items-center justify-start gap-2"
                >
                    {footer.image ? (
                        <Image src={footer.image} alt={footer.title} width={36} height={36} />
                    ) : ""
                }
                <p className="paragraph-text">{footer.title}</p>
                </Link>
            ))}
        </footer>
    )
};

export default Footer;
