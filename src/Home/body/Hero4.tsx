export const Hero4 = () => {
  const blogs = [
    {
      title:
        "How I Broke My Dual Boot, Lost Both Windows and Linux, and Clawed My Way Back with Just a Terminal",
      link:
        "https://dev.to/ahmad09/how-i-broke-my-dual-boot-lost-both-windows-and-linux-and-clawed-my-way-back-with-just-a-terminal-4i3p",
    },
    {
      title: "Setting Up a Monorepo Workspace with Turborepo: A Complete Guide",
      link:
        "https://dev.to/ahmad09/setting-up-a-monorepo-workspace-with-turborepo-a-complete-guide-3ofd",
    },
  ];

  return (
    <div className="text-white mt-5 px-4 sm:px-0 text-center sm:text-left">
      <h1 className="text-3xl font-semibold font-serif leading-tight">
        Blogs
      </h1>

      <div className="mt-5 flex flex-col gap-4 items-center sm:items-start">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="border border-gray-700 hover:bg-gray-800 p-2 rounded-md w-full sm:w-full max-w-full"
          >
            <h2 className="text-md font-semibold text-gray-400 break-words">
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {blog.title}
              </a>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};
