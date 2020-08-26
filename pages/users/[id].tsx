import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import MetaTags from "components/Metatags";

interface IPersonPosts {
  title: string;
  body: string;
}

interface IUserProps {
  user: string;
  usersList: IPersonPosts[];
}

const PersonId: React.FC<IUserProps> = ({ usersList, user }) => {
  const router = useRouter();
  return (
    <div>
      <MetaTags
        title={`User Number ${user}`}
        description={`Posts from user ${user}`}
      />
      <h2 style={{ margin: "20px 0" }}>
        Post of User Number : {user ? user : ""}{" "}
      </h2>
      {router.isFallback ? (
        <p>loading...</p>
      ) : (
        <ul>
          {usersList.map((post, idx) => (
            <li key={idx}>
              <div>{post.title}</div>
              <div>{post.body}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;
  const dataRequest = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  const data = await dataRequest.json();
  return {
    props: { usersList: data, user: id }, // will be passed to the page component as props
    revalidate: true,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: true, // See the "fallback" section below
  };
};

export default PersonId;
