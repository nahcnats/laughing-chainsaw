import Image from "next/image";
import Link from "next/link";
import { PostMetaData } from "../../types/PostMetaData";

export default function Project({data}: {data: PostMetaData}) {
    return (
            <div className="card flex h-full w-full flex-col">
                <div className="flex-2 mb-4 relative flex min-h-[220px] w-full items-start justify-center">
                    <Image
                        src={data.image}
                        alt={data.title}
                        fill
                        sizes="100vw"
                        style={{
                            objectFit: "cover"
                        }}
                    />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                <h3 className="mb-2 text-lg">{data.title}</h3>
                <ul className="text-sm leading-loose">
                    <li className="flex gap-2">
                        <div>Company:</div>
                        <div>{data.company}</div>
                    </li>
                    <li className="flex gap-2">
                        <div>Type:</div>
                        <div>{data.type}</div>
                    </li>
                    <li className="flex gap-2">
                        <div>Duration:</div>
                        <div>{data.duration}</div>
                    </li>
                    <li className="flex gap-2">
                        <div>Stack:</div>
                        <div>{data.stack}</div>
                    </li>
                </ul>
                <Link href={`/posts/${data.slug}`}>
                    <button className="secondary-button mt-4 w-full">
                        Read More
                    </button>
                </Link>
                </div>
            </div>
            
    );
}