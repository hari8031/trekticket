import { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import useRequest from "../../hooks/use-request";
import Router from "next/router";
import Discover from "../../components/Discover";
const OrderShow = ({ order, currentUser }) => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const { doRequest, errors } = useRequest({
    url: "/api/payments",
    method: "post",
    body: {
      orderId: order.id,
    },
    onSuccess: () => Router.push("/orders"),
  });

  useEffect(() => {
    const findTimeLeft = () => {
      const msLeft = new Date(order.expiresAt) - new Date();
      setTimeLeft(Math.round(msLeft / 1000));
    };

    findTimeLeft();
    const timerId = setInterval(findTimeLeft, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [order]);

  if (timeLeft < 0) {
    return (
      <div>
        <h1 className=" text-center text-3xl">Oh No!!!!</h1>
        <div className=" text-center text-6xl font bold">Order Expired</div>
        <p className="text-center m-3 text-1xl font-medium ">
          Go back to ticket and Purchase Again
        </p>
        <Discover />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full md:w-10/12 lg:w-8/12 xl:w-6/12 shadow-slate-950 shadow-2xl  rounded-xl flex flex-col justify-center items-center">
        <div className="m-5 flex items-center gap-5">
          <span className="text-2xl">Time left</span>
          <span className=" text-6xl font-bold">{timeLeft}s</span>
        </div>
        <div className="flex flex-col items-center p-5 md:p-10 gap-3 md:gap-5">
          <div className="flex items-center justify-center gap-3 md:gap-5">
            <span className="text-lg md:text-xl lg:text-2xl font-bold">
              Show Name:
            </span>
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
              {order.ticket.title}
            </h1>
          </div>
          <div className="flex items-center justify-center gap-3 md:gap-5">
            <span className="text-lg md:text-xl lg:text-2xl font-bold">
              Price:
            </span>
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
              {order.ticket.price}
            </h1>
          </div>
        </div>
        <span>**Clock is Ticking Buy now</span>
        <span className=" font-bold m-5 rounded text-white p-3">
          <StripeCheckout
            token={(id) => doRequest({ token: id })}
            stripeKey="pk_test_51NuukySJ9lBwOWecitJvzNrUWpC9UIx0yECEZUg5ziGIFg09qTUoniHoi7hRJzmMtOzsnd401KahvuRFlKDypnNK00Tmi7Qe4J"
            amount={order.ticket.price * 100}
            email={currentUser.email}
          />
        </span>

        {errors}
      </div>
      <Discover />
    </div>
  );
};

OrderShow.getInitialProps = async (context, client) => {
  const { orderId } = context.query;
  const { data } = await client.get(`/api/orders/${orderId}`);

  return { order: data };
};

export default OrderShow;
