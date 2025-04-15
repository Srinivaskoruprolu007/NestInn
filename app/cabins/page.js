import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "../_lib/data-service";

export const metadata = {
  title: "Cabins",
};

export default async function Page() {
  // CHANGE
  const cabins = await getCabins();
  

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Serene Cottages
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Nestled amidst the lush greenery of the Indian hills, our cottages at
        NestInn offer the perfect blend of tradition and luxury. Wake up to the
        melodies of birds, unwind in the warm embrace of nature, and sip your
        evening chai on a private sit-out as the sun sets behind the mountains.
        Whether you&apos;re here for peace, exploration, or a soulful break —
        NestInn welcomes you with open arms and heartfelt hospitality.
      </p>

      {cabins.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {cabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
    </div>
  );
}
