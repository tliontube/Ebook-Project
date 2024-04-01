import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";

const FormSection = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    // phoneNumber: "",
    bookName: "",
    bookAuthor: "",
    bookEdition: "",
    yearOfPublish: "",
    otherDetails: "",
    deliveryOption: "", // Added deliveryOption state
  });

  const createOrderFunction = async () => {
    // Check if required fields are empty
    if (
      formData.name === "" ||
      formData.email === "" ||
      // formData.phoneNumber === "" ||
      formData.bookName === "" ||
      formData.bookEdition === "" ||
      formData.bookAuthor === "" ||
      formData.yearOfPublish === "" ||
      formData.otherDetails === "" ||
      formData.deliveryOption === "" // Check if deliveryOption is selected
    ) {
      toast.error("All Fields are required");
      return;
    }


    // Validate email format using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Invalid email format");
      return;
    }

    // Validate phone number format using regex
    // const phoneRegex = /^\d{10}$/;
    // if (!phoneRegex.test(formData.phoneNumber)) {
    //   toast.error("Invalid phone number format");
    //   return;
    // }
    setLoading(true);
    try {
      // Create user with email and password
      // const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);

      // Prepare order data
      const order = {
        name: formData.name,
        email: formData.email,
        // phoneNumber: formData.phoneNumber,
        bookName: formData.bookName,
        bookEdition: formData.bookEdition,
        bookAuthor: formData.bookAuthor,
        yearOfPublish: formData.yearOfPublish,
        otherDetails: formData.otherDetails,
        deliveryOption: formData.deliveryOption, // Include deliveryOption in order data
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
        status: "pending",
      };

      // Add order data to Firestore in the "orders" collection
      const ordersRef = collection(fireDB, "orders");
      await addDoc(ordersRef, order);

      // Reset form fields
      setFormData({
        name: "",
        email: "",
        password: "",
        // phoneNumber: "",
        bookName: "",
        bookAuthor: "",
        bookEdition: "",
        yearOfPublish: "",
        otherDetails: "",
        deliveryOption: "", // Reset deliveryOption
      });

      // Show success message
      toast.success("Form Submitted Successfully");
      setLoading(false);

      // Redirect to login page
      navigate("/thankyou");
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Form Failed To Submit ");
    }
  };

  return (
    <div className="flex justify-center items-center ">
      {loading && <Loader />}
      <div className="login_Form bg-pink-50 px-8 py-6 border border-pink-100 rounded-xl shadow-md mt-20">
        <div className="mb-5">
          <h2 className="text-center text-2xl font-bold text-pink-500 ">
            What Are You Looking For?
          </h2>
        </div>
        <div className="mb-3">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 ">Full Name</label>
          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => {
              setFormData({
                ...formData,
                name: e.target.value,
              });
            }}
            spellCheck="false" // Disable spell check
            className="bg-pink-50 border border-pink-200 px-1 py-1 w-96 rounded-md outline-none placeholder-pink-200 text-gray-700"
          />
        </div>
        <div className="mb-3">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => {
              setFormData({
                ...formData,
                email: e.target.value,
              });
            }}
            spellCheck="false" // Disable spell check
            className="bg-pink-50 border border-pink-200 px-1 py-1 w-96 rounded-md outline-none placeholder-pink-200 text-gray-700"
          />
        </div>
        {/* <div className="mb-3">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="text"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={(e) => {
              setFormData({
                ...formData,
                phoneNumber: e.target.value,
              });
            }}
            spellCheck="false" // Disable spell check
            className="bg-pink-50 border border-pink-200 px-1 py-1 w-96 rounded-md outline-none placeholder-pink-200 text-gray-700"
          />
        </div> */}
        <div className="mb-3">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Book Name</label>
          <input
            type="text"
            placeholder="Book Name"
            value={formData.bookName}
            onChange={(e) => {
              setFormData({
                ...formData,
                bookName: e.target.value,
              });
            }}
            spellCheck="false" // Disable spell check
            className="bg-pink-50 border border-pink-200 px-1 py-1 w-96 rounded-md outline-none placeholder-pink-200 text-gray-700"
          />
        </div>

        <div className="mb-3">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Book Edition</label>
          <input
            type="text"
            placeholder="Book Edition"
            value={formData.bookEdition}
            onChange={(e) => {
              setFormData({
                ...formData,
                bookEdition: e.target.value,
              });
            }}
            spellCheck="false" // Disable spell check
            className="bg-pink-50 border border-pink-200 px-1 py-1 w-96 rounded-md outline-none placeholder-pink-200 text-gray-700"
          />
        </div>
        <div className="mb-3">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Book Author</label>
          <input
            placeholder="Book Author"
            value={formData.bookAuthor}
            onChange={(e) => {
              setFormData({
                ...formData,
                bookAuthor: e.target.value,
              });
            }}
            spellCheck="false" // Disable spell check
            className="bg-pink-50 border border-pink-200 px-1 py-1 w-96 rounded-md outline-none placeholder-pink-200 text-gray-700"
          />
        </div>
        <div className="mb-3">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">publish Year</label>
          <input
            placeholder="publish Year"
            value={formData.yearOfPublish}
            onChange={(e) => {
              setFormData({
                ...formData,
                yearOfPublish: e.target.value,
              });
            }}
            spellCheck="false" // Disable spell check
            className="bg-pink-50 border border-pink-200 px-1 py-1 w-96 rounded-md outline-none placeholder-pink-200 text-gray-700"
          />
        </div>
        <div className="mb-3">

        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Other Details</label>
          <textarea
            placeholder="Other Details"
            value={formData.otherDetails}
            onChange={(e) => {
              setFormData({
                ...formData,
                otherDetails: e.target.value,
              });
            }}
            spellCheck="false" // Disable spell check
            className="bg-pink-50 border border-pink-200 px-1 py-1 w-96 rounded-md outline-none placeholder-pink-200 text-gray-700"
          />
        </div>

        {/* Dropdown input for delivery option */}
        <div className="mb-3 text-gray-700">
          <select
            value={formData.deliveryOption}
            onChange={(e) => {
              setFormData({
                ...formData,
                deliveryOption: e.target.value,
              });
            }}
            className="bg-pink-50 border border-pink-200 px-1 py-1 w-96 rounded-md outline-none placeholder-pink-200"
          >
            <option value="" disabled hidden style={{ color: "rgb(216,27,96)" }}>
              Select delivery option
            </option>
            <option value="30 min">30 min / 150rs</option>
            <option value="1 hr">1 hr / 150rs</option>
            <option value="2 hr">2 hr / 125rs</option>
            <option value="4 hr">4 hr / 75rs</option>
            <option value="12 hr">12 hr / 50rs</option>
            <option value="24 hr">24 hr / 25rs</option>
            <option value="45 hr">45 hr / 10rs</option>
          </select>
        </div>
        <div className="mb-5">
          <button
            type="button"
            onClick={createOrderFunction}
            className="bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md "
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
