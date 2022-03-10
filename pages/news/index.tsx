import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: { posts: data },
  };
};

const News = ({ posts }: any) => {
  return (
    <div>
      <h1>Latest Posts</h1>
      {posts.map((post: any) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};
export default News;
