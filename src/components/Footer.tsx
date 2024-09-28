export const Footer = () => {
  return (
    <>
      <div className="md:flex flex-col items-center">
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
};
