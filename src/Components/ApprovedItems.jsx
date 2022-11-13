import { Link } from "react-router-dom";
import React, { useContext } from "react";
import DataContext from "../Context/DataContext";

function ApprovedItems({ approveds }) {
  const { url } = useContext(DataContext);

  return (
    <section className="mt-10 p-2">
      <h1 className="text-center text-3xl font-semi-bold">ORDERS PAGE</h1>
      <div className="flex [&>*]:mx-3 text-lg justify-center">
        <Link to="/orderspage">
          <p>APPROVED</p>
        </Link>
        <Link to="/pending" className="text-sky-500 ">
          <p>PENDING</p>
        </Link>
        <Link to="/cancelled">
          <p>CANCELLED</p>
        </Link>
      </div>

      <div className="my-4 p-2 text-sm ">
        {approveds.map((approveds) => (
          <div className="my-3 border-b-2 p-2">
            <div className="flex justify-between">
              <p>
                <span>ORDER CODE</span> {approveds.order_ref_code}
              </p>
              <p className="text-gray-400">{approveds.modified.slice(0, 10)}</p>
            </div>

            <div className="">
              {approveds.items.map((item) => {
                return (
                  <div className="flex my-3">
                    <img
                      className="w-[70px] object-cover"
                      src={`${url}${item.image}`}
                      alt={item.item}
                    />
                    <div className="ml-3">
                      <p className="w-40 truncate font-semibold">{item.item}</p>

                      <p className="text-sm">GHC {item.unit_price}</p>

                      <p>
                        <span className="font-semibold">QTY:</span> {item.qty}{" "}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between">
              <p className="text-gray-400">{approveds.buyer.name}</p>
              <p className="text-sky-500 uppercase">{approveds.order_status}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ApprovedItems;
