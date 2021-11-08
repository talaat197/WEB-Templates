import { useRouter } from "next/router";
import Header from "../../components/Header";

const Post = (props) => {
  const router = useRouter();

  return (
    <div>
      <Header />
      <h1>{props.show.name}</h1>
      <p>{props.show.summary.replace(/<[/]?[pb]>/g, "")}</p>
      {props.show.image ? <img src={props.show.image.medium} /> : null}
    </div>
  );
};

Post.getInitialProps = async function (context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();
  console.log(`Fetched show: ${show.name}`);

  return { show };
};
export default Post;
