import { useState } from "react";
import Blackbutton from "./Blackbutton";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Phone Number is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle form submission
      console.log("Form submitted:", formData);
      setErrors({});
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg ">
      <h2 className="text-xl font-semibold mb-6">Contact Us</h2>
      <p className="text-red-500 mb-4">All fields are required</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="w-full">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full p-3 border ${
              errors.fullName ? "border-red-500" : "border-gray-300"
            } rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.fullName && (
            <p className="text-red-500 mt-2">{errors.fullName}</p>
          )}
        </div>
        <div className="w-full">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.email && <p className="text-red-500 mt-2">{errors.email}</p>}
        </div>
        <div className="w-full">
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className={`w-full p-3 border ${
              errors.phoneNumber ? "border-red-500" : "border-gray-300"
            } rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.phoneNumber && (
            <p className="text-red-500 mt-2">{errors.phoneNumber}</p>
          )}
        </div>
        <div className="w-full">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className={`w-full p-3 border ${
              errors.message ? "border-red-500" : "border-gray-300"
            } rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.message && (
            <p className="text-red-500 mt-2">{errors.message}</p>
          )}
        </div>
        <div className="text-right">
          <Blackbutton text="Submit" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
