'use client';

import Link from "next/link";

const menu = [
    { name: "about", url: "/#hero" },
    { name: "work", url: "/#work" },
    { name: "contact", url: "/#contact" },
]

export default function Header () {
    return (
        <header className="flex sticky top-0 z-10 bg-gray-800 flex-row w-full justify-between items-center py-4 px-4 mb-6">
            <div className="font-[500] text-xl tracking-[.5em]">
                <Link href="/">&#60;nahcnats/&#62;</Link>
                
            </div>
            <div>
                <ul className="flex flex-row list-none space-x-6 font-[500]">
                    {
                        menu.map((item, idx) => <li key={idx}>
                            <a href={item.url} className={`hover:text-amber-500`}>
                                    {item.name.toUpperCase()}
                                </a>
                            </li>)
                    }
                </ul>
            </div>
        </header>
    );
}