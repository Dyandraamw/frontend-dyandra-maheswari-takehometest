import Sidebar from "../components/sidebar";
import PageHeader from "../components/pageHeader";

export default function Layout({ children }) {
  return (
    <>
      <main className="flex">
        <Sidebar />
        <div className="p-8 flex flex-col flex-grow max-h-[700px]">
          <PageHeader />
          {children}
        </div>
      </main>
    </>
  );
}
