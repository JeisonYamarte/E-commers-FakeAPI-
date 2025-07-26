import React from 'react'
import { ShoppingCartIcon} from '@heroicons/react/24/outline'
import { useParams } from 'react-router-dom';
import { Layout } from '../../Components/Layout'
import { CardItems } from '../../Components/CardItems'
import { ShoppingContext } from '../../Context'
import { LoadingCard } from '../../Components/LoadingCard';


function Home() {
  const {
    filteredItems,
    setCategory,
    isLoading,
    openCheckoutSideMenu,
    count
  } = React.useContext(ShoppingContext);

  const [animationOn, SetAnimationOn] = React.useState(false)

  React.useEffect(()=>{
    SetAnimationOn(true);
    const timer = setTimeout(()=> SetAnimationOn(false), 800)

    return (()=> clearTimeout(timer))
  }, [count])

  const params = useParams();
  const indexIdPath = params.id
  
  React.useEffect(()=>{
    
    if (!indexIdPath){
      setCategory('all');
    } else{
      setCategory(indexIdPath);
    }

  },[setCategory, indexIdPath])

  
  const renderView = ()=>{
    if (isLoading === true) {
      return (
      <>
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
      </>
      ) 
    } else if( filteredItems?.length > 0){
      return(<>
        {
          filteredItems?.map((item)=>{
            return <CardItems key={item.id} data={item} />
          })
        }
      </>)
    } else {
      return (
        <div>  We don't have anything </div>
      )
    }
  }

  return (
    <Layout>
      <div className=' text-center w-60 mb-4 bg-duraznoclaro rounded-lg'>
        <h1 className='font-medium text-xl text-hueso'>Excluive Products</h1>
      </div>

      <div className='grid gap-4 lg:p-0 lg:grid-cols-4 p-5 w-full max-w-screen-lg md:grid-cols-2 grid-cols-2 auto-rows-[250px]'>
      {
        renderView()
      }
      </div>
      <span className={`lg:hidden fixed bottom-7 right-8 z-50 w-10 h-10 bg-hueso rounded-full flex justify-center items-center ${animationOn ? 'animate-wobble-ver-left duration-300' : ''}`} onClick={()=> {
          openCheckoutSideMenu();
      }} >
          <ShoppingCartIcon className='relative w-6 h-6' /> <span className='absolute flex items-center justify-center w-4 h-4 p-1 rounded-full bg-duraznoclaro top-0 right-0'>{count}</span>
      </span>
    </Layout>
  )
}

export {Home}