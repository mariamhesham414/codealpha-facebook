import React from "react";
import { PiUserSwitchLight } from "react-icons/pi";
import { HiSpeakerphone } from "react-icons/hi";

const Body = () => {
  const username = localStorage.getItem("username");
  return (
    <>
      <div className="flex bg-[#F0F2F5]">
        {/* Sidebar starts */}
        <div className="bg-[#F0F2F5] w-1/4 md:flex hidden">
          <sidebar className="hidden md:flex flex-col pl-3  h-screen pt-7  ">
            <div className="flex space-x-3 hover:bg-gray-200 py-2 px-2 rounded-lg">
              <div className="flex items-center rounded-full  justify-center">
                <img
                  srcset="https://img.icons8.com/?size=48&amp;id=Hj21JM30swCm&amp;format=png 1x, https://img.icons8.com/?size=96&amp;id=Hj21JM30swCm&amp;format=png 2x,"
                  src="https://img.icons8.com/?size=96&amp;id=Hj21JM30swCm&amp;format=png"
                  alt="Test Account"
                  loading="lazy"
                  className="w-6 h-6 rounded-full"
                  lazy="loaded"
                ></img>
              </div>
              <div className=" flex items-center text-gray-600 font-semibold text-sm">
                {username}
              </div>
            </div>
            <div className="flex space-x-3 hover:bg-gray-200 py-2 px-2 rounded-lg ">
              <div className=" flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-blue-500"
                >
                  <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                </svg>
              </div>
              <div className=" flex items-center text-gray-600 font-semibold text-sm">
                Friends
              </div>
            </div>
            <div className="flex space-x-3 hover:bg-gray-200 py-2 px-2 rounded-lg ">
              <div className=" flex items-center  justify-center">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="none"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    style={{ mixBlendMode: "normal" }}
                  >
                    <g transform="scale(10.66667,10.66667)">
                      <path
                        d="M12,2c-5.52033,0.00606 -9.99394,4.47967 -10,10c-0.00006,0.36889 0.20298,0.70785 0.52823,0.88187c0.32526,0.17403 0.71991,0.15486 1.02677,-0.04987l3,-2c0.4595,-0.30652 0.58352,-0.9275 0.277,-1.387c-0.30652,-0.4595 -0.9275,-0.58352 -1.387,-0.277l-1.181,0.787c1.01321,-3.82596 4.67177,-6.33596 8.606,-5.90427c3.93423,0.43169 6.96146,3.67532 7.12092,7.62995c0.15946,3.95463 -2.59678,7.43146 -6.48348,8.17852c-3.8867,0.74705 -7.73548,-1.46024 -9.05344,-5.1922c-0.18391,-0.5208 -0.7552,-0.79391 -1.276,-0.61c-0.5208,0.18391 -0.79391,0.7552 -0.61,1.276c1.69484,4.79428 6.71773,7.55327 11.67299,6.41179c4.95527,-1.14148 8.26488,-5.81993 7.69142,-10.87253c-0.57346,-5.0526 -4.84737,-8.87033 -9.93241,-8.87226z"
                        fill="#3b82f6"
                      ></path>
                      <path
                        d="M12,6c-0.55228,0 -1,0.44772 -1,1v5c0.00006,0.26519 0.10545,0.51951 0.293,0.707l3,3c0.39238,0.37897 1.01608,0.37355 1.40182,-0.01218c0.38573,-0.38573 0.39115,-1.00944 0.01218,-1.40182l-2.707,-2.707v-4.586c0,-0.55228 -0.44772,-1 -1,-1z"
                        fill="#4479d8"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>

              <div className=" flex items-center text-gray-600 font-semibold text-sm">
                Memories
              </div>
            </div>
            <div className="flex space-x-3 hover:bg-gray-200 py-2 px-2 rounded-lg ">
              <div className=" flex items-center  justify-center">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="#3B82F6"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    style={{ mixBlendMode: "normal" }}
                  >
                    <g transform="scale(5.33333,5.33333)">
                      <path d="M37,43l-13,-6l-13,6v-34c0,-2.2 1.8,-4 4,-4h18c2.2,0 4,1.8 4,4z"></path>
                    </g>
                  </g>
                </svg>
              </div>

              <div className=" flex items-center text-gray-600 font-semibold text-sm">
                Saved
              </div>
            </div>
            <div className="flex space-x-3 hover:bg-gray-200 py-2 px-2 rounded-lg ">
              <div className=" flex items-center  justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-blue-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                    clip-rule="evenodd"
                  />
                  <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                </svg>
              </div>

              <div className=" flex items-center text-gray-600 font-semibold text-sm">
                Groups
              </div>
            </div>
            <div className="flex space-x-3 hover:bg-gray-200 py-2 px-2 rounded-lg ">
              <div className=" flex items-center  justify-center">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="none"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    style={{ mixBlendMode: "normal" }}
                  >
                    <g transform="scale(10.66667,10.66667)">
                      <g>
                        <rect
                          x="1.25"
                          y="1.25"
                          width="21.5"
                          height="17.5"
                          rx="2.75"
                          ry="0"
                          fill="#3b82f6"
                        ></rect>
                        <path
                          d="M22,21.25h-20c-0.41421,0 -0.75,0.33579 -0.75,0.75c0,0.41421 0.33579,0.75 0.75,0.75h20c0.41421,0 0.75,-0.33579 0.75,-0.75c0,-0.41421 -0.33579,-0.75 -0.75,-0.75z"
                          fill="#3b82f6"
                        ></path>
                        <path
                          d="M16.484,8.517l-5.113,-3.2c-0.54021,-0.33711 -1.22085,-0.35439 -1.77746,-0.04511c-0.55661,0.30928 -0.90145,0.89634 -0.90054,1.53311v6.395c0.00083,0.63595 0.3462,1.22151 0.90237,1.52991c0.55616,0.3084 1.23577,0.29121 1.77563,-0.04491l5.113,-3.2c0.51172,-0.31929 0.82268,-0.87984 0.82268,-1.483c0,-0.60316 -0.31096,-1.16371 -0.82268,-1.483z"
                          fill="#ffffff"
                        ></path>
                        <path
                          d="M20,18.75h-16c-1.51833,-0.0011 -2.7489,-1.23167 -2.75,-2.75v-12c0.0011,-1.51833 1.23167,-2.7489 2.75,-2.75h16c1.51833,0.0011 2.7489,1.23167 2.75,2.75v12c-0.0011,1.51833 -1.23167,2.7489 -2.75,2.75zM4,2.75c-0.6899,0.0011 -1.2489,0.5601 -1.25,1.25v12c0.0011,0.6899 0.5601,1.2489 1.25,1.25h16c0.6899,-0.0011 1.2489,-0.5601 1.25,-1.25v-12c-0.0011,-0.6899 -0.5601,-1.2489 -1.25,-1.25z"
                          fill="#3b82f6"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div className=" flex items-center text-gray-600 font-semibold text-sm">
                Video
              </div>
            </div>
            <div className="flex space-x-3 hover:bg-gray-200 py-2 px-2 rounded-lg ">
              <div className="bg-gray-200 flex items-center rounded-full w-6 h-6 justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
                  stroke="currentColor"
                  className="w-4 h-4 "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              <div className=" flex items-center text-gray-600 font-semibold text-sm">
                See More
              </div>
            </div>
            {/* Groups */}
            <hr />
            <h3 className="font-bold text-gray-500 py-2 ">You Shortcuts</h3>
            <div className="flex space-x-3 hover:bg-gray-200 py-2 px-2 rounded-lg ">
              <div className="bg-gray-200 flex items-center rounded-full w-6 h-6 justify-center">
                <img
                  src="../../images/page image.png"
                  className="w-6 h-6 rounded-full"
                  alt=""
                />
              </div>
              <div className=" flex items-center text-gray-600 font-semibold text-sm">
                IT SKILLS ACADEMY
              </div>
            </div>
            <div className="flex space-x-3 hover:bg-gray-200 py-2 px-2 rounded-lg ">
              <div className="flex items-center  justify-center">
                <img
                  src="../../images/facebook.png"
                  className="w-6 h-6 rounded-full"
                  alt=""
                />
              </div>
              <div className=" flex items-center text-gray-600 font-semibold text-sm">
                Another Facebook Page
              </div>
            </div>
            <div className="flex space-x-3 hover:bg-gray-200 py-2 px-2 rounded-lg ">
              <div className="bg-gray-200 flex items-center rounded-full w-6 h-6 justify-center">
                <img
                  src="../../images/yt-logo.png"
                  className="w-6 h-6 rounded-full"
                  alt=""
                />
              </div>
              <div className=" flex items-center text-gray-600 font-semibold text-sm">
                Yet Another Facebook Page
              </div>
            </div>
            <div className="flex space-x-3 hover:bg-gray-200 py-2 px-2 rounded-lg ">
              <div className="bg-gray-200 flex items-center rounded-full w-6 h-6 justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
                  stroke="currentColor"
                  className="w-4 h-4 "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              <div className=" flex items-center text-gray-600 font-semibold text-sm">
                See More
              </div>
            </div>
            <div className="flex space-x-3 hover:bg-gray-200 py-2 px-2 rounded-lg  ">
              <div>
                <ol className="flex space-x-3 text-gray-400 flex-wrap mt-5 ">
                  <li>
                    {" "}
                    <a href="#" className="hover:underline">
                      Privacy
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#" className="hover:underline">
                      Terms
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#" className="hover:underline">
                      Advertising
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#" className="hover:underline">
                      Ads Choices
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#" className="hover:underline">
                      Cookies
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#" className="hover:underline">
                      More
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#" className="hover:underline">
                      Meta
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </sidebar>
        </div>
        {/* Sidebar ends */}

        {/* Feeds starts */}
        <div className=" flex flex-col bg-[#F0F2F5] px-4 w-1/2 m-8 space-y-4">
          <div className="flex space-x-2 mx-auto max-w-2xl relative">
            {/* <!-- Create Story Start --> */}
            <div className="w-36 h-52 rounded-xl overflow-hidden flex flex-col group cursor-pointer relative">
              
              <img
                srcset="https://img.icons8.com/?size=48&amp;id=Hj21JM30swCm&amp;format=png 1x, https://img.icons8.com/?size=96&amp;id=Hj21JM30swCm&amp;format=png 2x,"
                src="https://img.icons8.com/?size=96&amp;id=Hj21JM30swCm&amp;format=png"
                alt="Test Account"
                loading="lazy"
                className="w-full h-4/5 object-cover transition duration-300 ease-in-out transform group-hover:scale-105"
                lazy="loaded"
              ></img>

              <div className="bg-gray-800 relative flex-1 flex flex-col">
                <div className="bg-blue-600 p-0.5 rounded-full border-4 border-gray-800 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <div className="flex-1 pb-1 text-white text-sm font-semibold capitalize flex justify-center items-end">
                  <p>Create Story</p>
                </div>
              </div>

              <div className="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>
            </div>
            {/* <!-- Create Story End --> */}

            {/* <!-- Others Story Start --> */}
            <div className="w-36 h-52 rounded-xl overflow-hidden flex flex-col relative group cursor-pointer">
              <img
                className="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105"
                src="https://picsum.photos/200/300?random=1"
                alt="MD. Shibbir Ahmed"
              />

              <div className="w-8 h-8 border-4 box-content border-gray-800 rounded-full overflow-hidden absolute left-2.5 top-3">
                {/* <img
                  className="w-full h-full object-cover"
                  src="https://raw.githubusercontent.com/shibbirweb/public-asset/master/shibbir.jpg"
                  alt="MD. Shibbir Ahmed"
                /> */}
                <img
                  srcset="https://img.icons8.com/?size=48&amp;id=Hj21JM30swCm&amp;format=png 1x, https://img.icons8.com/?size=96&amp;id=Hj21JM30swCm&amp;format=png 2x,"
                  src="https://img.icons8.com/?size=96&amp;id=Hj21JM30swCm&amp;format=png"
                  alt="Test Account"
                  loading="lazy"
                  className="w-full h-full object-cover"
                  lazy="loaded"
                ></img>
              </div>

              <div className="absolute inset-x-3 bottom-1">
                <p className="text-white font-semibold">Your Story</p>
              </div>

              <div className="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>
            </div>
            {/* <!-- Others Story End --> */}

            {/* <!-- Others Story Start --> */}
            <div className="w-36 h-52 rounded-xl overflow-hidden flex flex-col relative group cursor-pointer">
              <img
                className="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105"
                src="https://picsum.photos/200/300?random=3"
                alt="MD. Shibbir Ahmed"
              />

              <div className="w-8 h-8 border-4 box-content border-blue-600 rounded-full overflow-hidden absolute left-2.5 top-3">
                <img
                  className="w-full h-full object-cover"
                  src="https://picsum.photos/200/300?random=4"
                  alt="MD. Shibbir Ahmed"
                />
              </div>

              <div className="absolute inset-x-3 bottom-1">
                <p className="text-white font-semibold">Baky Billah</p>
              </div>

              <div className="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>
            </div>
            {/* <!-- Others Story End --> */}

            {/* <!-- Others Story Start --> */}
            <div className="w-36 h-52 rounded-xl overflow-hidden flex flex-col relative group cursor-pointer">
              <img
                className="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105"
                src="https://picsum.photos/200/300?random=5"
                alt="MD. Shibbir Ahmed"
              />

              <div className="w-8 h-8 border-4 box-content border-blue-600 rounded-full overflow-hidden absolute left-2.5 top-3">
                <img
                  className="w-full h-full object-cover"
                  src="https://picsum.photos/200/300?random=6"
                  alt="MD. Shibbir Ahmed"
                />
              </div>

              <div className="absolute inset-x-3 bottom-1">
                <p className="text-white font-semibold">Mobarak Hossain Joy</p>
              </div>

              <div className="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>
            </div>
            {/* <!-- Others Story End --> */}

            {/* <!-- Others Story Start --> */}
            <div className="w-36 h-52 rounded-xl overflow-hidden flex flex-col relative group cursor-pointer">
              <img
                className="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105"
                src="https://picsum.photos/200/300?random=7"
                alt="MD. Shibbir Ahmed"
              />

              <div className="w-8 h-8 border-4 box-content border-blue-600 rounded-full overflow-hidden absolute left-2.5 top-3">
                <img
                  className="w-full h-full object-cover"
                  src="https://picsum.photos/200/300?random=8"
                  alt="MD. Shibbir Ahmed"
                />
              </div>

              <div className="absolute inset-x-3 bottom-1">
                <p className="text-white font-semibold">Mahmudul Hasan</p>
              </div>

              <div className="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>
            </div>
            {/* <!-- Others Story End --> */}

            <div className="absolute bg-gray-700 hover:bg-gray-600 transition-colors ease-in-out duration-200 p-2 rounded-full right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </div>
          {/* Add Post starts */}
          <div className="bg-white rounded-md p-4">
            <div className="flex space-x-2 ">
              
              <img
                srcset="https://img.icons8.com/?size=48&amp;id=Hj21JM30swCm&amp;format=png 1x, https://img.icons8.com/?size=96&amp;id=Hj21JM30swCm&amp;format=png 2x,"
                src="https://img.icons8.com/?size=96&amp;id=Hj21JM30swCm&amp;format=png"
                alt="Test Account"
                loading="lazy"
                className="w-10 h-10 rounded-full hover:hover:brightness-75"
                lazy="loaded"
              ></img>

              <button
                className="flex bg-gray-100 w-full focus:outline-none py-3 justify-start rounded-full text-gray-500 px-4 "
                id="compose-btn"
              >
                Whats in you mind, {username}?
              </button>
            </div>
            {/* Modal goes here.. */}
            <div
              className="absolute inset-0 hidden bg-gray-400 bg-opacity-50 justify-center items-center"
              id="post"
            >
              <div className="bg-white w-2/5 p-5 px-3 rounded shadow-xl text-gray-800">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-bold"></h4>
                  <h4 className="text-lg font-bold">Create Post</h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 justify-end text-gray-400"
                    id="close-modal"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div className="mt-2 text-sm">
                  <hr className="mt-2" />
                  <div className=" flex p-2 space-x-2">
                    {/* <img
                      src="../../public/images/profile.jpg"
                      className="w-8 h-8 rounded-lg"
                      alt=""
                    /> */}
                    <img
                      srcset="https://img.icons8.com/?size=48&amp;id=Hj21JM30swCm&amp;format=png 1x, https://img.icons8.com/?size=96&amp;id=Hj21JM30swCm&amp;format=png 2x,"
                      src="https://img.icons8.com/?size=96&amp;id=Hj21JM30swCm&amp;format=png"
                      alt="Test Account"
                      loading="lazy"
                      className="w-10 h-10 rounded-full hover:hover:brightness-75"
                      lazy="loaded"
                    ></img>

                    <div className="flex flex-col">
                      <h3>Mariam Hesham</h3>
                      <div className="flex space-x-2 bg-gray-200 rounded-md px-2 justify-center items-center">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM8.547 4.505a8.25 8.25 0 1011.672 8.214l-.46-.46a2.252 2.252 0 01-.422-.586l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.654-.261a2.25 2.25 0 01-1.384-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.279-2.132z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>Public</div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <form action="#" className="flex flex-col space-y-2">
                    <textarea
                      className="focus:outline-none text-lg pt-2"
                      name=""
                      id=""
                      cols="30"
                      rows="5"
                    ></textarea>
                  </form>
                </div>
                <div className="mt-3 flex justify-between space-x-3">
                  <button className="px-3 py-1 rounded-lg bg-gradient-to-tr outline outline-2 outline-white from-red-500 via-purple-500 to-pink-500 shadow-lg">
                    Aa
                  </button>
                  <div className="px-3 py-1 rounded text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1"
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                      />
                    </svg>
                  </div>
                </div>
                <div className=" flex border border-lg-gray-500 p-4 mt-4 rounded-md justify-between">
                  <div>Add to your post</div>
                  <div className="flex space-x-4">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-7 h-7 text-green-500"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-7 h-7 text-blue-500"
                      >
                        <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-7 h-7 text-yellow-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                        />
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-8 h-8 text-red-500"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-7 h- text-blue-400"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <button
                    className="flex justify-center items-center bg-blue-500 rounded-md p-2 w-full text-white font-semibold focus:outline-none"
                    id="close-modal"
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
            {/* Modal ends here.. */}
            <div className="flex mt-5 px-6 justify-between text-gray-500 font-semibold">
              <div className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-red-500"
                >
                  <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
                </svg>
                <div>Live Video</div>
              </div>
              <div className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-green-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                    clip-rule="evenodd"
                  />
                </svg>

                <div>Photo / Video</div>
              </div>
              <div className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-yellow-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                  />
                </svg>

                <div>Feeling / Activity </div>
              </div>
            </div>
          </div>
          {/* Add Post starts */}
          <div className="bg-white rounded-md p-4">
            <div className="flex space-x-2 ">
              <img
                src="../images/profile_av.jpg"
                alt=""
                className="rounded-full w-10 h-10"
              />
              <div className="flex flex-col">
                <h3 className="text-gray-500 font-semibold text-sm">
                  John Muriithi
                </h3>
                <div className="flex space-x-2 px-2 justify-center items-center">
                  <div className="text-blue-500 text-sm">2 min</div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM8.547 4.505a8.25 8.25 0 1011.672 8.214l-.46-.46a2.252 2.252 0 01-.422-.586l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.654-.261a2.25 2.25 0 01-1.384-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.279-2.132z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Post content */}
            <div className="mt-2 text-gray-500">
              <p>This is my post here, i am so excited....</p>
            </div>
            {/* Engagements */}
            <div className="flex mt-4 space-x-2 justify-between">
              <div className="flex space-x-0">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-yellow-400"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div className="bg-blue-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-white p-1"
                  >
                    <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                  </svg>
                </div>
                <div className="flex text-gray-500 space-x-2">
                  <div>John Muriithi and 108 others</div>
                </div>
              </div>
              <div className="flex text-gray-500">
                <div>1k Comments</div>
              </div>
            </div>
            <hr className="mt-2" />
            <div className="flex justify-between m-2">
              <div className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                  />
                </svg>
                <div className="text-gray-500">Like</div>
              </div>
              <div className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                  />
                </svg>
                <div className="text-gray-500">Comments</div>
              </div>
              <div className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-gray-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.47 2.47a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06l4.72-4.72H9a5.25 5.25 0 100 10.5h3a.75.75 0 010 1.5H9a6.75 6.75 0 010-13.5h10.19l-4.72-4.72a.75.75 0 010-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div className="text-gray-500">Share</div>
              </div>
            </div>
            <hr className="mb-2" />
            <div className="flex flex-col">
              <div className="text-gray-500 font-semibold text-sm mt-2">
                View Previous 2 Comments
              </div>
              <div className="flex flex-col mt-2">
                {/* Comments */}
                <div className="space-y-4">
                  <div className="flex space-x-4">
                    <img
                      src="../images/team_2.jpg"
                      className="w-8 h-8 rounded-full"
                      alt=""
                    />
                    <p className="flex flex-col space-y-1 text-gray-500 bg-gray-100 py-2 px-2 rounded-lg">
                      <span className="font-semibold text-sm">
                        Benilda Yule wa Fb
                      </span>
                      <span>
                        And here comes your first comment on this platform...
                      </span>
                    </p>
                  </div>
                  <div className="flex space-x-4 ml-4">
                    <img
                      src="../images/profile_av.jpg"
                      className="w-8 h-8 rounded-full"
                      alt=""
                    />
                    <p className="flex flex-col space-y-1 text-gray-500 bg-gray-100 py-2 px-2 rounded-lg">
                      <span className="font-semibold text-sm">
                        John Muriithi
                      </span>
                      <span>
                        My pleasure... How are you doing @Benilda Yule wa Fb?
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Write your comment */}
            <div className="flex space-x-2 items-center mt-4 ">
              <div className="relative inline-block">
                <img
                  srcset="https://img.icons8.com/?size=48&amp;id=Hj21JM30swCm&amp;format=png 1x, https://img.icons8.com/?size=96&amp;id=Hj21JM30swCm&amp;format=png 2x,"
                  src="https://img.icons8.com/?size=96&amp;id=Hj21JM30swCm&amp;format=png"
                  alt="Test Account"
                  loading="lazy"
                  className="w-10 h-10 rounded-full hover:hover:brightness-75"
                  lazy="loaded"
                ></img>

                <span className="obsolute  w-3 h-3 rounded-full bg-green-500 border-2 border-white absolute bottom-0 right-0"></span>
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="bg-gray-100 rounded-lg px-2 py-2 w-full focus:outline-none"
                  placeholder="Write a Comment"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-md p-4">
            <div className="flex space-x-2 ">
              <img
                src="../images/profile_ec.jpg"
                alt=""
                className="rounded-full w-10 h-10"
              />
              <div className="flex flex-col">
                <h3 className="text-gray-500 font-semibold text-sm">
                  Marino Vilbada
                </h3>
                <div className="flex space-x-2 px-2 justify-center items-center">
                  <div className="text-gray-500 text-sm">5 hours</div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM8.547 4.505a8.25 8.25 0 1011.672 8.214l-.46-.46a2.252 2.252 0 01-.422-.586l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.654-.261a2.25 2.25 0 01-1.384-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.279-2.132z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Post content */}
            <div className="flex mt-2 h-64 text-3xl text-center text-white p-5 font-bold items-center justify-center bg-gradient-to-br from-blue-500 to-purple-400">
              <p>
                This is a Facebook clone created using HTML and Taiwind
                className and Javascript, Its my hope you like it...
              </p>
            </div>
            {/* Post content ends */}
            {/* Engagements */}
            <div className="flex mt-4 space-x-2 justify-between">
              <div className="flex space-x-0">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-yellow-400"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div className="bg-blue-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-white p-1"
                  >
                    <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                  </svg>
                </div>
                <div className="flex text-gray-500 space-x-2">
                  <div>John Muriithi and 108 others</div>
                </div>
              </div>
              <div className="flex text-gray-500">
                <div>1k Comments</div>
              </div>
            </div>
            <hr className="mt-2" />
            <div className="flex justify-between m-2">
              <div className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                  />
                </svg>
                <div className="text-gray-500">Like</div>
              </div>
              <div className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                  />
                </svg>
                <div className="text-gray-500">Comments</div>
              </div>
              <div className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-gray-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.47 2.47a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06l4.72-4.72H9a5.25 5.25 0 100 10.5h3a.75.75 0 010 1.5H9a6.75 6.75 0 010-13.5h10.19l-4.72-4.72a.75.75 0 010-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div className="text-gray-500">Share</div>
              </div>
            </div>
            <hr className="mb-2" />
            {/* Write your comment */}
            <div className="flex space-x-2 items-center mt-4 ">
              <div className="relative inline-block">
                <img
                  srcset="https://img.icons8.com/?size=48&amp;id=Hj21JM30swCm&amp;format=png 1x, https://img.icons8.com/?size=96&amp;id=Hj21JM30swCm&amp;format=png 2x,"
                  src="https://img.icons8.com/?size=96&amp;id=Hj21JM30swCm&amp;format=png"
                  alt="Test Account"
                  loading="lazy"
                  className="w-10 h-10 rounded-full hover:hover:brightness-75"
                  lazy="loaded"
                ></img>

                <span className="obsolute  w-3 h-3 rounded-full bg-green-500 border-2 border-white absolute bottom-0 right-0"></span>
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="bg-gray-100 rounded-lg px-2 py-2 w-full focus:outline-none"
                  placeholder="Write a Comment"
                />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md p-4">
            <div className="flex space-x-2 ">
              <img
                src="../images/profile.jpg"
                alt=""
                className="rounded-full w-10 h-10"
              />
              <div className="flex flex-col">
                <h3 className="text-gray-500 font-semibold text-sm">
                  Muriithi John
                </h3>
                <div className="flex space-x-2 px-2 justify-center items-center">
                  <div className="text-gray-500 text-sm">5 hours</div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM8.547 4.505a8.25 8.25 0 1011.672 8.214l-.46-.46a2.252 2.252 0 01-.422-.586l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.654-.261a2.25 2.25 0 01-1.384-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.279-2.132z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Post content */}
            <div className="flex flex-col mt-2 text-gray-500">
              <p>Follow me on YouTube for more</p>
              <img src="../images/yt-logo.png" alt="" />
            </div>
            {/* Post content ends */}
            {/* Engagements */}
            <div className="flex mt-4 space-x-2 justify-between">
              <div className="flex space-x-0">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-yellow-400"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div className="bg-blue-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-white p-1"
                  >
                    <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                  </svg>
                </div>
                <div className="flex text-gray-500 space-x-2">
                  <div>Ana Jones and 100 others</div>
                </div>
              </div>
              <div className="flex text-gray-500">
                <div>150 Comments</div>
              </div>
            </div>
            <hr className="mt-2" />
            <div className="flex justify-between m-2">
              <div className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                  />
                </svg>
                <div className="text-gray-500">Like</div>
              </div>
              <div className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                  />
                </svg>
                <div className="text-gray-500">Comments</div>
              </div>
              <div className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-gray-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.47 2.47a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06l4.72-4.72H9a5.25 5.25 0 100 10.5h3a.75.75 0 010 1.5H9a6.75 6.75 0 010-13.5h10.19l-4.72-4.72a.75.75 0 010-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div className="text-gray-500">Share</div>
              </div>
            </div>
            <hr className="mb-2" />
            {/* Write your comment */}
            <div className="flex space-x-2 items-center mt-4 ">
              <div className="relative inline-block">
                <img
                  srcset="https://img.icons8.com/?size=48&amp;id=Hj21JM30swCm&amp;format=png 1x, https://img.icons8.com/?size=96&amp;id=Hj21JM30swCm&amp;format=png 2x,"
                  src="https://img.icons8.com/?size=96&amp;id=Hj21JM30swCm&amp;format=png"
                  alt="Test Account"
                  loading="lazy"
                  className="w-10 h-10 rounded-full hover:hover:brightness-75"
                  lazy="loaded"
                ></img>

                <span className="obsolute  w-3 h-3 rounded-full bg-green-500 border-2 border-white absolute bottom-0 right-0"></span>
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="bg-gray-100 rounded-lg px-2 py-2 w-full focus:outline-none"
                  placeholder="Write a Comment"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Feeds ends */}

        {/* Right Sidebar starts */}
        <div className=" hidden md:flex flex-col w-1/4 mt-5 px-8 relative">
          <div className="flex justify-between">
            <h4 className="font-bold text-gray-600 mt-2">
              Your Pages and Profiles
            </h4>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </div>
          <div className="">
            <div className="flex space-x-2 pl-2 items-center hover:bg-gray-200  px-2 rounded-lg">
              <img
                src="../images/page image.png"
                className="w-6 h-6 rounded-full"
                alt=""
              />
              <h3 className="text-gray-500 font-semibold py-2">
                It Skills Academy
              </h3>
            </div>
            <div className="flex flex-col space-y-2 pl-4 text-gray-500 ">
              <div className="flex space-x-3 hover:bg-gray-200 py-2 px-2 rounded-lg ">
                <PiUserSwitchLight size={"22px"} />
                <h5 className="text-sm font-semibold">Switch into Page</h5>
              </div>
              <div className="flex space-x-3 hover:bg-gray-200 py-2 px-2 rounded-lg ">
                <HiSpeakerphone size={"22px"} />
                <h5 className="text-sm font-semibold">Create Promotion</h5>
              </div>
            </div>
          </div>
          <hr className="mt-4" />
          {/* Contants */}
          <div className="flex flex-col  font-semibold text-gray-500 justify-center mt-4  ">
            <div className="flex justify-between">
              <div>Contants</div>
              <div className="flex space-x-4">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex space-x-2 items-center hover:bg-gray-200 py-2 px-2 rounded-lg">
              <div>
                <img
                  src="../images/profile_ec.jpg"
                  className="w-8 h-8 rounded-full"
                  alt=""
                />
              </div>
              <div>John Doe</div>
            </div>
            <div className="flex space-x-2 items-center hover:bg-gray-200 py-2 px-2 rounded-lg">
              <div className="relative inline-block">
                <img
                  src="../images/profile_av.jpg"
                  className="object-cover w-8 h-8 rounded-full outline outline-offset-2 outline-1 outline-blue-500"
                  alt=""
                />
              </div>
              <div className="text-sm">Jane Puga</div>
            </div>
            <div className="flex space-x-2 items-center hover:bg-gray-200 py-2 px-2 rounded-lg">
              <div className="relative inline-block">
                <img
                  src="../images/profile.jpg"
                  className="w-8 h-8 rounded-full"
                  alt=""
                />
                <span className="obsolute  w-3 h-3 rounded-full bg-green-500 border-2 border-white absolute bottom-0 right-0"></span>
              </div>
              <div className="text-sm">Ganeshi</div>
            </div>
            {/* Contact starts */}
            <div className="flex space-x-2 items-center hover:bg-gray-200 py-2 px-2 rounded-lg">
              <div>
                <img
                  src="../images/team_4.jpg"
                  className="w-8 h-8 rounded-full"
                  alt=""
                />
              </div>
              <div className="text-sm">Divya Gonzalez</div>
            </div>
            {/* Contact ends   */}
            {/* Contact starts */}
            <div className="flex space-x-2 items-center hover:bg-gray-200 py-2 px-2 rounded-lg">
              <div>
                <img
                  src="../images/team_3.jpg"
                  className="w-8 h-8 rounded-full"
                  alt=""
                />
              </div>
              <div className="text-sm">Antony Murry</div>
            </div>
            {/* Contact ends   */}
            {/* Contact starts */}
            <div className="flex space-x-2 items-center hover:bg-gray-200 py-2 px-2 rounded-lg">
              <div>
                <img
                  src="../images/profile.jpg"
                  className="w-8 h-8 rounded-full object-cover w-8 h-8 rounded-full outline outline-offset-2 outline-1 outline-blue-500"
                  alt=""
                />
              </div>
              <div className="text-sm">James Kamu Wangui</div>
            </div>
            {/* Contact ends   */}
            {/* Contact starts */}
            <div className="flex space-x-2 items-center hover:bg-gray-200 py-2 px-2 rounded-lg">
              <div>
                <img
                  src="../images/comment_3.jpg"
                  className="w-8 h-8 rounded-full"
                  alt=""
                />
              </div>
              <div className="text-sm">Divya Jojones Puga</div>
            </div>
            {/* Contact ends   */}
            {/* Contact starts */}
            <div className="flex space-x-2 items-center hover:bg-gray-200 py-2 px-2 rounded-lg">
              <div>
                <img
                  src="../images/team_2.jpg"
                  className="w-8 h-8 rounded-full"
                  alt=""
                />
              </div>
              <div className="text-sm">Benilda Yule Wa Fb</div>
            </div>
            {/* Contact ends   */}
            {/* Contact starts */}
            <div className="flex space-x-2 items-center hover:bg-gray-200 py-2 px-2 rounded-lg">
              <div>
                <img
                  src="../images/team_4.jpg"
                  className="w-8 h-8 rounded-full"
                  alt=""
                />
              </div>
              <div className="text-sm">Kamoche Wa Githecha</div>
            </div>
            {/* Contact ends   */}
            {/* Contact starts */}
            <div className="flex space-x-2 items-center hover:bg-gray-200 py-2 px-2 rounded-lg">
              <div>
                <img
                  src="../images/comment_1.jpg"
                  className="w-8 h-8 rounded-full object-cover w-8 h-8 rounded-full outline outline-offset-2 outline-1 outline-blue-500"
                  alt=""
                />
              </div>
              <div className="text-sm">Divya Gonzalez</div>
            </div>
            {/* Contact ends   */}
            {/* Contact starts */}
            <div className="flex space-x-2 items-center hover:bg-gray-200 py-2 px-2 rounded-lg">
              <div>
                <img
                  src="../images/team_3.jpg"
                  className="w-8 h-8 rounded-full object-cover w-8 h-8 rounded-full outline outline-offset-2 outline-1 outline-blue-500"
                  alt=""
                />
              </div>
              <div className="text-sm">Divya Gonzalez Garchia</div>
            </div>
            {/* Contact ends   */}
            {/* Contact starts */}
            <div className="flex space-x-2 items-center hover:bg-gray-200 py-2 px-2 rounded-lg">
              <div>
                <img
                  src="../images/profile.jpg"
                  className="w-8 h-8 rounded-full object-cover w-8 h-8 rounded-full outline outline-offset-2 outline-1 outline-blue-500"
                  alt=""
                />
              </div>
              <div className="text-sm">John Wa Kagethe</div>
            </div>
            {/* Contact ends   */}
            {/* Contact starts */}
            <div className="flex space-x-2 items-center hover:bg-gray-200 py-2 px-2 rounded-lg">
              <div>
                <img
                  src="../images/comment_2.jpg"
                  className="object-cover w-8 h-8 rounded-full outline outline-offset-2 outline-1 outline-blue-500"
                  alt=""
                />
              </div>
              <div className="text-sm">Divya Gonzalez Mariano</div>
            </div>
            {/* Contact ends   */}
            {/* Contact starts */}
            <div className="flex space-x-2 items-center hover:bg-gray-200 py-2 px-2 rounded-lg">
              <div>
                <img
                  src="../images/team_2.jpg"
                  className="w-8 h-8 rounded-full"
                  alt=""
                />
              </div>
              <div className="text-sm">Johnnie Yule Msee</div>
            </div>
            {/* Contact ends  */}
            {/* Contact starts */}
            <div className="flex space-x-2 items-center hover:bg-gray-200 py-2 px-2 rounded-lg">
              <div>
                <img
                  src="../images/comment_3.jpg"
                  className="w-8 h-8 rounded-full object-cover w-8 h-8 rounded-full outline outline-offset-2 outline-1 outline-blue-500"
                  alt=""
                />
              </div>
              <div className="text-sm">Divya Gonzalez Ule Msee</div>
            </div>
            {/* Contact ends  */}
          </div>
        </div>
        {/* Right Sidebar ends */}
      </div>
    </>
  );
};

export default Body;
