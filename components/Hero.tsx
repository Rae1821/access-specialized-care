import { PhoneArrowUpRightIcon } from '@heroicons/react/24/solid';


const Hero = () => {
  return (

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

  )
}

export default Hero
