import { ClientPageRoot } from "next/dist/client/components/client-page";

export default async function BlogPost({ params }: { params: { id: string } }) {
  console.log("BlogPost params:", params);
  const blogData = await params;
  console.log("BlogPost blogData:", blogData);
  return (
    <div>
      <h1>Blog post {blogData.id}</h1>
      <p>This is the blog post content.</p>
    </div>
  );
}
