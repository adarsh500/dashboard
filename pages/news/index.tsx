import { GetStaticProps } from "next";

import NewsCard from "../../components/NewsCard";

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
    <div className="news">
      <h1>Latest Posts</h1>
      <div className="newsList">
        {posts.map((post: any) => (
          <NewsCard
            key={post.id}
            title={post.title}
            body={post.body}
          ></NewsCard>
        ))}
      </div>
    </div>
  );
};
export default News;
