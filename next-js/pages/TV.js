import Link from "next/link";
import Header from "../components/Header";
import fetch from "isomorphic-unfetch";

const TV = (props) => {
  return (
    <div>
      <Header />
      <h1>Tv SHows</h1>
      <ul>
        {props.shows.map((show) => (
          <li key={show.id}>
            <Link href="/post/[id]" as={`/post/${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

TV.getInitialProps = async function () {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map((entry) => entry.show),
  };
};

export default TV;
