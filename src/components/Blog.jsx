function Blog() {
  const posts = [
    { title: "Exploring the Alps", excerpt: "A breathtaking journey through the mountains." },
    { title: "Beaches of Bali", excerpt: "Sun, sand, and serenity." },
    { title: "Cultural Wonders of Japan", excerpt: "Discovering ancient traditions." },
  ];

  return (
    <section id="blog">
      <h2>Blog</h2>
      {posts.map((post, index) => (
        <article key={index}>
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </section>
  );
}

export default Blog;
