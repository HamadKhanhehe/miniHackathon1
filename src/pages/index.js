import { getAll } from "@/services/blog";
import Image from "next/image";
import Link from "next/link";

export default function Home({ blogs }) {
  return (
    <>
      <div className="goodMor"><b>Good Morning Readers!</b></div>
      <div className="indexPar">
        <div className="indexChild">
          <div className="allBlogs">
            <h1>All Blogs</h1>
          </div>

          {blogs.map((blog) => (
            <div className="blog1" key={blog.id}>
              <Image className="img1" src={"/licensed-image.jpeg"} width={55} height={52} />
              <div className="blogHeading1">
                <h3>{blog.title}</h3>
                <p> {blog.author} - {blog.datePublished}</p>
              </div>
              <div className="blogPara1">
                <p>{blog.content}</p>
              </div>
              <div className="blogLink1">
                <Link href={"/user${blog.author}"}>See all from this user </Link>
              </div>
            </div>
          ))}

        </div>
      </div>

    </>


  )
}














export async function getStaticProps() {
  const data = getAll();
  console.log(data);
  return {
    props: {
      blogs: data
    }
  };

}


