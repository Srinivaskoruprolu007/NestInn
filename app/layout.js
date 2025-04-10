import "@/app/_styles/globals.css";
import Header from "./_components/Header";
import { Raleway } from "next/font/google";
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});
export const metadata = {
  title: {
    template: "%s | The NestInn ",
    default: "Welcome to NestInn",
  },
  description: "The Nestinn - Your Soulful Retreat in the Heart of Nature",
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <body
        className={`${raleway.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <header>
          <Header />
        </header>
        <div className="flex-1 px-6 py-10">
          <main className="max-w-7xl mx-auto">{children}</main>
        </div>
      </body>
    </html>
  );
};
export default RootLayout;
