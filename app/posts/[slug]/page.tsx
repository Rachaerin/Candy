import MDX from "@/components/ui/mdx";
import { DEFAULT_WEB_TITLE } from "@/lib/_metadata";
import { PostOverview } from "@/lib/types";
import { allPosts } from "content-collections";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Slug({ params }: Props) {
  const { slug } = await params;

  const post = (allPosts as PostOverview[]).find((p) => p.hashCode === slug);
  if (!post) {
    notFound();
  }
  return (
    <article>
      <h1 className="font-bold my-4 text-2xl">{post.title}</h1>
      <p className="my-4 text-[#acaeac] flex gap-2">
        <span>
          <Link href="/" className="hover:text-[#fe8d4c] hover:underline">✦ {DEFAULT_WEB_TITLE}</Link>
        </span>
        <span>✧ {post.created_at}</span>
      </p>
      <MDX code={post.mdx} />
    </article>
  );
}

export const generateStaticParams = async () => {
  return (allPosts as PostOverview[]).map((post) => ({
    slug: post.hashCode,
  }));
};

export const generateMetadata = async ({ params }: Props) => {
  const { slug } = await params;
  const post = (allPosts as PostOverview[]).find((p) => p.hashCode === slug);
  if (!post) {
    return;
  }

  return {
    title: post.title,
    description: post.description,
  };
};
