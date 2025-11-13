import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PostCard from '@/components/common/PostCard';

const PostsPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="p-8 space-y-4">
        <h1 className="text-3xl font-bold mb-4">Posts</h1>
        <PostCard title="First Post" body="This is a sample post." />
        <PostCard title="Second Post" body="Another example post." />
      </main>
      <Footer />
    </>
  );
};

export default PostsPage;
