import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = `bg-blue-500 ${
    isSticky ? "sticky top-0 z-50 bg-blue-500 shadow-md" : ""
  }`;

  return (
    <div className={navbarClass}>
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4">
            <img
            width={100} height={100}
            src="/logo.png"
            />

          <Link className="navbar__link relative" href="#">
            About US
          </Link>
          <Link className="navbar__link relative" href="#">
            Our Mission
          </Link>
          <Link className="navbar__link relative" href="#">
            Event Details
          </Link>
          <Link className="navbar__link relative" href="#">
            Event Highlights
          </Link>
          <Link className="navbar__link relative" href="#">
            Gifts
          </Link>
          <Link className="navbar__link relative" href="#">
            Reviews
          </Link>
          {/* ... (other links) */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
