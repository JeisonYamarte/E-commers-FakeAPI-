

function Layout({children}) {
  return (
    <div className='relative flex flex-col items-center pt-20 w-screen h-screen overflow-auto'>
        {children}
    </div>
  )
}

export {Layout}