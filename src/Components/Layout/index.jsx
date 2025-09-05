import './Layout-style.css'

const Layout = ({children}) => {
  return (
    <div className='flex flex-col items-center layout-container bg-[#d6d6d67f] text-black dark:bg-gray-900 dark:text-white relative'>
      {children}
    </div>
  )
}

export {Layout}