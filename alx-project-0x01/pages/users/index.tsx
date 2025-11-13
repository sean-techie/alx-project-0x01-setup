import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

const Users: React.FC<{ users: UserProps[] }> = ({ users }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-semibold mb-4">Users</h1>
        <div className="grid grid-cols-3 gap-4">
          {users?.map((user, index) => (
            <UserCard {...user} key={index} />
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: { users }
  };
}

export default Users;
