import type { NextPage } from "next";
import { Footer } from "../Footer";
import { Header } from "../Header";

interface Props {
  children?: React.ReactNode;
}

const ContentLayout: NextPage<Props> = ({ children }) => {
  return (
    <main className="bg-white dark:bg-gray-900">
      <Header />
      <div className="container px-2 pt-10 pb-5 mx-auto xl:w-6/12">
        <div className="w-full h-full p-2 bg-white border border-gray-200 code-preview rounded-xl bg-gradient-to-r dark:border-gray-700 sm:p-6 dark:bg-gray-800">
          {children}
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default ContentLayout;
