import React from "react";
import TicketCard from "../../components/TicketCard";

const TicketIndex = ({ tickets }) => {
  return (
    <div className=" flex flex-col items-center justify-center m-5 gap-5 mt-24">
      <h1 className=" text-5xl font-bold mb-10 text-center">
        All your Tickets Here.
        <span className=" text-5xl font-bold text-yellow-300">Buy and Enjoy.</span>
      </h1>
      <div className="flex flex-row gap-10 flex-wrap justify-center">
        {tickets.length > 0 ? (
          <TicketCard tickets={tickets} />
        ) : (
          <h1 className=" text-3xl font-bold ">No tickets to show</h1>
        )}
      </div>
    </div>
  );
};

TicketIndex.getInitialProps = async (context, client, currentUser) => {
  const { data } = await client.get("/api/tickets");

  return {
    tickets: data,
  };
};

export default TicketIndex;
