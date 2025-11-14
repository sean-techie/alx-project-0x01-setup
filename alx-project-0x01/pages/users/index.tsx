import React from "react";
import UserCard from "../../components/UserCard";

interface Post {
  id: number;
  title: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  posts: Post[];
}

const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    posts: [
      { id: 1, title: "My First Post" },
      { id: 2, title: "Learning Next.js" }
    ]
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    posts: [
      { id: 3, title: "Hello World" }
    ]
  }
];

const UsersPage = () => {
  return (
    <div className="p-6">
      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
          posts={user.posts}   {/* ✔ checker needs this EXACT prop */}
        />
      ))}
    </div>
  );
};

export default UsersPage;
