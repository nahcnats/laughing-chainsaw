import Link from "next/link";
import SectionTitle from "../common/SectionTitle";
import getPostMetaData from "../../lib/getPostMetaData";
import Project from "./Project";

export default function ProjectList() {
    const postMetaData = getPostMetaData();
    const sortedPostMetaData = postMetaData.sort((a, b) => 
        a.date > b.date ? -1 : b.date > a.date ? 1 : 0
    );

    return (
        <section id="work" className="mt-12">
            <SectionTitle title="My Work" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    sortedPostMetaData ? sortedPostMetaData.map((post) => <Project data={post} key={post.slug} />) : null
                }
            </div>
        </section>
    );
}