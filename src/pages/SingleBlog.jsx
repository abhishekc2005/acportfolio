import { useParams } from "react-router";

const SingleBlog = () => {
    const {slug} = useParams();

  return (
    <div>{slug}</div>
  )
}

export default SingleBlog