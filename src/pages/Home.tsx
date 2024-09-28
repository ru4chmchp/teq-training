import Blackbutton from "../components/Blackbutton";
import { Carouselintro } from "../components/Carouselintro";
import Navbar from "../components/Navbar";
import { Textcenter } from "../components/Textcenter";
function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Textcenter
        text="Elevate Your Business With Our Premium Solutions"
        subtext="For Web - Mobile - Backend"
        subclass="relative font-extrabold"
      />
      <div className="text-center pt-10 z-20 relative">
        <Blackbutton text="ABOUT US" />
      </div>
      <div className="md:flex flex-col items-center">
        <img
          src="./src/assets/background1.svg"
          alt=""
          className="mx-auto block w-full my-0 py-0 object-cover absolute top-52 left-0 z-0"
        />
        <div className="md:pt-96 mb-10">
          <Textcenter text="Our Solutions" subclass="font-semibold" />
          <p className="text-mainGray mt-4 px-4 text-2xl mx-auto max-w-6xl leading-10 text-center">
            We have more than 5 years of expertise offering financial service
            solutions, and assisting customers in approaching circumstances
            flexibly and proactively.
          </p>
        </div>
        <Carouselintro />
        <Textcenter text="About US" subclass="font-semibold mt-3 pt-5" />
        <p className="text-mainGray mt-4 px-4 text-2xl mx-auto max-w-6xl leading-10 text-center">
          Confident and passionate in our capabilities to engineer extraordinary
          products
        </p>
        <div className="flex justify-between items-stretch gap-4 mt-7">
          <div className="flex flex-col justify-center items-center w-1/3 h-20 p-6 border-4 border-transparent bg-[#FFF8FB] rounded-sm gradient-border-pink">
            <h3 className="text-3xl font-bold bg-gradient-to-t from-[#e432b3] to-[#faa2a2] bg-clip-text text-transparent ">
              Creativity
            </h3>
          </div>
          <div className="flex flex-col justify-center items-center w-1/3 h-20 p-6 border-4 border-transparent bg-[#F5F9FD] rounded-sm gradient-border-blue">
            <h3 className="text-3xl font-bold bg-gradient-to-t from-[#0052F0] to-[#8BD7FF] bg-clip-text text-transparent">
              Intellect
            </h3>
          </div>
          <div className="flex flex-col justify-center items-center w-1/3 h-20 p-6 border-4 border-transparent bg-[#FDF8F2] rounded-sm gradient-border-orange">
            <h3 className="text-3xl font-bold bg-gradient-to-t from-[#FF8400] to-[#F0CE93] bg-clip-text text-transparent">
              Dedication
            </h3>
          </div>
        </div>
        <div className=" mt-10 relative w-full p-2 bg-slate-50">
          <img
            src="./src/assets/videoteq.svg"
            alt=""
            className="w-full h-auto"
          />
          <img
            src="./src/assets/logo.svg"
            alt=""
            className="absolute top-1/2 left-1/2 z-10 w-96 h-auto transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <div className="mb-10">
          <Textcenter
            text="our products"
            subclass="text-[#616161] font-semibold text-2xl"
          />
        </div>
        <div className="flex justify-around items-center bg-gray-100 w-full gap-32">
          <div className="flex flex-col items-center">
            <img
              src="./src/assets/offwork.svg"
              alt="Offwork Icon"
              className="w-10 h-10"
            />
            <p className="text-mainGray mt-2 text-sm">Offwork</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="./src/assets/accounthub.svg"
              alt="AccountsHub Icon"
              className="w-10 h-10"
            />
            <p className="text-mainGray mt-2 text-sm">AccountsHub</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="./src/assets/recruihub.svg"
              alt="RecruitHub Icon"
              className="w-10 h-10"
            />
            <p className="text-mainGray mt-2 text-sm">RecruitHub</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="./src/assets/reviewicon.svg"
              alt="Review360 Icon"
              className="w-10 h-10"
            />
            <p className="text-mainGray mt-2 text-sm">Review360</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="./src/assets/eazyprocess.svg"
              alt="EazyProcess Icon"
              className="w-10 h-10"
            />
            <p className="text-mainGray mt-2 text-sm">EazyProcess</p>
          </div>
          <div className="flex flex-col items-center bg-white p-4 shadow-md ">
            <img
              src="./src/assets/eazymock.svg"
              alt="EazyMock Icon"
              className="w-10 h-10"
            />
            <p className="text-orange-500 font-bold mt-2 text-sm">EazyMock</p>
          </div>
        </div>
        <div className="flex items-center p-4 rounded-lg my-10">
          <div className="flex items-center space-x-3">
            <img
              src="./src/assets/eazymock.svg"
              alt="EazyMock Logo"
              className="w-8 h-8"
            />
            <h2 className="font-bold text-lg text-gray-700">EazyMock</h2>
          </div>
          <div className="border-l h-6 mx-4 border-black"></div>
          <p className="text-mainGray">
            Create and manage mock APIs to develop and test app's interaction
          </p>
        </div>
        <div className="w-full">
          <img
            src="./src/assets/backgroundezprocess.svg"
            alt=""
            className="w-full"
          />
        </div>
        <div className="mb-10">
          <Textcenter
            text="our partner"
            subclass="text-[#616161] font-semibold text-2xl"
          />
        </div>
        <div className="flex justify-between items-stretch gap-4 my-3">
          <div className="flex flex-col justify-center items-center w-1/3 h-20 p-6 border-4 border-transparent bg-[#F5F5F5] rounded-sm gradient-border-black">
            <img src="./src/assets/finatext.svg" alt="" />
          </div>
          <div className="flex flex-col justify-center items-center w-1/3 h-20 p-6 border-4 border-transparent bg-[#F5F9FD] rounded-sm gradient-border-blue">
            <img src="./src/assets/nletter.svg" alt="" />
          </div>
          <div className="flex flex-col justify-center items-center w-1/3 h-20 p-6 border-4 border-transparent bg-[#FDF8F2] rounded-sm gradient-border-orange">
            <img src="./src/assets/smart.svg" alt="" />
          </div>
        </div>
        <div className="w-full border-dashed border-2 my-10"></div>
        <Textcenter text="We are Hiring" subclass="font-semibold pt-0 mt-0" />
        <p className="text-mainGray mt-4 px-4 text-2xl mx-auto max-w-6xl leading-10 text-center">
          Become a part of our team and build your bright future
        </p>
        <div className="text-center pt-10 z-20 relative">
          <Blackbutton text="JOIN US" />
        </div>
        <div className="flex flex-row items-stretch justify-center gap-10 mt-7">
          <div className="flex-1 max-w-full">
            <img src="./src/assets/map.svg" alt="" />
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex flex-row p-7 bg-white m-2 border-2 rounded-md flex-1 gap-3">
              <img src="./src/assets/data.svg" alt="" />
              <div>
                <h3 className="font-bold mt-1 px-1">Backend</h3>
                <p className="text-mainGray mt-1 px-1 text-sm">
                  Design database, develop API and other backend Services
                </p>
              </div>
            </div>
            <div className="flex flex-row p-7 bg-white m-2 border-2 rounded-md flex-1 gap-3">
              <img src="./src/assets/data.svg" alt="" />
              <div>
                <h3 className="font-bold mt-1 px-1">Backend</h3>
                <p className="text-mainGray mt-1 px-1 text-sm">
                  Design database, develop API and other backend Services
                </p>
              </div>
            </div>
            <div className="flex flex-row p-7 bg-white m-2 border-2 rounded-md flex-1 gap-3">
              <img src="./src/assets/data.svg" alt="" />
              <div>
                <h3 className="font-bold mt-1 px-1">Backend</h3>
                <p className="text-mainGray mt-1 px-1 text-sm">
                  Design database, develop API and other backend Services
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative grid grid-cols-4 gap-40 mt-7">
          <div className="flex flex-col items-center relative z-10">
            <div className="border-2 rounded-full border-black">
              <img src="./src/assets/cv.svg" alt="" className="p-2 m-2" />
            </div>
            <div className="border-l h-6 w-1 border-black mx-auto border-dashed "></div>
            <div className="p-1 rounded-full bg-black mx-auto border-2 h-4 w-4"></div>
          </div>

          <div className="flex flex-col items-center relative z-10">
            <div className="border-2 rounded-full border-black">
              <img src="./src/assets/cv.svg" alt="" className="p-2 m-2" />
            </div>
            <div className="border-l h-6 w-1 border-black mx-auto border-dashed "></div>
            <div className="p-1 rounded-full bg-black mx-auto border-2 h-4 w-4"></div>
          </div>

          <div className="flex flex-col items-center relative z-10">
            <div className="border-2 rounded-full border-black">
              <img src="./src/assets/cv.svg" alt="" className="p-2 m-2" />
            </div>
            <div className="border-l h-6 w-1 border-black mx-auto border-dashed "></div>
            <div className="p-1 rounded-full bg-black mx-auto border-2 h-4 w-4"></div>
          </div>

          <div className="flex flex-col items-center relative z-10">
            <div className="border-2 rounded-full border-black">
              <img src="./src/assets/cv.svg" alt="" className="p-2 m-2" />
            </div>
            <div className="border-l h-6 w-1 border-black mx-auto border-dashed "></div>
            <div className="p-1 rounded-full bg-black mx-auto border-2 h-4 w-4"></div>
          </div>
          <div className="absolute bottom-2 left-1/2 w-[120%] h-0.5 bg-black z-0 transform -translate-x-1/2"></div>
        </div>
        <div className="w-full border-dashed border-2 my-10"></div>
        <Textcenter text="Lastest News" subclass="font-semibold pt-0 mt-0" />
        <div className="grid grid-cols-3 gap-5">
          <div className="p-2 bg-slate-50 border-2 rounded-md">
            <img src="./src/assets/happywomen1.svg" alt="" className="w-full" />
            <div>
              <h3 className="font-bold mt-1 px-1">Backend</h3>
              <p className="text-mainGray mt-1 px-1 text-sm">
                Design database, develop API and other backend Services
              </p>
            </div>
          </div>
          <div className="p-2 bg-slate-50 border-2 rounded-md">
            <img src="./src/assets/happywomen1.svg" alt="" className="w-full" />
            <div>
              <h3 className="font-bold mt-1 px-1">Backend</h3>
              <p className="text-mainGray mt-1 px-1 text-sm">
                Design database, develop API and other backend Services
              </p>
            </div>
          </div>
          <div className="p-2 bg-slate-50 border-2 rounded-md">
            <img src="./src/assets/happywomen1.svg" alt="" className="w-full" />
            <div>
              <h3 className="font-bold mt-1 px-1">Backend</h3>
              <p className="text-mainGray mt-1 px-1 text-sm">
                Design database, develop API and other backend Services
              </p>
            </div>
          </div>
        </div>
        <div className="text-center pt-10 z-20 relative">
          <Blackbutton text="READ MORE" />
        </div>
        <Textcenter text="Lastest News" subclass="font-semibold pt-0 mt-0" />
        <div className="relative">
          <div className="grid grid-rows-2 p-2 m-2 items-start gap-2">
            <div className="grid grid-flow-col auto-cols-max gap-2 items-start">
              <div>
                <img
                  src="./src/assets/gallery1.svg"
                  alt="Gallery 1"
                  className="max-w-full"
                />
              </div>
              <div>
                <img
                  src="./src/assets/gallery2.svg"
                  alt="Gallery 2"
                  className="max-w-full"
                />
              </div>
              <div>
                <img
                  src="./src/assets/gallery3.svg"
                  alt="Gallery 3"
                  className="max-w-full"
                />
              </div>
              <div>
                <img
                  src="./src/assets/gallery4.svg"
                  alt="Gallery 4"
                  className="max-w-full"
                />
              </div>
            </div>
            <div className="grid grid-flow-col auto-cols-max gap-2 items-start">
              <div>
                <img
                  src="./src/assets/gallery5.svg"
                  alt="Gallery 5"
                  className="max-w-full"
                />
              </div>
              <div>
                <img
                  src="./src/assets/gallery6.svg"
                  alt="Gallery 6"
                  className="max-w-full"
                />
              </div>
              <div>
                <img
                  src="./src/assets/gallery7.svg"
                  alt="Gallery 7"
                  className="max-w-full"
                />
              </div>
              <div>
                <img
                  src="./src/assets/gallery8.svg"
                  alt="Gallery 8"
                  className="max-w-full"
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
        </div>

        <div className="text-center pt-10 z-20 relative">
          <Blackbutton text="READ MORE" />
        </div>

        <div className="bg-[#DCDCDC] w-full grid grid-cols-2 gap-8 py-20 px-12 mt-10">
          <div className="col-span-1 flex flex-col items-center ">
            <img src="./src/assets/logo.svg" alt="Teqnological Asia" />
            <div className="mt-10 space-y-2">
              <div className="flex items-start">
                <img src="./src/assets/call.svg" alt="Phone" className="mr-2" />
                <p className="text-mainGray text-sm">(+84) 335 3335 88</p>
              </div>
              <div className="flex items-start">
                <img src="./src/assets/mail.svg" alt="Email" className="mr-2" />
                <p className="text-mainGray text-sm">
                  contact@teqnological.asia
                </p>
              </div>
              <div className="flex items-start">
                <img
                  src="./src/assets/address.svg"
                  alt="Address"
                  className="mr-2"
                />
                <p className="text-mainGray text-sm w-60">
                  No. 301, Floor 3, Block B, Waseco Plaza, 10 Pho Quang, Ward 2,
                  Tan Binh, Ho Chi Minh city, Vietnam
                </p>
              </div>
            </div>
            <p className="text-mainGray text-sm mt-10">
              © 2023 Teqnological Asia, Inc
            </p>
          </div>

          <div className="col-span-1 grid grid-cols-3">
            <div>
              <h3 className="font-bold text-base text-gray-800">Company</h3>
              <ul className="space-y-2 mt-10 grid gap-4">
                <li className="text-mainGray text-sm">About</li>
                <li className="text-mainGray text-sm">Career</li>
                <li className="text-mainGray text-sm">News</li>
                <li className="text-mainGray text-sm">Privacy Policy</li>
                <li className="text-mainGray text-sm">Cookie Preferences</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-base text-gray-800">Services</h3>
              <ul className="space-y-2 mt-10 grid gap-4">
                <li className="text-mainGray text-sm">Web Applications</li>
                <li className="text-mainGray text-sm">Mobile Applications</li>
                <li className="text-mainGray text-sm">API & Backend</li>
                <li className="text-mainGray text-sm">Quality Assurance</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-base text-gray-800">Gallery</h3>
              <ul className="space-y-2 mt-10 grid gap-4">
                <li className="text-mainGray text-sm">Company Trip</li>
                <li className="text-mainGray text-sm">Project</li>
                <li className="text-mainGray text-sm">Office</li>
                <li className="text-mainGray text-sm">Workshop</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
