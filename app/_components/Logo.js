import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-4 z-10 rounded-full">
      <Image
        height={"60"}
        src="/logo.svg"
        width={"120"}
        alt="The NestInn Logo"
      />
    </Link>
  );
};
export default Logo;
