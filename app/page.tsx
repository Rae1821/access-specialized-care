import Image from 'next/image'

import { BellIcon } from '@heroicons/react/24/solid';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { PhoneArrowUpRightIcon } from '@heroicons/react/24/solid';
import { CheckCircleIcon } from '@heroicons/react/20/solid';

export default function Page() {
  return (
    <main>
      <section className="hero-section hero-bg relative h-screen w-full">
          <div className="overlay">
            <h1 className="text-5xl md:text-5xl textShadow tracking-tight text-white relative lg:mt-24 z-10 pt-48 lg:pt-64 px-2 lg:pl-12 lg:text-6xl font-bold lg:w-2/3">Simplify your medication systems</h1>
            <p className="text-slate-200 lg:text-lg para-font lg:block z-20 relative lg:w-2/5 leading-relaxed px-2 pt-2 lg:pl-12 lg:pt-8 mb-12">We specialize in providing medication packaging needs for nursing homes, assisted living facilities, and special needs facilities</p>
            <button className="bg-black text-slate-100 ml-4 lg:ml-12 px-6 py-3.5 relative z-10 rounded-full flex uppercase transition ease-in-out delay-150 hover:-translate-y-1 duration-300">
              <a className="flex " href="tel:4238773568">Call Now
                <PhoneArrowUpRightIcon className="w-6 h-6 ml-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-1 duration-300" />
              </a>
            </button>
          </div>
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
              className="rounded shadow-lg mr-0"
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
          <h2 className="text-3xl lg:text-4xl text-slate-800 font-bold text-center tracking-tighter py-8 z-30 max-w-5xl mx-auto">Features & Benefits</h2>
        </div>
        <div className="cards-container bg-green-900/40 lg:bg-transparent flex flex-col lg:flex-row lg:justify-center px-6 pb-8 lg:absolute top-36 z-40 para-font">
          {/* Card */}
          <div className="card bg-white w-full lg:w-1/5 lg:mx-2 mb-8 lg:mb-0 px-4 py-6 rounded z-40 shadow-lg border-t-8 border-green-900 transition ease-in-out delay-150 hover:-translate-y-2 duration-300">
            <p className="font-bold mt-4 tracking-tight text-center text-slate-800">Medication Management</p>
            <ul className="mt-2 flex flex-col">
              <li className="flex my-4 text-sm justify-start text-gray-700">
                <span className="text-green-800 mr-2">
                    <CheckCircleIcon className="w-5 h-5" />
                </span>
                3 different packing systems to choose from
              </li>
              <li className="flex my-4 text-sm justify-start text-gray-700">
                <span className="text-green-800 mr-2">
                  <CheckCircleIcon className="w-5 h-5" />
                </span>
                Extensive drug utilization review
              </li>
            </ul>
          </div>

          {/* Card */}
          <div className="card bg-white w-full lg:w-1/5 lg:mx-2 mb-8 lg:mb-0 px-4 py-6 rounded shadow-lg border-t-8 border-green-900 transition ease-in-out delay-150 hover:-translate-y-2 duration-300">
            <p className="font-bold tracking-tighter text-center text-slate-800 mt-4">Tamper Proof Packaging</p>
            <ul className="mt-2 flex flex-col">
              <li className="text-sm flex my-4 leading-relaxed justify-start text-slate-700">
                <span className="text-green-800 mr-2">
                  <CheckCircleIcon className="w-5 h-5" />
                </span>
                  State of the art medication packing system
              </li>
              <li className="text-sm flex my-4 justify-start text-gray-700">
                <span className="text-green-800 mr-2">
                  <CheckCircleIcon className="w-5 h-5" />
                </span>
                  Convenient to manage and dispense accurately
              </li>
              <li className="text-sm flex my-4 justify-start text-gray-700">
                <span className="text-green-800 mr-2">
                  <CheckCircleIcon className="w-5 h-5" />
                </span>
                  Medication carts, E-Mar system, drug disposal, and more!
              </li>
            </ul>
          </div>

          {/* Card */}
          <div className="card bg-white w-full lg:w-1/5 lg:mx-2 mb-8 lg:mb-0 px-4 py-6 rounded shadow-lg border-t-8 border-green-900 transition ease-in-out delay-150 hover:-translate-y-2 duration-300">
            <p className="font-bold mt-4 tracking-tighter text-center text-slate-800">Easy Patient Administration</p>
            <ul className="mt-2 flex flex-col">
              <li className="text-sm flex my-4 justify-start text-gray-700">
                <span className="text-green-800 mr-2">
                  <CheckCircleIcon className="w-5 h-5" />
                </span>
                  Ability to make immediate prescription changes + same day delivery
              </li>
              <li className="text-sm flex my-4 justify-start text-gray-700">
                <span className="text-green-800 mr-2">
                  <CheckCircleIcon className="w-5 h-5" />
                </span>
                  Acceptance of all major insurance plans
              </li>
            </ul>
          </div>



          {/* Card */}
          <div className="card bg-white w-full lg:w-1/5 lg:mx-2 mb-8 lg:mb-0 px-4 py-6 rounded shadow-lg border-t-8 border-green-900 transition ease-in-out delay-150 hover:-translate-y-2 duration-300">
            <p className="mt-4 font-bold tracking-tighter text-center text-slate-800">Utmost Convenience</p>
            <ul className="mt-2 flex flex-col">
              <li className="text-sm flex my-4 justify-start text-slate-800">
                <span className="text-green-800 mr-2">
                  <CheckCircleIcon className="w-5 h-5" />
                </span>
                Fast, local delivery. Licensed in TN & GA
              </li>
              <li className="text-sm flex mt-4 mb-4 justify-start text-slate-800">
                <span className="text-green-800 mr-2">
                  <CheckCircleIcon className="w-5 h-5" />
                </span>
                On site diabetic fittings and screenings
              </li>
              <li className="text-sm flex my-4 justify-start text-slate-800">
                <span className="text-green-800 mr-2">
                  <CheckCircleIcon className="w-5 h-5" />
                </span>
                On site vaccinations
              </li>
              <li className="text-sm flex my-4 justify-start text-slate-800">
                <span className="text-green-800 mr-2">
                  <CheckCircleIcon className="w-5 h-5" />
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
            width={250}
            height={250}
          />
        </div>
      </section>


      {/* Location Section */}
      <section className="my-24 pb-12">
        <div className="wrapper">
          <h2 className="text-center text-2xl lg:text-3xl font-semibold tracking-tighter mb-24 text-slate-800">Conveniently Located in <span className="block lg:inline">Hixson, TN</span></h2>
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="left-side mb-20 lg:mb-0 lg:mr-8">
              {/* Address */}
              <div className="address-wrapper flex leading-relaxed text-xl text-slate-800 shadow-lg p-4 rounded border-l-4 border-green-700">
                <MapPinIcon className="w-6 h-6 mt-1 text-slate-300" />
                <div className="address ml-2">
                  <p className="flex text-slate-800 font-light tracking-wide">4062 Hixson Pike</p>
                  <p className="font-light tracking-wider">Chattanooga, TN 37415</p>
                  <p className="font-bold pt-2">(423)877-3568</p>
                </div>
              </div>
              {/* Hours of Operation */}
              <div className="hours flex mt-24 p-4 shadow-lg text-xl rounded border-l-4 border-green-700 text-slate-800">
                <BellIcon className="w-6 h-6 mt-1 text-slate-300" />
                <div className="leading-relaxed ml-2">
                  <p className="flex font-light pb-2">Hours of Operation</p>
                  <p className="text-gray-900 font-medium">Mon - Fri |<span className="text-gray-600 font-normal"> 9am - 5:30pm</span></p>
                  <p className="text-gray-900 font-med">Sat | <span className="text-gray-600 font-normal"> 9am - 2pm</span></p>
                </div>
              </div>
            </div>

            {/* Map */}
            {/* Small size for mobile - hidden on desktop */}
            <div className="right-side shadow-lg lg:hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.710900265178!2d-85.26017658872813!3d35.11392917266213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8860601a33a5dc03%3A0x1b637109a7b8c80a!2sAccess%20Family%20Pharmacy!5e0!3m2!1sen!2sus!4v1695651453337!5m2!1sen!2sus" width="400" height="300" style={{ border: "0"}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            {/* Large size for desktop screen - hidden on mobile */}
            <div className="right-side hidden shadow-lg lg:block lg:ml-8">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.710900260631!2d-85.26017122428732!3d35.113929172775656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8860601a33a5dc03%3A0x1b637109a7b8c80a!2sAccess%20Family%20Pharmacy!5e0!3m2!1sen!2sus!4v1695228982036!5m2!1sen!2sus" width="600" height="450" style={{ border: "0"}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="call-to-action flex items-center h-72 lg:h-96 z-0">
        <div className="overlay h-72 lg:h-96 z-0">
          <div className="mt-6 lg:w-1/2 pt-16 px-2 lg:pl-12">
            <h2 className="text-xl lg:pt-8 lg:text-3xl textShadow font-semibold tracking-tight lg:leading text-center lg:text-left text-white z-0">Let Access Specialized Care take your medication management to the next level</h2>
            <button className="bg-black text-sm lg:text-base text-white mt-4 lg:mt-8 mx-auto lg:mx-0 px-4 lg:px-6 py-2 lg:py-3.5 relative z-10 rounded-full flex uppercase transition ease-in-out delay-150 hover:-translate-y-1 duration-300">
              <a className="flex items-center" href="tel:4238773568">Call Now
                <PhoneArrowUpRightIcon className="w-4 h-4 lg:w-6 lg:h-6 ml-2" />
              </a>
            </button>
          </div>
        </div>


      </section>
    </main>
  )
}
