import React, { useState, useEffect } from "react";
import UserModal from "../../components/common/UserModal";
import { UserData } from "../../interfaces";

const UsersPage = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const addUser = (newUser: UserData) => {
    setUsers((prev) => [...prev, newUser]);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Users</h1>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => setIsModalOpen(true)}
        >
          Add User
        </button>
      </div>

      {/* User Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {users.map((user) => (
          <div key={user.id} className="p-4 border rounded shadow-sm">
            <h2 className="font-bold text-lg">{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.address.city}</p>
          </div>
        ))}
      </div>

      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={addUser}
      />
    </div>
  );
};

export default UsersPage;
