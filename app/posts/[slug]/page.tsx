import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";

import getPostMetaData from "../../../lib/getPostMetaData";

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, 'utf8');
    const matterResult = matter(content);

    return matterResult;
}

export const generateStaticParams = async () => {
    const posts = getPostMetaData();

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default function PostPage(props: any) {
    const slug = props.params.slug;
    const post = getPostContent(slug);

    return (
        <div>
            <h1>This is a post: {post.data.title}</h1>
            <Markdown>{post.content}</Markdown>
        </div>
    );
}