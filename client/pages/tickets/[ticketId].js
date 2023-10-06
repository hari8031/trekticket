import TicketThumbnail from "../../components/TicketThumbnail";
import useRequest from "../../hooks/use-request";
import Router from "next/router";

const TicketShow = ({ ticket }) => {
  const { doRequest, errors } = useRequest({
    url: "/api/orders",
    method: "post",
    body: {
      ticketId: ticket.id,
    },
    onSuccess: (order) =>
      Router.push("/orders/[orderId]", `/orders/${order.id}`),
  });
  console.log(ticket);
  return (
    <>
      <div className="flex flex-col items-center justify-center m-24">
        <h1 className=" text-5xl font-bold mb-10 text-center">
          Hey, Buy Your Tickets Now...
          <span className=" text-5xl font-bold text-yellow-300">
            Hurry Up....
          </span>
        </h1>
        <div className="w-full md:w-10/12 lg:w-8/12 xl:w-6/12 shadow-slate-950 shadow-2xl rounded-xl flex flex-col justify-center items-center">
          <div className="flex flex-col items-center mt-5 gap-3 md:gap-5">
            <div className="flex items-center justify-center gap-3 md:gap-5">
              <span className="text-lg md:text-xl lg:text-2xl font-bold">
                Show Name:
              </span>
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
                {ticket.title}
              </h1>
            </div>
            <div className="flex items-center justify-center gap-3 md:gap-5">
              <span className="text-lg md:text-xl lg:text-2xl font-bold">
                Price:
              </span>
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
                {ticket.price}
              </h1>
            </div>
          </div>
          {errors}
          <button
            onClick={() => doRequest()}
            className=" text-3xl font-bold m-5  w-1/3 rounded text-white p-3 hover:bg-white hover:text-black"
          >
            Grab Now
          </button>
        </div>
      </div>
      <TicketThumbnail />
    </>
  );
};

TicketShow.getInitialProps = async (context, client) => {
  const { ticketId } = context.query;
  console.log(ticketId, "ticketID");
  const { data } = await client.get(`/api/tickets/${ticketId}`);

  return { ticket: data };
};

export default TicketShow;
