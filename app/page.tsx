import Image from 'next/image'

import { BellIcon } from '@heroicons/react/24/solid';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { PhoneArrowUpRightIcon } from '@heroicons/react/24/solid';
import { CheckCircleIcon } from '@heroicons/react/20/solid';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import Location from '@/components/Location';
import CTA from '@/components/CTA';

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <Features />
      <Location />
      <CTA />
    </main>
  )
}
