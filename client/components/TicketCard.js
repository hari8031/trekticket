import Link from "next/link";
const TicketCard = ({ tickets }) => {
  return (
    <>
      {tickets.map((ticket) => {
        return (
          <div key={ticket.id} className=" min-w-[300px] min-h-[100px] rounded-lg  shadow-2xl shadow-gray-700 flex flex-col md:flex-row justify-center p-5">
            <div className=" flex flex-col items- justify-center">
              <span>Show Name :<span className="text-2xl"> {ticket.title}</span></span>
              <span>Price :<span className="text-2xl"> {ticket.price}</span></span>
              <Link className="w-1/3 text-center rounded bg-white text-black hover:text-black hover:bg-gray-100 " href={`/tickets/${ticket.id}`}>show</Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TicketCard;
