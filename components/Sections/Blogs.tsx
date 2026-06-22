import SubHeading from "../SubHeading";
import { IconLogs } from "@tabler/icons-react";
import BlogCard from "../BlogCard";

const Blogs = () => {
  const blogsData = [
    {
      title: "Fixing .env Not Loading in Node.js",
      link: "https://chetan0724.hashnode.dev/env-variables-not-loading-and-how-to-fix-it",
      desc: "Fixed an issue where .env variables weren’t loading by understanding dotenv paths.",
      date: "Jun 21, 2025",
    },
  ];
  return (
    <div>
      <SubHeading text="Recent Blog Posts" icon={IconLogs} />
      {blogsData.map(({ title, date, link, desc }) => (
        <BlogCard
          title={title}
          date={date}
          link={link}
          desc={desc}
          key={title}
        />
      ))}
    </div>
  );
};

export default Blogs;
