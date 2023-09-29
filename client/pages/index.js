import ContactForm from "../components/ContactForm";
import Discover from "../components/Discover";
import Reward from "../components/Reward";
import TicketCard from "../components/TicketCard";
import TicketThumbnail from "../components/TicketThumbnail";

const LandingPage = ({ currentUser, tickets }) => {
  return (
    <div className=" flex flex-col items-center justify-center m-5 gap-5 mt-24">
      <h1 className=" text-5xl font-bold mb-10 text-center">
        Find your Tickets Buy.
        <span className=" text-5xl font-bold text-yellow-300"> and Enjoy.</span>
      </h1>
      <div className="flex flex-row gap-10 flex-wrap justify-center">
        {tickets.length > 0 ? (
          <TicketCard tickets={tickets} />
        ) : (
          <h1 className=" text-3xl font-bold ">No tickets to show</h1>
        )}
      </div>
      <TicketThumbnail />
      <Reward />
      <Discover />
    </div>
  );
};

LandingPage.getInitialProps = async (context, client, currentUser) => {
  const { data } = await client.get("/api/tickets");

  return {
    tickets: data,
  };
};

export default LandingPage;
