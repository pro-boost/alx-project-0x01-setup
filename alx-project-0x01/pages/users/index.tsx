import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps, UsersPageProps } from "@/interfaces";
const Users = ({ users }: UsersPageProps) => {
  return (
    <div>
      <Header />
      <main>
        <div className="flex items-center justify-center text-2xl font-semibold py-12">
          Users
        </div>
        <div className="grid grid-cols-3 gap-4">
          {users.map((user: UserProps) => (
            <UserCard
              key={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
              address={user.address}
              phone={user.phone}
              website={user.website}
              company={user.company}
              id={user.id}
            />
          ))}
        </div>
      </main>
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
