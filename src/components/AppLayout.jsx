import PageNav from "./PageNav";

function AppLayout({ children }) {
  return (
    <main className="m-0 h-dvh min-h-96  w-full rounded-none bg-[#152e38] bg-cover px-4 text-white sm:px-8 md:mx-auto md:my-[4vw] md:h-[80%] md:w-[80%] md:max-w-[80rem] md:rounded-lg md:shadow-[0_1rem_4rem_0.4rem_#fff3]">
      <PageNav />
      <section className="mt-10 flex flex-col items-center justify-center">
        {children}
      </section>
    </main>
  );
}

export default AppLayout;
