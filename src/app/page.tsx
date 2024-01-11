"use client";
import { useState } from "react";
import Card from "@/components/Card";
import Toggle from "@/components/Toggle";
import coffees from "@/json/coffees.json";

export default function Home() {
  const [availableToggled, setAvailableToggled] = useState(false);

  return (
    <main className="min-h-screen bg-black font-dmsans font-semibold">
      <div className="absolute top-0 z-0 w-full h-72 bg-banner bg-cover bg-no-repeat" />
      <div className="px-24">
        <div className="relative z-10 w-full m-auto mt-36 px-32 py-20 space-y-10 bg-brown rounded-xl">
          <div className="flex flex-col items-center space-y-5">
            <div>
              <h2 className="text-white text-xl text-center">Our Collection</h2>
              <h3 className="max-w-[500px] m-auto text-lg text-gray text-center">
                Introducing our Coffee Collection, a selection of unique coffees
                from different roast types and origins, expertly roasted in small
                batches and shipped fresh weekly.
              </h3>
            </div>
            <Toggle value={availableToggled} onToggle={setAvailableToggled} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
            {coffees
              .filter((coffee) => !availableToggled || !coffee.soldOut)
              .map((coffee) => (
                <Card key={coffee.id} {...coffee} />
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
