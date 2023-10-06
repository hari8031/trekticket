import { useState } from "react";
import Router from "next/router"
import useRequest from '../../hooks/use-request';

const NewTicket = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/tickets',
    method: 'post',
    body: {
      title,
      price,
    },
    onSuccess: () => Router.push("/"),
  });

  const onSubmit = (event)=>{
    event.preventDefault();

    doRequest()
  }

  const onBlur = () => {
    const value = parseFloat(price);

    if (isNaN(value)) {
      return;
    }

    setPrice(value.toFixed(2));
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className=" text-6xl m-5 text-center">Create new ticket</h1>
      <form className="w-full max-w-[400px] my-3" onSubmit={onSubmit}>
        <div className="flex flex-col my-3">
          <label className=" font-medium">Enter Ticket Title</label>
          <input
            type="text"
            className=" border-gray-300 border-2 rounded-lg h-14 px-5 text-black"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col my-3">
          <label className=" font-medium">Enter ticket Price</label>
          <input
            type="text"
            className=" border-gray-300 border-2 rounded-lg h-14 px-5 text-black"
            value={price}
            onBlur={onBlur}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        {errors}
        <button className=" bg-blue-500 text-white h-14 w-full rounded-full my-3 hover:bg-blue-400 transition duration-300 ease-in-out">
          Save
        </button>
      </form>
    </div>
  );
};

export default NewTicket;
