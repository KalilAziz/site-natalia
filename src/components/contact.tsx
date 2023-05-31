import { BsCursor, BsWhatsapp } from 'react-icons/bs'
import { AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai'

export const contact = [
  {
    name: 'Whatsapp',
    contact: '(00) 00000-0000',
    icons: BsWhatsapp
  },
  {
    name: 'Endereço',
    contact: 'Avenida...',
    icons: BsCursor
  },
  {
    name: 'E-mail',
    contact: 'Lalala@gmail.com',
    icons: AiOutlineMail
  },
  {
    name: 'Linkedin',
    contact: 'www.linkedin....',
    icons: AiOutlineLinkedin
  }
]

export const Contact = () =>  {
  return (
    <div className="bg-blue500 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-rose700">Entrar em contato</h2>
              <p className="mt-4 leading-7 text-slate-100">
                Lorem ipsum dolor sit amet consectetur. Gravida urna duis accumsan duis duis ante ullamcorper quis. Mauris eget morbi lorem morbi.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              {
                contact.map((contact) => (
                  <div className="rounded-2xl bg-blue300 p-10" key={contact.name}>
                    <div className='flex items-center gap-3'>
                      <contact.icons className="h-6 w-6 text-rose700" aria-hidden="true" />
                      <h3 className="text-base font-semibold leading-7 text-slate-100">{contact.name}</h3>
                    </div>
                    <dl className="mt-3 space-y-1 text-sm leading-6 text-slate-200">
                      <div className="mt-1">
                        <dt className="sr-only">{contact.name}</dt>
                        <dd>{contact.contact}</dd>
                      </div>
                    </dl>
                  </div>
                ))
              }
       
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
