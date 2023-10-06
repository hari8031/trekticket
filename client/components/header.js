import Link from "next/link";

export default ({ currentUser }) => {
  // Define an array of link objects based on the currentUser status
  const links = [
    !currentUser && { label: "Sign Up", href: "/auth/signup" },
    !currentUser && { label: "Sign In", href: "/auth/signin" },
    currentUser && { label: "Sell Ticket", href: "/tickets/new" },
    currentUser && { label: "Sign Out", href: "/auth/signout" },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => {
      return (
        <Link
          href={href}
          className="font-medium text-1xl rounded-xl p-3 text-black  bg-white hover:bg-gray-200 hover:text-black"
          key={href}
        >
          {label}
        </Link>
      );
    });

  return (
    // Render the navigation bar
    <nav className="px-16 p-4 flex gap-5 md:gap-0 justify-between items-center ">
      {/* Render the site logo with a link to the home page */}
      <Link href="/" className="font-bold text-3xl md:block hidden text-white">
        TrekTicket
      </Link>
      <Link
        href="/"
        className="md:hidden font-bold text-black text-3xl p-2 bg-white rounded-xl "
      >
        TT
      </Link>

      {/* Render the navigation links */}
      <div className="flex gap-8 justify-center items-center">{links}</div>
    </nav>
  );
};
