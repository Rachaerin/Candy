import PostLink from "@/components/ui/PostLink";
import { DEFAULT_WEB_TITLE } from "@/lib/_metadata";
import { postsOrderedByDate } from "@/lib/posts";

export default function Posts() {
  return (
    <main>
      <h3 className="my-4 font-bold text-2xl">{DEFAULT_WEB_TITLE}</h3>
      <p className="my-4">
        Video content is well-suited for entertainment and information
        dissemination, written text fosters deep learning and independent
        thinking.
      </p>
      <hr className="hr-d" />
      <ul className="list-disc list-inside">
        {postsOrderedByDate.map((post, ind) => (
          <li key={ind}>
            <PostLink href={post.url}>{post.title}</PostLink>
          </li>
        ))}
      </ul>
    </main>
  );
}
