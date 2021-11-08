import Link from "next/link";
import Header from "../components/Header";

const PostLink = (props) => (
  <li>
    <Link href={`/post/[id]`} as={`/post/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);
export default function Blog() {
  return (
    <div>
      <Header />
      <h1>My Blog</h1>
      <ul>
        <PostLink id="Hello-Next.js" />
        <PostLink id="Learn-Next.js-is-awesome" />
        <PostLink id="5" />
      </ul>
    </div>
  );
}
