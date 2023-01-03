import fs from "fs";
import matter from "gray-matter";

import { PostMetaData } from "../types/PostMetaData";

const getPostMetaData = (): PostMetaData[] => {
    const folder = "posts/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));

    const posts = markdownPosts.map((filename) => {
        const fileContents = fs.readFileSync(`${folder}${filename}`, "utf8");
        const matterResult = matter(fileContents);

        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            company: matterResult.data.company,
            type: matterResult.data.type,
            duration: matterResult.data.duration,
            stack: matterResult.data.stack,
            image: matterResult.data.image,
            slug: filename.replace(".md", ""),
        }
    });

    return posts;
}

export default getPostMetaData;