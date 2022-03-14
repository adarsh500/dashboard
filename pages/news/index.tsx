import { GetStaticProps } from "next";

import NewsCard from "../../components/NewsCard";

//this is a static site that displays the posts made by users
export const getStaticProps: GetStaticProps = async () => {
  //this enables pre-rendering of the page and this function
  //runs on the server-side only
  const url = "https://jsonplaceholder.typicode.com/posts";
  const res = await fetch(url);
  const data = await res.json();

  return {
    //sends props to the news component
    props: { posts: data },
  };
};

//News component that displays all the posts
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
