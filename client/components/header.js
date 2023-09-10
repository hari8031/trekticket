import Link from "next/link";

export default ({ currentUser }) => {
  // Define an array of link objects based on the currentUser status
  const links = [
    !currentUser && { label: "Sign Up", href: "/auth/signup" },
    !currentUser && { label: "Sign In", href: "/auth/signin" },
    currentUser && { label: "Sign Out", href: "/auth/signout" },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => {
      return (
        <Link
          href={href}
          className="font-medium text-1xl border-2 rounded-xl p-3 text-white bg-black hover:bg-white hover:text-black"
          key={href}
        >
          {label}
        </Link>
      );
    });

  return (
    // Render the navigation bar
    <nav className="px-16 p-4 flex flex-col md:flex-row gap-5 md:gap-0 md:justify-between items-center bg-slate-100 ">
      {/* Render the site logo with a link to the home page */}
      <Link href="/" className="font-bold text-3xl">
        TrekTicket
      </Link>

      {/* Render the navigation links */}
      <div className="flex gap-8 justify-center items-center">{links}</div>
    </nav>
  );
};
