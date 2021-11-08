import { useRouter } from "next/router";
import Header from "../components/Header";

const Page = () => {
  const router = useRouter();

  return (
    <div>
      <Header />
      <h1>{router.query.title}</h1>
      <p>This is the blog post content.</p>
    </div>
  );
};

export default Page;
