// 'use client'

import Carousel from '../components/carousel'
import Testimonials from '../components/testimonials'
import Share from '../components/share'
import Contact from '../components/contact'
import { Separator } from "@/components/ui/separator"

export default function Home() {

  return (
    <main className="flex flex-col gap-2 items-center justify-between max-w-xl m-auto">
      <section className=''>
        {/* Cover photo */}
        <div className='relative'>
          <div className='h-36'>
            <img
            src={'https://i.pinimg.com/736x/a3/84/99/a3849970a75fee114f2c9dc82596640c.jpg'}
            width={576}
            height={500}
            alt='cover photo'
            className='h-full object-cover'
            />
          </div>
          <div className='w-24 h-24 rounded-full bg-gray-100 absolute left-1/2 top-24 -translate-x-1/2'>
            <img 
            src="https://cdn1.iconfinder.com/data/icons/project-management-8/500/worker-512.png" 
            alt="profile photo" 
            className=''
            />
          </div>
        </div>
        {/* Share */}
        <div className='relative'>
          <div className='absolute right-8 top-3'>
            <Share />
          </div>
        </div>
        {/* Info & Links */}
        <div className='flex items-center flex-col text-center pt-14 bg-white'>
          <div className='my-4'>
            <h1 className='text-sm mb-2 font-semibold'>PHOTO CHEF | Photographer</h1>
            <p className='max-w-[300px] text-xs'>I capture moments.</p>
          </div>
          {/* Links */}
          <div className='flex gap-6 mb-6'>
            <div>
              <a href="https://www.instagram.com/the.photo.chef/" target={'_blank'}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
              </a>
            </div>
            <div>
              <a href="https://www.tiktok.com/@the.photo.chef" target={'_blank'}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 448 512"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>
              </a>
            </div>
            <div>
              <a href="/">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 512 512"><path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/></svg>
              </a>
            </div>
            <div>
              <a href="/">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 448 512" fill='#00000'><style></style><path d="M224 122.8c-72.7 0-131.8 59.1-131.9 131.8 0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6 49.9-13.1 4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8 0-35.2-15.2-68.3-40.1-93.2-25-25-58-38.7-93.2-38.7zm77.5 188.4c-3.3 9.3-19.1 17.7-26.7 18.8-12.6 1.9-22.4.9-47.5-9.9-39.7-17.2-65.7-57.2-67.7-59.8-2-2.6-16.2-21.5-16.2-41s10.2-29.1 13.9-33.1c3.6-4 7.9-5 10.6-5 2.6 0 5.3 0 7.6.1 2.4.1 5.7-.9 8.9 6.8 3.3 7.9 11.2 27.4 12.2 29.4s1.7 4.3.3 6.9c-7.6 15.2-15.7 14.6-11.6 21.6 15.3 26.3 30.6 35.4 53.9 47.1 4 2 6.3 1.7 8.6-1 2.3-2.6 9.9-11.6 12.5-15.5 2.6-4 5.3-3.3 8.9-2 3.6 1.3 23.1 10.9 27.1 12.9s6.6 3 7.6 4.6c.9 1.9.9 9.9-2.4 19.1zM400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM223.9 413.2c-26.6 0-52.7-6.7-75.8-19.3L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5 29.9 30 47.9 69.8 47.9 112.2 0 87.4-72.7 158.5-160.1 158.5z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ------------------- */}
      <section className='bg-white w-full py-4'>
        <h1 className='text-center mb-4 font-semibold'>Fav shots</h1>
        <div>
          <Carousel />
        </div>
      </section>
      {/* ------------------- */}
      <section className='bg-white w-full py-4'>
        <h1 className='text-center mt-2 mb-4 font-semibold'>Clients Testimonials</h1>
        <div>
          <Testimonials />
        </div>
      </section>
      {/* -------------------- */}
      <section className='bg-white w-full py-4'>
        <h1 className='text-center mt-2 font-semibold'>Contact me</h1>
        <div className='flex items-center justify-center gap-4'>
          <h1 className='text-sm my-2 uppercase'>Portrait</h1>
          <h1 className='text-sm my-2 uppercase'>Fashion</h1>
          <h1 className='text-sm my-2 uppercase'>Event</h1>
          <h1 className='text-sm my-2 uppercase'>Wedding</h1>
        </div>
        {/* <p className='text-center my-2'>Models! Let's create something beautiful together!</p> */}
        <div className='mt-4'>
          <Contact />
        </div>
      </section>
    </main>
  )
}