import MetaTags from "components/Metatags";

export default function Home() {
  return (
    <>
      <MetaTags title="the home page" description="awesome nextjs tutorials" />
      <div className="card-box">
        <h2>hello this is the home page</h2>
      </div>
    </>
  );
}
