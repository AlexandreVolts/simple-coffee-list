import Background from "@/components/Background";
import Card from "@/components/Card";
import coffees from "@/json/coffees.json";

export default function Home() {
  return (
    <main className="min-h-screen bg-black font-dmsans font-semibold">
      <Background />
      <div className="px-24">
        <div className="relative z-10 w-full m-auto mt-28 p-24 bg-brown rounded-lg">
          <h2 className="text-white text-xl text-center">Our collection</h2>
          <h3 className="max-w-[500px] m-auto text-lg text-gray text-center">
            Introducing our Coffee Collection, a selection of unique coffees from
            different roast types and origins, expertly roasted in small batches
            and shipped fresh weekly.
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {coffees.map((coffee) => <Card key={coffee.id} {...coffee} />)}
          </div>
        </div>
      </div>
    </main>
  );
}
