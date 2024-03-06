import PageNav from "./PageNav";

function AppLayout({ children }) {
  return (
    <main className="mx-auto my-[4vw] h-[80%] min-h-96 w-[80%] max-w-[80rem] rounded-lg bg-[#152e38] bg-cover pb-8 text-white shadow-[0_1rem_4rem_0.4rem_#fff3] ">
      <PageNav />
      <section className="flex flex-col items-center justify-center">
        {children}
      </section>
    </main>
  );
}

export default AppLayout;
