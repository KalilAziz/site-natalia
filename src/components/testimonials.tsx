import { testimonials } from '@/config/testimonials'
import Image from 'next/image'

export const Testimonials = () =>  {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-fit text-center text-rose700 space-y-2 mb-10">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Depoimentos</h2>
        <div className='bg-rose700 h-[3px] w-4/5 mx-auto' />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
         {testimonials.map((testimonial) =>  (
            <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0" key={testimonial.author}>
             <figure className="mt-10 flex flex-auto flex-col justify-between">
               <blockquote className="text-lg leading-8 text-gray-900">
                 <p>
                   {testimonial.desciption}
                 </p>
               </blockquote>
               <figcaption className="mt-10 flex items-center gap-x-6">
                  <Image
                   className="h-12 w-12 rounded-full bg-gray-50"
                   src={testimonial.imageSrc}
                   width={48}
                   height={48}
                   alt=""
                 />
                 <div className="text-base">
                   <div className="font-semibold text-gray-900">{testimonial.author}</div>
                   <div className="mt-1 text-gray-500">{testimonial.company}</div>
                 </div>
               </figcaption>
             </figure>
           </div>
           )
         )}
        </div>
      </div>
    </section>
  )
}
