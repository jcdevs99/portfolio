import foto from '../../assets/mifoto2.jpg'
import canva1 from '../../assets/canva1.png'
import './home.css'
import { Link } from 'react-router-dom'
import { scrollToIndex } from '../../Components/ScrollToIndex'

const Home = () => {

  const titleNew = "Compra una página web para tu Negocio"; 
  document.title = titleNew;
  return (
    <>
      <section className='w-[100%] max-w-[900px] h-[600px] justify-center pb-20 lg:py-20 my-auto flex gap-[3rem] items-center ss:flex-col lg:flex-row lg:gap-10'>
        <div className='flex flex-col  gap-10 items-center ss:w-[255px]  lg:w-[330px] '>
          <div className='w-auto h-auto dark:border-white border-cyan-500  border-[3px] rounded-full mi_foto_hover '  >
            <img src={foto} alt="mi_foto" className="mifoto rounded-full object-cover" />
            
          </div>

          <h1 className='w-[320px] text-[2.5rem] dark:text-[white] font-semibold text-center'>Hola soy John Córdova Frontend Developer</h1>
        </div>
        <div className='w-[90%] text-[1.8rem] dark:text-[white]   text-center flex flex-col gap-2'>
          <p className='text-[2rem] texto_aparicion'>
            Me especializo en Desarrollo Web <strong>full stack utilizando JavaScript</strong> y me dedico a crear sitios web para cualquier tipo de <strong>negocio.</strong>
          </p>
        </div>
      </section>
      <section className='relative h-[500px] w-full min-w-[320px] max-w-[2000px] flex  justify-center items-center dark:bg-gray-800 text-[1.8rem] '>
        <div className='flex flex-col h-[150px] w-[90%] max-w-[650px] justify-center text-center'>
          <h2 className='text-[2.3rem] pb-10 '>
            ¿SABÍAS QUÉ?
          </h2>
          <p className='text-[20px]'>Tus clientes están ahora en <strong>Internet</strong> buscando y comprando productos que vieron en Internet. Además, está demostrado que los negocios físicos pueden aumentar su margen de ganancias al mantener un negocio <strong>100%</strong> en línea las 24 horas al día.
          </p>
          <p className='text-[20px]'> Hoy en día, el mayor número de ventas se realizan por Internet en tiendas como <strong>Amazon, TiendaMia, MercadoLibre, etc.</strong>
          </p>
        </div>
      </section>
      {/* lista de beneficios */}
      <section className='flex flex-col w-[90%] h-[700px] smMax:h-[800px] text-center justify-center items-center py-20 text-[1.8rem] '>
        <h3 className='font-bold text-[2rem] py-10'>
          ¿Por qué es importante tener una página web?
        </h3>
        <ul className="list-disc list-inside">
          <li className="mb-2">Presencia en línea las 24 horas del día, los 7 días de la semana.</li>
          <li className="mb-2">Aumento de la credibilidad y confianza en tu marca o negocio.</li>
          <li className="mb-2">Ampliación del alcance para llegar a clientes potenciales en todo el mundo.</li>
          <li className="mb-2">Facilitación del marketing y promoción de tus productos o servicios.</li>
          <li className="mb-2">Ofrecimiento de una plataforma para comunicarte directamente con tus clientes.</li>
          <li className="mb-2">Posibilitación de la venta en línea y la expansión de tus operaciones comerciales.</li>
          <li className="mb-2">Diferenciación de tu negocio de la competencia y posicionamiento en el mercado.</li>
          <li className="mb-2">Facilitación del acceso a información relevante para tus clientes.</li>
        </ul>
       
      </section>

      {/* precio 1 */}
      <section className='w-[100%] h-[500px] smMax:h-[900px] flex flex-col  items-center justify-center dark:bg-gray-800 text-[1.8rem] '>
        <div className='w-[90%] h-[450px]smMax:h-[700px]  flex smMax:flex-col   items-center'>
        <div>
          <h4 className='font-bold text-center text-[2rem]'>Oferta especial</h4>
          <img src={canva1} alt="canva1" className='p-10 h-[300px] w-[300px]'  />
          <p className='font-bold text-center text-[4rem] font-serif'>200$</p>
        </div>
        <div className='w-[100%] flex flex-col gap-10  '>
          <h3 className='font-bold text-center'>Página web personal</h3>
          <div className='flex flex-col gap-2'>
            <p className='font-light text-[1.7rem] text-center'>Recomendado para negocios pequeños, profesionales, influencers, artistas, fotógrafos y deportistas que deseen promocionar su talento y productos a través de un sitio web totalmente personalizable.  </p>
            <p className='font-light text-center text-[1.7rem] '>
            Contarás con 5 correos empresariales únicos que te ayudarán a generar mayor confianza entre tus clientes.
            </p>
            <p className='font-light text-center text-[1.7rem] '>Además, tendrás la capacidad de cargar tus productos, venderlos y recibir los pagos directamente en tu cuenta bancaria. </p>
          </div>
          <button className='border-[2px] border-[black] dark:border-[white]  rounded-xl p-3 mt-10 w-[140px] self-center' ><a href="https://wa.me/5939349490?text=Hola%20John,%20me%20interesa%20la%20página%20web%20para%20mi%20negocio" target="_blank">Contactar</a></button>
        </div>

        </div>
      </section>

      <section className='flex flex-col w-[100%] h-[500px] smMax:h-[600px] text-center justify-center items-center py-20 text-[1.8rem] '>
        <p className=' max-w-[800px] p-10 '>
          Es fundamental contar con un sitio web disponible para brindar mayor <strong>confianza y credibilidad</strong>  a tu marca, tanto para las personas que ya conocen tu negocio como para aquellas que llegarán a él. Un sitio web bien diseñado no solo fortalece la presencia en línea de tu marca, sino que también <strong>facilita la interacción con tus clientes potenciales</strong>, proporcionándoles información detallada sobre tus productos o servicios y generando una experiencia positiva que fomente la confianza y la lealtad hacia tu marca.
        </p>

      </section>
      <section className='dark:bg-gray-800 my-auto flex flex-col gap-10 w-[100%] h-[800px] justify-center text-center py-20  text-[1.8rem] items-center'>
     
        <div className='w-[100%] flex flex-col items-center gap-10 relative '>
          <h2 className='text-[2.3rem] font-extrabold'>Tengo conocimientos en:</h2>
          <ul className='flex flex-col lg:flex-wrap gap-4 list-disc text-start w-[80%] h-auto lg:w-[920px] lg:h-[300px] '>
            <li>Html.</li>
            <li>Css.</li>
            <li >JavaScript.</li>
            <li >React.js.</li>
            <li>Vite.js.</li>
            <li>NPM manejo de dependencias.</li>
            <li >Webpack.</li>
            <li>Maquetación web con Responsive Desing(Mobile first).</li>
            <li>GitHub.</li>
            <li>MySql.</li>
            <li>Tiendas online con Wordpress y pagos online con Woocommerce.</li>
            <li>Google Analitics.</li>
            <li>Php(Basico).</li>
            <li>Java.</li>
            <li>C.</li>
          </ul>
          <Link to='/projects' onClick={scrollToIndex}>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-[250px] rounded-xl focus:outline-none focus:shadow-outline'>Mirar proyectos</button>
          </Link>
        </div>



      </section>


    </>
 
  )
}



export { Home }