import Image from "next/image";

interface CardProps {
  label: string;
  url: string;
  price: number;
  soldOut: boolean;
  popular: boolean;
  rating?: number;
  votes?: number;
}
export default function Card(props: CardProps) {
  return (
    <div className="w-[260px] space-y-3">
      <div
        className="w-full h-40 px-2 py-1 bg-cover bg-center rounded-xl"
        style={{ backgroundImage: `url(${props.url})` }}
      >
        {props.popular ? (
          <span className="px-3 py-1 bg-yellow text-xs rounded-full">Popular</span>
        ) : (
          <></>
        )}
      </div>
      <div className="space-y-1.5">
        <div className="flex justify-between items-center">
          <h4 className="text-white text-lg">{props.label}</h4>
          <p className="inline-block px-2 py-[0.2rem] bg-beige rounded text-brown text-center text-sm">
            ${props.price.toFixed(2)}
          </p>
        </div>
        <div className="flex justify-between items-center text-md">
          <div className="flex items-center space-x-1.5">
            {props.votes && props.rating ? (
              <>
                <Image src="/star-fill.svg" alt="" width={24} height={24} />
                <p className="text-white">
                  <span>{props.rating.toFixed(1)}</span>
                  <span className="text-gray"> ({props.votes} votes)</span>
                </p>
              </>
            ) : (
              <>
                <Image src="/star.svg" alt="" width={24} height={24} />
                <p className="text-gray">No Ratings</p>
              </>
            )}
          </div>
          {props.soldOut ? <p className="text-orange">Sold out</p> : <></>}
        </div>
      </div>
    </div>
  );
}
