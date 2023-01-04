import getPostContent from "../../../lib/getPostContent";

export default function Head(props: any) {
  const slug = props.params.slug;
  const { data: post } = getPostContent(slug);

  return (
    <>
      <title>{`${process.env.NEXT_PUBLIC_SITENAME} - ${post.title}`}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </>
  )
}
