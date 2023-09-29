import useRequest from "../../hooks/use-request";
import Router from 'next/router'

const TicketShow = ({ ticket }) => {
  const { doRequest, errors } = useRequest({
    url: "/api/orders",
    method: "post",
    body: {
      ticketId: ticket.id,
    },
    onSuccess: (order) => Router.push("/orders/[orderId]",`/orders/${order.id}`),
  });
  console.log(ticket);
  return (
    <div className="flex items-center justify-center m-5">
      <div className="w-full md:w-10/12 lg:w-8/12 xl:w-6/12 shadow-slate-950 shadow-2xl text-black rounded-xl flex flex-col justify-center items-center">
        <h1 className="text-lg md:text-2xl lg:text-3xl font-medium text-center m-5">
          Hey, Buy Your Tickets Now... Hurry Up....
        </h1>
        <div className="flex flex-col items-center p-5 md:p-10 gap-3 md:gap-5">
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
        <button onClick={()=>doRequest()} className=" font-bold m-5  w-full md:w-1/2 bg-black rounded text-white p-3 hover:bg-white hover:text-black">
          Grab Now
        </button>
      </div>
    </div>
  );
};

TicketShow.getInitialProps = async (context, client) => {
  const { ticketId } = context.query;
  console.log(ticketId, "ticketID");
  const { data } = await client.get(`/api/tickets/${ticketId}`);

  return { ticket: data };
};

export default TicketShow;
