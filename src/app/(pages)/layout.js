import Sidebar from "../components/sidebar";
import PageHeader from "../components/pageHeader";

export default function Layout({ children }) {
  return (
    <>
      <main className="flex">
        <Sidebar />
        <div className="p-8 flex flex-col flex-grow  max-h-screen overflow-hidden">
          <PageHeader />
          {children}
        </div>
      </main>
    </>
  );
}
