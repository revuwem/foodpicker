import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Head>
        <title>Foodpicker - Pick your today food</title>
        <meta name="description" content="" />
        <meta
          name="google-site-verification"
          content="4v7OYqUd2-7a5dMr1XZv6wutw_94PCdYoU3ZKDTw06U"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
