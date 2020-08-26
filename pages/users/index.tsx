import { GetStaticProps } from "next";
import Link from "next/link";

interface IResultData {
  id: number;
  name: string;
  username: string;
  email: string;
}

type UsersList = {
  usersList: IResultData[];
};

const Users: React.FC<UsersList> = ({ usersList }) => {
  return (
    <div>
      <div className="card-box gold">
        <h2>list of users</h2>
      </div>
      <ul id="users">
        {usersList.map((list, idx) => (
          <li key={idx}>
            <Link as={`users/${list.id}`} href="/users/[id]">
              <a>{list.username}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const dataRequest = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await dataRequest.json();
  return {
    props: { usersList: data }, // will be passed to the page component as props
    revalidate: true,
  };
};

export default Users;
