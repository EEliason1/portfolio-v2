import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "../data/fakeData";

const BlogPost: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = blogPosts.find((p) => p.id === parseInt(postId || "", 10));

  if (!post) {
    return (
      <div className="bg-primaryBg text-textPrimary py-28 px-4 text-center">
        <h1 className="text-4xl font-bold">Post Not Found</h1>
        <p className="text-textSecondary mt-4">The blog post you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="bg-primaryBg text-textPrimary py-28 px-4">
      <div className="max-w-4xl mx-auto">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto rounded-lg mb-8 shadow-lg"
        />
        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
        <div className="text-textSecondary whitespace-pre-wrap">
          {post.content}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
