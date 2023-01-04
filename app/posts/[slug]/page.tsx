import Markdown from "markdown-to-jsx";
import Image from "next/image";
import Link from "next/link";
import { FaArrowAltCircleLeft } from "react-icons/fa"

import getPostContent from "../../../lib/getPostContent";
import getPostMetaData from "../../../lib/getPostMetaData";

export const generateStaticParams = async () => {
    const posts = getPostMetaData();

    return posts.map((post) => ({
        title: post.title,
        date: post.date,
        company: post.company,
        type: post.type,
        duration: post.duration,
        stack: post.stack,
        image: post.image,
        slug: post.slug,
    }));
}

export default function PostPage(props: any) {
    const slug = props.params.slug;
    const { data: post, content } = getPostContent(slug);

    return (
            <div className="container mx-auto">
                <div className="mb-8">
                    <Link href="/">
                        <FaArrowAltCircleLeft size={32} className="hover:text-amber-500" />
                    </Link>
                </div>
                <div className="mb-8">
                    <div className="flex flex-row justify-center">
                        <h2 className="text-xl text-amber-500 mb-4">{post.title}</h2>
                    </div>
                    
                    <div className="w-full h-[400px] flex justify-center relative mb-6">
                        <Image 
                            src={post.image}
                            alt={post.title}
                            fill
                            sizes="100vw"
                            style={{
                                objectFit: "fill"
                            }}
                        />
                    </div>
                    <div className="border border-gray-600 rounded-lg w-fit p-4">
                        <ul className="leading-loose mb-4 text-sm">
                            <li className="flex gap-2">
                                <div className="item-key">Company:</div>
                                <div>{post.company}</div>
                            </li>
                            <li className="flex gap-2">
                                <div className="item-key">Type:</div>
                                <div>{post.type}</div>
                            </li>
                            <li className="flex gap-2">
                                <div className="item-key">Duration:</div>
                                <div>{post.duration}</div>
                            </li>
                            <li className="flex gap-2">
                                <div className="item-key">Stack:</div>
                                <div>{post.stack}</div>
                            </li>
                        </ul> 
                    </div>
                    
                </div>
                <div className="mb-12">
                    <div className="item-key mb-2">
                        Description:
                    </div>
                    <Markdown>{content}</Markdown>
                </div>
                
            </div>

    );
}