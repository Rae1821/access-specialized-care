import Image from 'next/image'

import { BellIcon } from '@heroicons/react/24/solid';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { PhoneIcon } from '@heroicons/react/24/solid';

export default function Page() {
  return (
    <main>
      <section className="hero-section hero-bg relative h-screen w-full">
        {/* <div className="hero-container h-screen"> */}
          <div className="overlay">
            <h1 className="text-4xl textShadow tracking-tight text-white relative mt-24 z-10 pt-64 pl-4 lg:pl-12 lg:text-6xl font-bold lg:w-2/3">Easily manage & dispense your medication systems</h1>
            <p className="text-white text-lg para-font lg:block z-20 relative w-5/6 lg:w-2/5 leading-relaxed pl-4 pt-0 lg:pl-12 lg:pt-8 mb-12">We specialize in providing medication packaging needs for nursing homes, assisted living facilities, and special needs facilities</p>
            <button className="bg-black text-white ml-4 lg:ml-12 px-6 py-3.5 relative z-10 rounded-full flex uppercase transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <a className="flex" href="tel:4238773568">Call Now
                <PhoneIcon className="w-6 h-6 ml-4" />
              </a>
            </button>
          </div>
        {/* </div> */}
      </section>

      {/* About Section */}
      <section className="w-full">
        <div className="flex flex-col-reverse px-2 lg:flex-row justify-center items-center my-32 mx-auto lg:px-8 max-w-7xl relative">
          <div className="hidden lg:block lg:ml-12 lg:w-1/2">
            <Image
              src="/medicine-green-bg.jpg"
              alt="pills on a green background"
              width={400}
              height={500}
              className="rounded shadow-md mr-0"
            />
          </div>
          <div className=" w-full pb-12 lg:pr-8 lg:w-1/2 pl-2">
            <p className="font-bold text-2xl lg:text-3xl mb-8 tracking-tight leading para-font text-slate-800">Managing multiple medications for multiple patients in your care can be challenging</p>

              <p className="leading-loose tracking-wide mb-4 text-lg para-font font-light text-slate-700">Our unique, pre-packaged medication systems are designed to offer you time savings, while using technology dedicated to your patient's saftey.</p>

              <p className="leading-loose tracking-wide text-lg para-font font-light text-slate-700">With medication packs clearly labeled with patient information and medication schedules, our systems help you keep track of when patients need to take a medication and at what time.</p>
          </div>
          <div className="opacity-20 absolute right-10 -bottom-20">
            <Image
              src="/medicines.svg"
              alt="medicine svg"
              width={200}
              height={200}
            />
          </div>
        </div>
      </section>

      {/* Features & Benefits Section */}

      <section className="pb-44 lg:pb-64 w-full relative">
        <div className="p-8 bg-green-900/40 lg:h-96">
          <h2 className="text-3xl lg:text-4xl text-slate-800 font-bold text-center tracking-tighter py-8 z-30">Features & Benefits</h2>
        </div>

        <div className="cards-container bg-green-900/40 lg:bg-transparent flex flex-col lg:flex-row lg:justify-center px-6 pb-8 lg:absolute top-36 z-40 para-font">
          {/* Card */}
          <div className="card bg-neutral-100 w-full lg:w-1/5 lg:mx-2 mb-8 lg:mb-0 px-4 py-6 rounded z-40 shadow-md">
            <div className="bg-green-800 w-16 h-16 rounded-full p-2 mx-auto mb-6 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12 text-white text-center mx-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
              </svg>
            </div>

            <p className="font-bold mt-6 text-lg tracking-tight text-center text-slate-800">Accurate Medication Management</p>
            <ul className="mt-2 flex flex-col">
              <li className="flex mt-4 mb-4 justify-start text-slate-800">
                <span className="text-green-800 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </span>
                3 Different packing systems to choose from
              </li>
              <li className="flex mt-4 mb-4 justify-start text-slate-800">
                <span className="text-green-800 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </span>
                Extensive drug utilization review
              </li>
            </ul>
          </div>

          {/* Card */}
          <div className="card bg-neutral-100 w-full lg:w-1/5 lg:mx-2 mb-8 lg:mb-0 px-4 py-6 rounded shadow-md">
            <div className="bg-green-800 w-16 h-16 rounded-full p-2 mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12 text-white text-center">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                </svg>
            </div>
            <p className="font-semibold mt-6 text-xl tracking-tighter text-center text-slate-800">Ease of patient administration</p>
            <ul className="mt-2 flex flex-col">
              <li className="text-sm flex mt-4 mb-4 justify-start text-slate-800">
                <span className="text-green-800 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                  Ability to make immediate prescription changes + same day delivery
              </li>
              <li className="text-sm flex mt-4 mb-4 justify-start text-slate-800">
                <span className="text-green-800 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                  Acceptance of all major insurance plans
              </li>
            </ul>
          </div>

          {/* Card */}
          <div className="card bg-neutral-100 w-full lg:w-1/5 lg:mx-2 mb-8 lg:mb-0 px-4 py-6 rounded shadow-md">
            <div className="bg-green-800 w-16 h-16 rounded-full p-2 mx-auto mb-4">
              <Image
                src="/ui_secure.svg"
                alt="lock svg"
                width={50}
                height={50}
              />
            </div>
            <p className="font-semibold text-xl tracking-tighter text-center text-slate-800 mt-6">Tamper proof <br></br>packaging</p>
            <ul className="mt-2 flex flex-col">
              <li className="text-sm flex my-4 leading-relaxed justify-start text-slate-800">
                <span className="text-green-800 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </span>
                  State of the art medication packing system that is convenient to manage and accurately dispense
              </li>
              <li className="text-sm flex mt-4 mb-4 justify-start text-slate-800">
                <span className="text-green-800 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                  Medication carts, E-Mar system, drug disposal, and more!
              </li>
            </ul>
          </div>

          {/* Card */}
          <div className="card bg-neutral-100 w-full lg:w-1/5 lg:mx-2 mb-8 lg:mb-0 px-4 py-6 rounded shadow-md">
            <div className="bg-green-800 w-16 h-16 rounded-full p-2 mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12 text-white text-center">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                </svg>
            </div>
            <p className="mt-6 font-semibold text-xl tracking-tighter text-center text-slate-800">Utmost<br></br> convenience</p>
            <ul className="mt-2 flex flex-col">
              <li className="text-sm flex mt-4 mb-4 justify-start text-slate-800">
                <span className="text-green-800 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Fast, local delivery. Licensed in TN & GA
              </li>
              <li className="text-sm flex mt-4 mb-4 justify-start text-slate-800">
                <span className="text-green-800 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                On site diabetic fittings and screenings
              </li>
              <li className="text-sm flex mt-4 mb-4 justify-start text-slate-800">
                <span className="text-green-800 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                On site vaccinations
              </li>
              <li className="text-sm flex mt-4 mb-4 justify-start text-slate-800">
                <span className="text-green-800 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                6 pharmacists on call
              </li>
            </ul>
          </div>
        </div>
        {/* Stethescope Icon */}
        <div className="absolute -left-10 h-96 rotate-45 opacity-10 -mt-20 lg:mt-48 -z-10">
          <Image
            src="/stethoscope.svg"
            alt="Stethoscope"
            width={300}
            height={300}
          />
        </div>
      </section>


      {/* Location Section */}
      <section className="my-24">
        <div className="wrapper">
          <h2 className="text-center text-2xl lg:text-3xl font-semibold tracking-tighter mb-24 text-slate-800">Conveniently Located in <span className="block lg:inline">Hixson, TN</span></h2>
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="left-side mb-20 lg:mb-0 lg:mr-8">
              {/* Address */}
              <div className="address-wrapper flex leading-relaxed text-xl text-slate-800">
                <MapPinIcon className="w-8 h-8 mt-1 text-green-700" />
                <div className="address ml-2">
                  <p className="flex uppercase font-light tracking-wider">4062 Hixson Pike</p>
                  <p className="uppercase font-light tracking-wider">Chattanooga, TN 37415</p>
                  <p className="font-bold">(423)877-3568</p>
                </div>
              </div>
              {/* Hours of Operation */}
              <div className="hours flex mt-24 text-xl text-slate-800">
                <BellIcon className="w-8 h-8 mt-1 text-green-700" />
                <div className="leading-relaxed ml-2">
                  <p className="flex font-light">Hours of Operation</p>
                  <p className="font-bold">Mon - Fri | 9am - 5:30pm</p>
                  <p className="font-bold">Sat | 9am - 2pm</p>
                </div>
              </div>
            </div>

            {/* Map */}
            {/* Small size for mobile - hidden on desktop */}
            <div className="right-side lg:hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.710900265178!2d-85.26017658872813!3d35.11392917266213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8860601a33a5dc03%3A0x1b637109a7b8c80a!2sAccess%20Family%20Pharmacy!5e0!3m2!1sen!2sus!4v1695651453337!5m2!1sen!2sus" width="400" height="300" style={{ border: "0"}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            {/* Large size for desktop screen - hidden on mobile */}
            <div className="right-side hidden lg:block lg:ml-8">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.710900260631!2d-85.26017122428732!3d35.113929172775656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8860601a33a5dc03%3A0x1b637109a7b8c80a!2sAccess%20Family%20Pharmacy!5e0!3m2!1sen!2sus!4v1695228982036!5m2!1sen!2sus" width="600" height="450" style={{ border: "0"}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="call-to-action flex justify-center items-center lg:h-96 z-0">
        <div className="overlay z-0">
          <div className="mx-auto mt-6 lg:w-1/2 py-8">
            <h2 className="text-lg px-6 lg:px-0 lg:text-3xl textShadow font-extrabold tracking-tight  text-center text-white z-0">Let Access Specialized Care take your medication management to the next level</h2>
              <button className="bg-black text-white text-sm mx-auto mt-8 px-2.5 lg:px-6 py-2.5 lg:py-3.5 z-10 rounded flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <a className="flex items-center lg:text-lg" href="tel:4238773568">Call Now
                  <PhoneIcon className=" w-4 h-4 lg:w-6 lg:h-6 ml-2" />
                </a>
              </button>
          </div>
        </div>


      </section>
    </main>
  )
}
