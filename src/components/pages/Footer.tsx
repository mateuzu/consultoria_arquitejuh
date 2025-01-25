// src/components/Button.tsx
import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <section className="w-full dark:bg-CINZA">
            <footer className="rounded-lg">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex text-center md:text-left md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2025 <a>Juliana Costa™</a>. All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center justify-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <a href="https://www.instagram.com/arquitejuh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="hover:underline me-4 md:me-6">
                                <FaInstagram className="inline-block mr-2 text-xl" />
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/juliana-costa-8a1044170/" target="_blank" className="hover:underline me-4 md:me-6">
                                <FaLinkedin className="inline-block mr-2 text-xl" />
                                Linkedin
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:ozjuliana@hotmail.com?subject=Consultoria&body=Olá,%20estou%20interessado%20em%20uma%20consultoria,%20podemos%20conversar?"
                                className="hover:underline me-4 md:me-6"
                            >
                                <BiLogoGmail className="inline-block mr-2 text-xl" />
                                Gmail
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </section>
    );
};

export default Footer;
