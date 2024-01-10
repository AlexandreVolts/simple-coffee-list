import Image from "next/image";

interface CardProps {
  label: string;
  url: string;
  price: number;
  rating?: number;
  votes?: number;
}
export default function Card(props: CardProps) {
  return (
    <div className="space-y-3">
      <div
        className="w-full h-40 bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${props.url})` }}
      />
      <div>
        <div className="flex justify-between items-center">
          <h4 className="text-white text-md">{props.label}</h4>
          <p className="inline-block px-2 py-0.5 bg-beige rounded text-brown text-center text-sm">
            ${props.price.toFixed(2)}
          </p>
        </div>
        <div className="flex">
          <div className="flex items-center">
            {props.votes && props.rating ? (
              <>
                <Image src="/star-fill.svg" alt="" width={24} height={24} />
                <p className="text-md text-white">
                  <span>{props.rating.toFixed(1)}</span>
                  <span className="text-gray"> ({props.votes} votes)</span>
                </p>
              </>
            ) : (
              <>
                <Image src="/star.svg" alt="" width={24} height={24} />
                <p className="text-xs text-gray">No Ratings</p>
              </>
            )}
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}
