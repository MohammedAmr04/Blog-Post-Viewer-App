export default function Loading() {
  return (
    <>
      <div
        className="absolute top-1/2 left-1/2 mt-[-50px] ml-[-50px] w-[100px] h-[100px] border-[5px]  border-[var(--purple-color)] rounded-full"
        style={{
          animation: "rotate-right 2s infinite linear",
          borderStyle: "solid dotted",
        }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 mt-[-40px] ml-[-40px] w-[80px] h-[80px] border-[5px]  border-[var(--purple-color)] rounded-full"
        style={{
          animation: "rotate-left 2s infinite linear",
          borderStyle: " solid solid dotted dotted",
        }}
      ></div>
    </>
  );
}
