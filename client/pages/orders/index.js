const OrderIndex = ({ orders }) => {
  return (
    <ul className="flex flex-col items-center justify-center gap-10">
      {orders.map((order) => (
        <li className=" w-1/2 p-5 flex justify-between rounded shadow-2xl shadow-gray-700 gap-3">
          <div className=" flex flex-col">
            <span className="text-1xl ">Title</span>
            <span className="text-2xl w-16">{order.ticket.title}</span>
          </div>
          <div className=" flex flex-col">
            <span className="text-1xl ">Title</span>
            <span className="text-2xl">{order.ticket.price}</span>
          </div>
          <div className=" flex flex-col">
            <span className="text-1xl ">Title</span>
            <span className="text-2xl">{order.status}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

OrderIndex.getInitialProps = async (context, client) => {
  const { data } = await client.get("/api/orders");

  return { orders: data };
};

export default OrderIndex;
