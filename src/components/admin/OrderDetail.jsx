import { useContext } from "react";
import myContext from "../../context/myContext";
import { doc, updateDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";

const OrderDetail = () => {
  const context = useContext(myContext);
  const { getAllOrder, orderDelete } = context;




const handleChangeStatus = async (e, orderId) => {
    const newStatus = e.target.value;
    try {
        // Reference to the order document in Firestore
        const orderRef = doc(fireDB, "orders", orderId);

        // Update the status field in Firestore
        await updateDoc(orderRef, {
            status: newStatus,
            
        });

        // Show success message
        toast.success("Status updated successfully");
    } catch (error) {
        console.error("Error updating status:", error);
        // Show error message
        toast.error("Failed to update status");
    }
};

//   const handleChangeStatus = (e, orderId) => {
//     const newStatus = e.target.value;
// };

  console.log(getAllOrder);
  return (
    <div>
      <div>
        <div className="py-5">
          {/* text  */}
          <h1 className=" text-xl text-pink-300 font-bold">All Order</h1>
        </div>

        {/* table  */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border border-collapse sm:border-separate border-pink-100 text-pink-400">
            <tbody>
              <tr>
                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara"
                >
                  S.No.
                </th>

                {/* <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
                >
                  Order Id
                </th> */}

                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
                >
                  Full Name
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
                >
                  Email Address
                </th>

                {/* <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
                >
                  Phone Number
                </th> */}

                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
                >
                  Book Name
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
                >
                  Book Author
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
                >
                  Publish year
                </th>
                
                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
                >
                  Book Edition
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
                >
                  Details
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
                >
                  Delivery option
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
                >
                  time
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
                >
                  Action
                </th>
              </tr>

              {getAllOrder.map((order, index) => (
                <tr key={index} className="text-pink-300">
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500">
                    {index + 1}
                  </td>
                  {/* <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500">
                    {order.id}
                  </td> */}
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                    {order.name}
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                    {order.email}
                  </td>
                  {/* <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                    {order.phoneNumber}
                  </td> */}
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                    {order.bookName}
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                    {order.bookAuthor}
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                    {order.yearOfPublish}
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                    {order.bookEdition}
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                    {order.otherDetails}
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                    {order.deliveryOption}
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                    {order.date}
                  </td>
                  {/* <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                    {order.time}
                  </td> */}
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                    {order.time &&
                      new Date(order.time.seconds * 1000).toLocaleString()}
                  </td>
                  {/* <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                    {order.status}
                  </td> */}
                  <td 
                  className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase "
                  >
                    <select
                      value={order.status}
                      onChange={(e) => handleChangeStatus(e, order.id)}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </td>
                  <td
                    onClick={() => orderDelete(order.id)}
                    className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 text-red-500 cursor-pointer"
                  >
                    Delete
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
