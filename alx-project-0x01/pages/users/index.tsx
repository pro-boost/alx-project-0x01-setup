import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import Button from "@/components/common/Button";
import UserModal from "@/components/common/UserModal";
import { UserProps, UsersPageProps, UserData } from "@/interfaces";
import { useState } from "react";

const Users = ({ users }: UsersPageProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [postList, setPostList] = useState<UserData[]>(users);

  const handleAddUser = (newUser: UserData) => {
    const newUserWithId = { ...newUser, id: postList.length + 1 };
    setPostList([...postList, newUserWithId]);
  };

  return (
    <div>
      <Header />
      <main>
        <div className="flex items-center justify-center text-2xl font-semibold py-12">
          Users
        </div>
        <div className="flex justify-center mb-8">
          <Button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
            text="Add User"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
          {postList.map((user: UserData) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
              address={user.address}
              phone={user.phone}
              website={user.website}
              company={user.company}
            />
          ))}
        </div>
      </main>
      {isModalOpen && (
        <UserModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddUser}
        />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;
