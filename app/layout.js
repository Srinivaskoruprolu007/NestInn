import "@/app/_styles/globals.css";
import Header from "./_components/Header";

export const metadata = {
  title: "The Nestinn",
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <body className="bg-primary-950 text-white">
        <header>
          <Header />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
};
export default RootLayout;
