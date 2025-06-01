import { useEffect, useState } from "react";
import { Link } from "react-router";
import sanityClient from "../sanityClient";
import { PortableText } from "@portabletext/react";
import { ArrowLeft } from "lucide-react";

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "blogs"]{
          Title,
          Slug,
          Date,
          Tag,
          body,
          Image{
            asset->{
              url
            }
          }
        }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <Link to="/">
        <ArrowLeft /> Back to Home
      </Link>
      <h2 className="text-3xl">Blog Posts</h2>
      <p>
        Thoughts, tutorials, and insights about technology, development, and
        life.
      </p>
      <div className="w-96 h-96 bg-yellow-300">
        {allPostsData &&
          allPostsData.map((post) => (
            <Link to={post.Slug.current} key={post.Slug.current}>
              <div>
                <img
                  src={post.Image.asset.url}
                  alt={post.Title}
                  className="h-1/2"
                />
                <p>{post.Tag}</p>
                <p>{post.Date}</p>
                <p className="font-bold text-xl">{post.Title}</p>
                <PortableText value={post.body} />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
