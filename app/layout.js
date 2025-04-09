import Navigation from "./components/Navigation";
import Logo from "./components/Logo";

export const metadata = {
  title: "The Nestinn",
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
};
export default RootLayout;
