import Link from "next/link";

const LandingPage = ({ currentUser, tickets }) => {
  return (
    <div className=" flex flex-col items-center justify-center m-5 gap-5">
      <h1 className=" text-3xl font-bold">Welcome to TrekTicket</h1>
      <p>Find your Tickets Buy and Enjoy</p>
      <div className="flex flex-col">
        {tickets.map((ticket) => {
          return (
            <div key={ticket.id} className=" rounded-xl h-[100px] w-[400px] md:w-[600px] flex justify-around items-center m-5 p-5 shadow-2xl">
              <div className=" min-w-[200px]">
                <p className=" font-bold">Show name</p>
                <h1 className="text-3xl font-bold ">{ticket.title}</h1>
              </div>
              <div className="flex flex-col items-center">
                <p className=" font-bold">price</p>
                <p className=" text-2xl font-medium">{ticket.price}</p>
              </div>
              <div className="flex flex-col gap-2 ">
                <Link href="/tickets/[ticketId]" as={`/tickets/${ticket.id}`}>
                  <button className=" m-5font-medium p-1 rounded shadow-2xl bg-black text-white hover:bg-white hover:text-black">
                    Show Ticket
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
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
