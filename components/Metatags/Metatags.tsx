import Head from "next/head";

interface IMetaProps {
  title?: string;
  description?: string;
}

const MetaTags: React.FC<IMetaProps> = ({ title = "", description = "" }) => {
  return (
    <Head>
      <title>{title ? title : "The Power App"}</title>
      <meta
        name="description"
        content={description ? description : "JSON Web tutorials"}
      />
      <meta name="keywords" content="nextjs, seo" />
      <meta name="author" content="the author" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
};

export default MetaTags;
