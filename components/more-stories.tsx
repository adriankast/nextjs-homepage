import PostPreview from "./post-preview";

export default function MoreStories({ posts }) {
  return (
    <div className="flex justify-center">
      <section className="w-fit">
        <h1 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
          More Posts
        </h1>
        <div className="grid grid-cols-1 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
          {posts.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              date={post.date}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
