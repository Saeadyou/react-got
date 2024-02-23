import PageNav from "./PageNav";

function AppLayout({ children }) {
  return (
    <main className="flex h-dvh items-center justify-center bg-[url('/img/bg.jpg')] bg-cover">
      <section className="mx-auto my-[4vw] h-[80%] w-[80%] max-w-[80rem] overflow-hidden rounded-lg bg-[#152e38] bg-cover text-white shadow-[0_1rem_4rem_0.4rem_#fff3] ">
        <PageNav />
        <section className="flex flex-col items-center justify-center">
          {children}
        </section>
      </section>
    </main>
  );
}

export default AppLayout;
