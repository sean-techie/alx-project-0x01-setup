import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/common/Button';

const UsersPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">Users</h1>
        <Button label="Add User" onClick={() => alert('User added!')} />
      </main>
      <Footer />
    </>
  );
};

export default UsersPage;
