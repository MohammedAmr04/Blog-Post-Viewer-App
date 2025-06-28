import DarkModeToggle from "./ToggleDarkMode";

export default function NavBar() {
  return (
    <section title="header" className="flex flex-col gap-12 px-2 py-8">
      <div className=" h-[60px] py-2.5 flex items-center justify-between">
        <div className="font-semibold username">Mohammed Amr</div>
        <DarkModeToggle />
      </div>
      <h1 className="font-bold text-6xl sm:text-[72px] md:text-[140px] border-solid border-y my-0 py-0 border-black/30 dark:border-[#FFFFFF] uppercase lg:text-[180px] text-[#1A1A1A] dark:text-[#fff] text-center">
        <span className="me-4">The</span>
        <span>blog</span>
      </h1>
    </section>
  );
}
