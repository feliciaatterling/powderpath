import Image from "next/image";
import { Input } from "postcss";
import { ResortCard } from "./components/ResortCard";

export default function Home() {
  const favorites = ["Whistler", "Chamonix", "Åre"];

  return (
    <div className="w-full">
      <h1 className="text-5xl text-center pt-8">Powder Path</h1>
      <input
        type="text"
        name="search"
        placeholder="Search for resorts"
        className="rounded-xl block mx-auto p-2 w-3/5 mt-10 border placeholder:text-zinc-400 text-center text-xl"
      ></input>

      <div className="w-4/5 mx-auto">
        <h1 className="text-2xl text-yellow-300 py-10">
          Your favorite resorts
        </h1>
        <div className="flex gap-5 justify-between">
          {favorites.map((resort) => (
            <ResortCard title={resort} />
          ))}
        </div>
      </div>
    </div>
  );
}
