import Link from "next/link";

const menu = [
    { name: "about", url: "", contact: "" },
    { name: "work", url: "", contact: "" },
    { name: "contact", url: "", contact: "" },
]

export default function Header () {
    return (
        <header className="flex flex-row w-full justify-between items-center py-8 px-4 mb-4">
            <div className="font-bold text-xl tracking-[.5em]">
                <Link href="/">&#60;nahcnats/&#62;</Link>
                
            </div>
            <div>
                <ul className="flex flex-row list-none space-x-6 font-[500]">
                    {
                        menu.map((item, idx) => <li key={idx}>{item.name.toUpperCase()}</li>)
                    }
                </ul>
            </div>
        </header>
    );
}