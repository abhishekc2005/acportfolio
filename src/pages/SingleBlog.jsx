import { useEffect, useState } from "react";
import { useParams } from "react-router";
import sanityClient from "../sanityClient";
import { PortableText } from "@portabletext/react";
import { ArrowLeft } from "lucide-react";

const SingleBlog = () => {
  const { slug } = useParams();
  const [singlePost, setSinglePost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "blogs"  && Slug.current == $slug] [0] {
        Title,
        Date,
        Tag,
        body,
        Image{
        asset->{
        url
             }
           }
         }`,
        { slug }
      )
      .then((data) => {
        console.log("Fetched blog data:", data);
        setSinglePost(data);
      })
      .catch(console.error);
  }, [slug]);

  return (
    <div>
      {!singlePost ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>
            <ArrowLeft /> Back to Blogs
          </p>
          <p>{singlePost.Tag}</p>
          <h4>{singlePost.Title}</h4>
          <p>{singlePost.Date}</p>
          <img src={singlePost.Image.asset.url} alt="" />
          <PortableText value={singlePost.body} />
        </div>
      )}
    </div>
  );
};

export default SingleBlog;
