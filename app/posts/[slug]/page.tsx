import Markdown from "markdown-to-jsx";
import Image from "next/image";
import Link from "next/link";

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
        <section id="work">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <Link href="/">
                        <button className="secondary-button w-[100px]">Go Back</button>
                    </Link>
                </div>
                <div className="mb-8">
                    <h2 className="text-2xl mb-4">{post.title}</h2>
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
                    <ul className="leading-loose mb-4 text-sm">
                        <li className="flex gap-2">
                            <div>Company:</div>
                            <div>{post.company}</div>
                        </li>
                        <li className="flex gap-2">
                            <div>Type:</div>
                            <div>{post.type}</div>
                        </li>
                        <li className="flex gap-2">
                            <div>Duration:</div>
                            <div>{post.duration}</div>
                        </li>
                        <li className="flex gap-2">
                            <div>Stack:</div>
                            <div>{post.stack}</div>
                        </li>
                    </ul>
                </div>
                <Markdown>{content}</Markdown>
            </div>
        </section>
    );
}