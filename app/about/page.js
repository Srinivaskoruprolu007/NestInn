import Image from "next/image";
import Link from "next/link";
import about from "@/public/about.png";
import about2 from "@/public/about-1.png";

export const metadata = {
  title: "About",
};
export default function Page() {
  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Welcome to NestInn
        </h1>

        <div className="space-y-8">
          <p>
            Discover the serene charm of India&apos;s natural beauty at NestInn
            — where tradition, comfort, and hospitality unite. Nestled in the
            misty hills of the Western Ghats, it’s your peaceful escape from the
            busy world.
          </p>
          <p>
            Our boutique cottages are designed to reflect India&apos;s warmth
            and culture, offering not just a stay but a soulful retreat. Whether
            it&apos;s sipping chai at sunrise, trekking through spice
            plantations, or simply relaxing in a traditional swing — NestInn
            brings simplicity and luxury together.
          </p>
          <p>
            At NestInn, every moment is a celebration of togetherness, nature,
            and timeless memories. Come experience soulful hospitality in the
            lap of nature.
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image
          src={about}
          alt="Guests enjoying a bonfire outside a cottage at NestInn"
        />
      </div>

      <div className="col-span-2 aspect-square relative">
        <Image
          src="/about-1.png"
          fill
          className="object-cover"
          alt="The family that runs NestInn resort"
        />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Family-run hospitality since 1985
        </h1>

        <div className="space-y-8">
          <p>
            NestInn has been lovingly managed by our family for generations.
            What began as a humble homestay in 1985 is now a cherished retreat,
            crafted with care and cultural richness.
          </p>
          <p>
            We’ve preserved the traditional values of Indian hospitality while
            offering modern comforts. Here, you’re not just a guest — you’re
            family. Come experience heartfelt warmth, delicious home-cooked
            meals, and personalized service at NestInn.
          </p>

          <div>
            <Link
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Explore our cozy cottages
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
