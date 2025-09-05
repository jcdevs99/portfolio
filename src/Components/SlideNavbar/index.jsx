import {  NavLink } from 'react-router-dom'


const SlideNabvar = ({action=()=>{}}) => {
  const activeClass = 'underline underline-offset-8';

  return (
    <div className='w-[250px] fixed top-[60px] right-0 bottom-0 dark:bg-[#20202081] backdrop-blur-[10px] bg-[#ffffff20] dark:text-white  text-[1.7rem] font-bold z-20  sm:hidden s:mw-0'>
      <ul className='p-10 flex flex-col gap-5'>
        <NavLink onClick={action} to='/home' className={({isActive}) => isActive ? activeClass : undefined}>
        <li >Home</li>
        </NavLink>
        <NavLink onClick={action} to='/satelite' className={({isActive}) => isActive ? activeClass : undefined}>
        <li >Satélite</li>
        </NavLink>
        <NavLink onClick={action} to='/proyectos' className={({isActive}) => isActive ? activeClass : undefined}>
        <li>Proyectos</li>
        </NavLink>
        <NavLink onClick={action} to='/contact' className={({isActive}) => isActive ? activeClass : undefined}>
        <li>Contactame</li>
        </NavLink>
      </ul>
    </div>
  )
}
export {SlideNabvar}