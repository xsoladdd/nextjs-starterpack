import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <p className="text-red-500">hey</p>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
