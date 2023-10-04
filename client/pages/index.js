import Link from "next/link";
import ContactForm from "../components/ContactForm";
import Discover from "../components/Discover";
import Reward from "../components/Reward";
import TicketCard from "../components/TicketCard";
import TicketThumbnail from "../components/TicketThumbnail";

const LandingPage = ({ currentUser, tickets }) => {
  return (
    <>
      {currentUser ? (
        <h1 className=" text-6xl font-bold text-center">{currentUser.email}</h1>
      ) : (
        <h1 className=" text-6xl font-bold text-center">HEY</h1>
      )}
    </>
  );
};

export default LandingPage;
