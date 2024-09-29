import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { Textcenter } from "../components/Textcenter";
function About() {
  return (
    <>
      <div>
        <Navbar />
        <div className="relative mb-10">
          <Textcenter text="About Us" subclass="font-semibold" />
          <p className="text-textAb mt-4 px-4 text-2xl mx-auto max-w-6xl leading-10 text-center">
            We have more than 5 years of expertise offering financial service
            solutions, and assisting customers in approaching circumstances
            flexibly and proactively.
          </p>
          <img
            src="./src/assets/background2.svg"
            alt=""
            className="w-full absolute top-0 left-0 z-0"
          />
        </div>
        <div className="relative py-10 px-5 md:px-20 bg-[#F5F5F5] ">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-10 md:space-y-0 w-full ">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="w-10 h-1 bg-blue-600 mb-4"></div>
                <h2 className="text-3xl font-semibold">OUR STORY</h2>
              </div>
              <p className="mt-4 text-lg leading-7 text-gray-700">
                Teqnological Asia Ltd., is a software development enterprise
                established in 2017. We have delivered more than 20 applications
                and services to especially, Japanese market, and other nations
                on the global scale.
                <br />
                <br />
                Currently, we are playing a central role as a software
                development center for
                <a
                  href="https://finatext.com"
                  className="text-blue-600 underline ml-1"
                >
                  Finatext Holding
                </a>
                .
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="./src/assets/three.png"
                alt="Chart"
                className="w-96 md:w-1/2"
              />
            </div>
          </div>
        </div>

        <div className="relative py-10 px-5 md:px-20">
          <div className="w-10 h-1 bg-blue-600 mb-4"></div>
          <h2 className="text-3xl font-semibold">OUR CAPABILITIES</h2>
        </div>
        <div className="px-5 md:px-20 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="border-l-4 border-gray-300 pl-5 bg-[#F5F5F5] h-44 py-5">
              <h3 className="text-xl font-semibold">Design infrastructure</h3>
              <p className="mt-2 text-lg text-gray-700">
                We can operate infrastructure automation on any cloud services
                with Terraform. By composing infrastructure as code in a
                Terraform file using HCL, resources can be provided from any
                infrastructure provider.
              </p>
            </div>

            <div className="border-l-4 border-gray-300 pl-5 bg-[#F5F5F5] py-5">
              <h3 className="text-xl font-semibold">Software development</h3>
              <p className="mt-2 text-lg text-gray-700">
                One of our foremost capabilities is the ability to create custom
                software solutions from scratch.
              </p>
            </div>

            <div className="border-l-4 border-gray-300 pl-5 bg-[#F5F5F5] h-44 py-5">
              <h3 className="text-xl font-semibold">
                Software Testing and Quality Assurance
              </h3>
              <p className="mt-2 text-lg text-gray-700">
                We offer high-quality testing and assurance services to ensure
                software quality.
              </p>
            </div>

            <div className="border-l-4 border-gray-300 pl-5 bg-[#F5F5F5] py-5">
              <h3 className="text-xl font-semibold">Maintenance and Support</h3>
              <p className="mt-2 text-lg text-gray-700">
                At Teqnological Asia, clients are certainly provided with
                maintenance and support services.
              </p>
            </div>
          </div>
        </div>
        <div className="py-10 px-5 md:px-20 bg-[#F5F5F5] mt-10 mb-10">
          <div className="w-10 h-1 bg-blue-600 mb-4"></div>
          <h2 className="text-3xl font-semibold">OUR CAPABILITIES</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-10">
            <div className="border-l-4 border-gray-300 pl-5 bg-[#F5F5F5]">
              <div className="bg-white p-5 ">
                <h3 className="text-xl font-semibold">Design infrastructure</h3>
                <p className="mt-2 text-lg text-gray-700">
                  Guarantee all projects would be success
                </p>
              </div>
              <div className="bg-[#B6B6B6] p-10 flex items-center justify-center">
                <img
                  src="./src/assets/pjteam.svg"
                  alt=""
                  className="h-64 overflow-hidden"
                />
              </div>
            </div>

            <div className="border-l-4 border-gray-300 pl-5 bg-[#F5F5F5]">
              <div className="bg-white p-5 ">
                <h3 className="text-xl font-semibold">Software development</h3>
                <p className="mt-2 text-lg text-gray-700">
                  Make your business shine on the web
                </p>
              </div>
              <div className="bg-[#B6B6B6] p-10 flex items-center justify-center">
                <img
                  src="./src/assets/dvteam.svg"
                  alt=""
                  className="h-64 overflow-hidden"
                />
              </div>
            </div>

            <div className="border-l-4 border-gray-300 pl-5 bg-[#F5F5F5]">
              <div className="bg-white p-5 ">
                <h3 className="text-xl font-semibold">
                  Software Testing and QA
                </h3>
                <p className="mt-2 text-lg text-gray-700">
                  Assurance all output were better
                </p>
              </div>
              <div className="bg-[#B6B6B6] p-10 flex items-center justify-center">
                <img
                  src="./src/assets/qcteam.svg"
                  alt=""
                  className="h-64 overflow-hidden"
                />
              </div>
            </div>

            <div className="border-l-4 border-gray-300 pl-5 bg-[#F5F5F5]">
              <div className="bg-white p-5 ">
                <h3 className="text-xl font-semibold">
                  Maintenance and Support
                </h3>
                <p className="mt-2 text-lg text-gray-700">
                  Harmonizing technology and business dynamics
                </p>
              </div>
              <div className="bg-[#B6B6B6] p-10 flex items-center justify-center">
                <img
                  src="./src/assets/brSEteam.svg"
                  alt=""
                  className="h-64 overflow-hidden"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative py-10 px-5 md:px-20">
          <div className="w-10 h-1 bg-blue-600 mb-4"></div>
          <h2 className="text-3xl font-semibold">OUR PROFILE</h2>
          <div className="w-full mx-auto my-8 p-6 rounded-lg shadow-lg">
            <table className="w-full text-left border-collapse">
              <tbody>
                <tr className="border-b-2">
                  <th className="px-4 py-2 font-medium text-gray-700 bg-[#F5F5F5]">
                    Company Name
                  </th>
                  <td className="px-4 py-2 bg-[#F5F5F5] border-l-2">
                    Teqnological Asia Ltd.
                  </td>
                </tr>
                <tr className="border-b-2">
                  <th className="px-4 py-2 font-medium text-gray-700 bg-[#F5F5F5]">
                    Representative
                  </th>
                  <td className="px-4 py-2 bg-[#F5F5F5] border-l-2">
                    Le Hoai Nam
                  </td>
                </tr>
                <tr className="border-b-2">
                  <th className="px-4 py-2 font-medium text-gray-700 bg-[#F5F5F5]">
                    Head Office
                  </th>
                  <td className="px-4 py-2 bg-[#F5F5F5] border-l-2">
                    No. 301, Floor 3, Block B, Waseco Plaza, 10 Pho Quang, Ward
                    2, Tan Binh, Ho Chi Minh City, Vietnam
                  </td>
                </tr>
                <tr className="border-b-2">
                  <th className="px-4 py-2 font-medium text-gray-700 bg-[#F5F5F5]">
                    Phone Number
                  </th>
                  <td className="px-4 py-2 bg-[#F5F5F5] border-l-2">
                    (+84) 335 3335 88
                  </td>
                </tr>
                <tr className="border-b-2">
                  <th className="px-4 py-2 font-medium text-gray-700 bg-[#F5F5F5]">
                    Email
                  </th>
                  <td className="px-4 py-2 bg-[#F5F5F5] border-l-2">
                    contact@teqnological.asia
                  </td>
                </tr>
                <tr className="border-b-2">
                  <th className="px-4 py-2 font-medium text-gray-700 bg-[#F5F5F5]">
                    Established
                  </th>
                  <td className="px-4 py-2 bg-[#F5F5F5] border-l-2">
                    October 26, 2017
                  </td>
                </tr>
                <tr className="border-b-2">
                  <th className="px-4 py-2 font-medium text-gray-700 bg-[#F5F5F5]">
                    Capital
                  </th>
                  <td className="px-4 py-2 bg-[#F5F5F5] border-l-2">
                    $100,000
                  </td>
                </tr>
                <tr className="">
                  <th className="px-4 py-2 font-medium text-gray-700 bg-[#F5F5F5]">
                    Employees (2023)
                  </th>
                  <td className="px-4 py-2 bg-[#F5F5F5] border-l-2">83</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-full mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.7275813921955!2d106.67565037475804!3d10.762912061074394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175291f1a124a67%3A0xc0e2d07e31af39dd!2sTan%20Binh%20District%2C%20Ho%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2sus!4v1634053099341!5m2!1sen!2sus"
            width="100%"
            height="900"
            loading="lazy"
            className="rounded-md border border-gray-200"
          ></iframe>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default About;
