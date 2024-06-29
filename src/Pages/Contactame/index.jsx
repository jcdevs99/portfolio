import logowpp from '../../assets/whatsapp.png'
import gmaillogo from '../../assets/GmailIcon.png'

const ContactamePage = () => {
  return (

    <section className=' my-auto flex flex-col h-[400px] gap-10 w-[100%] text-center py-20   font-extrabold justify-center items-center' >
      <h1 className='text-[3rem]'>Ponte en contacto conmigo</h1>
      <div className='h-[250px] w-[350px] flex flex-col gap-10 justify-center items-center'>
          
        <a href="https://wa.me/593939349490?text=Hola%20John,%20me%20interesa%20la%20página%20web%20para%20mi%20negocio" target="_blank" className=''>  
          <button className='border-[2px] border-[black] dark:border-[white]  rounded-full p-4 w-[270px]  self-center text-[1.7rem] flex gap-4 justify-center' >
            Contactar por Whatsapp
            <img src={logowpp} alt="logowpp" className='w-[30px] h-[30px]' />
          </button>
        </a>

        <a href="mailto:jdxevs@gmail.com?subject=Interés%20en%20comprar%20un%20sitio%20web%20para%20mi%20negocio&body=Hola,%20estoy%20interesado%20en%20comprar%20un%20sitio%20web%20para%20mi%20negocio,%20a%20continuación%20te%20contaré%20qué%20necesito%20para%20mi%20web:" target="_blank" className=''>  
          <button className='border-[2px] border-[black] dark:border-[white]  rounded-full p-4 w-[270px]  self-center text-[1.7rem] flex gap-4 justify-center' >
            Contactar por Gmail
            <img src={gmaillogo} alt="logowpp" className='w-[30px] h-[30px]' />
          </button>
        </a>
      </div>

  </section>
  )
}

export {ContactamePage}