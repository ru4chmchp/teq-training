import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { Textcenter } from "../components/Textcenter";
import Blackbutton from "../components/Blackbutton";
import ApplicationForm from "../components/Applicationform";
function Backend() {
  return (
    <>
      <div>
        <Navbar />
        <div className="relative mb-10">
          <Textcenter
            text="Back-end Developer (Golang)"
            subclass="font-semibold"
          />
          <div className="flex flex-row gap-10 items-center justify-center mt-5">
            <div>
              <img src="./src/assets/engineering.svg" alt="" />
              <div>Engineering</div>
            </div>
            <div>
              <img src="./src/assets/engineering.svg" alt="" />
              <div>Engineering</div>
            </div>
            <div>
              <img src="./src/assets/engineering.svg" alt="" />
              <div>Engineering</div>
            </div>
            <div>
              <img src="./src/assets/engineering.svg" alt="" />
              <div>Engineering</div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Blackbutton text="APPLY NOW" />
          </div>

          <img
            src="./src/assets/background2.svg"
            alt=""
            className="w-full absolute top-0 left-0 z-0"
          />
        </div>
        <div className="py-10 px-10 md:px-30 bg-[#F5F5F5] flex flex-col">
          <div>
            <div className="py-10 px-10 md:px-80">
              <div>
                <div className="w-10 h-1 bg-blue-600 mb-4"></div>
                <h2 className="text-3xl font-semibold">OUR CAPABILITIES</h2>
                <div className=" mx-auto my-8">
                  <p className="text-gray-700 mb-4">
                    Have the chance to work with talented developers, following
                    high-standard software development practices.
                    <br />
                    Be trained and worked on complex systems using cutting-edge
                    technology-based frameworks.
                  </p>
                  <p className="text-gray-700 font-medium mb-2">
                    Your key responsibilities:
                  </p>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>
                      Support the development team to develop the application
                      using ReactJS.
                    </li>
                    <li>Other tasks assigned by the leader.</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="w-10 h-1 bg-blue-600 mb-4"></div>
                <h2 className="text-3xl font-semibold">REQUIREMENT</h2>
                <div className=" mx-auto my-8">
                  <p className="text-gray-700 font-medium mb-2">General:</p>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>
                      4th year/ new graduate students majoring in Computer
                      Science/ Software Engineering/ related fields.
                    </li>
                    <li> Be READY to work full-time.</li>
                  </ul>
                  <p className="text-gray-700 font-medium mb-2">
                    Skill/Experience skills:
                  </p>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>
                      {" "}
                      Know React JS, or (Redux, Redux-Saga,Webpack,Babel or
                      VueJS, VueX) (Including university/ part-time projects).
                    </li>
                    <li> Know UI/UX, and JavaScript frameworks.</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="w-10 h-1 bg-blue-600 mb-4"></div>
                <h2 className="text-3xl font-semibold">
                  WHY YOU'LL LOVE WORKING HERE
                </h2>
                <div className=" mx-auto my-8">
                  <h2 className="text-gray-700 font-bold mb-2">General:</h2>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>
                      Attractive salary and benefits (Salary review - 2
                      times/year).
                    </li>
                    <li>
                      Insurance contribution equal to 100% of salary. Year-end
                      bonus.
                    </li>

                    <li>Annual health check for all employees.</li>
                    <li>MacBook or personal laptop provided.</li>
                  </ul>
                  <p className="text-gray-700 font-medium mb-2">
                    Skill/Experience skills:
                  </p>
                </div>
                <div className=" mx-auto my-8">
                  <h2 className="text-gray-700 font-bold mb-2">
                    Working time and place of working time:
                  </h2>

                  <ul className="list-disc pl-5 text-gray-700">
                    <li>
                      {" "}
                      Working from Monday - Friday and the last Saturday of the
                      month, working hours 8:30 - 17:30 (8 hours/day), public
                      holidays according to state regulations.
                    </li>
                    <li>
                      Floors 3 - 5, Waseco Building, No. 10 Pho Quang, Ward 02,
                      Tan Binh District, Ho Chi Minh City.
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="w-10 h-1 bg-blue-600 mb-4"></div>
                <h2 className="text-3xl font-semibold">CONTACT</h2>
                <div className=" mx-auto my-8">
                  <p className="text-gray-700 font-medium mb-2">
                    If you are interested in this position, please email your
                    resume/CV to email:{" "}
                    <span className="text-blue-500">
                      mailto:recruit@teqnological.asia
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ApplicationForm />
        <Footer />
      </div>
    </>
  );
}

export default Backend;
