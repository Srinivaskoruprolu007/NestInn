import { UserIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const CabinCard = ({ cabin }) => {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="flex border-primary-800 border relative">
      <div className="flex-1 relative">
        <Image
          src={image}
          alt={`Image of cabin ${name}`}
          className="object-cover border-r border-primary-800 "
          fill
        />
      </div>
      <div className="flex-grow">
        <div className="pt-5 pb-4 px-7 bg-primary-950">
          <h3 className="text-accent-500 font-semibold text-2xl mb-3">
            Cabin {name}
          </h3>
          <div className="flex gap-3 items-center mb-2">
            <UserIcon className="size-5 text-primary-600" />
            <p className="text-lg text-primary-200">
              For up to <span>{maxCapacity} guests</span>
            </p>
          </div>
          <p className="flex gap-3 justify-end items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-3xl font-[350]">
                  ${regularPrice - discount}
                </span>
                <span className="text-xl line-through text-primary-600">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-3xl font-[350]">${regularPrice}</span>
            )}
            <span className="text-lg text-primary-200">/night</span>
          </p>
        </div>
        <div className="bg">
          <Link
            href={`/cabins/${id}`}
            className="border-l border-primary-800 py-4 px-6 inline-block hover:bg-accent-600 transition-all hover-text-primary-950"
          >
            View details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CabinCard;
