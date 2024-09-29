import { useState } from "react";
import Blackbutton from "./Blackbutton";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    message: "",
    linkedin: "",
    github: "",
    portfolio: "",
    other: "",
  });
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        resume: e.target.files[0],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Kiểm tra thông tin trước khi submit
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.resume
    ) {
      setErrorMessage(
        "Please fill all required fields and upload your resume."
      );
      setErrorOpen(true); // Mở modal thông báo lỗi
      return;
    }

    const allowedTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowedTypes.includes(formData.resume.type)) {
      setErrorMessage("Invalid file type. Please upload a PDF or DOCX file.");
      setErrorOpen(true); // Mở modal thông báo lỗi
      return;
    }

    // Nếu tất cả điều kiện hợp lệ
    setSuccessOpen(true); // Mở modal thông báo thành công
  };

  const handleSuccessClose = () => {
    setSuccessOpen(false);
    navigate("/success"); // Chuyển hướng sau khi đóng modal thành công
  };

  const handleErrorClose = () => {
    setErrorOpen(false); // Đóng modal thông báo lỗi
  };

  return (
    <div className="py-10 px-10 md:px-80">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white p-8 rounded-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Submit Your Application
        </h2>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Nguyen Van A"
          className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="youremail@gmail.com"
          className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="(+84) 936 456 789"
          className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />

        <div className="flex items-center space-x-4">
          <label className="flex-shrink-0 bg-gray-100 p-3 rounded-lg cursor-pointer border border-gray-300">
            <input
              type="file"
              name="resume"
              onChange={handleFileUpload}
              className="hidden"
              required
            />
            <span>Add Résumé</span>
          </label>
          <p className="text-sm text-gray-500">
            Resume should be a PDF under 10MB.
          </p>
        </div>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Your Message"
          className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rows="4"
        />

        <div>
          <p className="text-sm font-semibold text-gray-600 mb-2">
            Optionally, include links to your social media profiles.
          </p>

          <input
            type="text"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleInputChange}
            placeholder="linkedin.com/in/ handle"
            className="w-full border border-gray-300 p-3 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="text"
            name="github"
            value={formData.github}
            onChange={handleInputChange}
            placeholder="github.com/ handle"
            className="w-full border border-gray-300 p-3 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="text"
            name="portfolio"
            value={formData.portfolio}
            onChange={handleInputChange}
            placeholder="https:// portfolio.com"
            className="w-full border border-gray-300 p-3 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="text"
            name="other"
            value={formData.other}
            onChange={handleInputChange}
            placeholder="https:// other-site.com"
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="text-center">
          <Blackbutton text="Apply" />
        </div>

        {/* Modal thông báo thành công */}
        <Dialog open={successOpen} onClose={handleSuccessClose}>
          <DialogContent>
            <div className="flex flex-col justify-center items-center">
              <img src="./src/assets/bigiconcheck.svg" alt="" />
              <h1 className="text-3xl font-bold">Thank You!</h1>
              <p className="text-gray-500">
                Your submission has been successfully sent.
              </p>
              <DialogActions>
                <div className="flex flex-col justify-center items-center bg-black text-white rounded-md px-5">
                  <Button
                    onClick={handleSuccessClose}
                    size="large"
                    color="inherit"
                  >
                    CLOSE
                  </Button>
                </div>
              </DialogActions>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog open={errorOpen} onClose={handleErrorClose}>
          <DialogContent>
            <div className="flex flex-col justify-center items-center">
              <img src="./src/assets/error.svg" alt="" />
              <h1 className="text-3xl font-bold">Something went wrong</h1>
              <p className="text-gray-500">
                An unknown error occurred. Please try again after a while.
              </p>
              <DialogActions>
                <div className="flex flex-col justify-center items-center bg-black text-white rounded-md px-5">
                  <Button
                    onClick={handleErrorClose}
                    size="large"
                    color="inherit"
                  >
                    CLOSE
                  </Button>
                </div>
              </DialogActions>
            </div>
          </DialogContent>
        </Dialog>
      </form>
    </div>
  );
};

export default ApplicationForm;
