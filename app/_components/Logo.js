import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-4 z-10 rounded-full">
      <Image
        height={"60"}
        src="/logo.png"
        width={"60"}
        alt="The NestInn Logo"
      />
      <span className="text-xl font-semibold text-primary-100">
        The NestInn
      </span>
    </Link>
  );
};
export default Logo;
