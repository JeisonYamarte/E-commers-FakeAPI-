import React from 'react'
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
  } = React.useContext(ShoppingContext);

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
      return (<>
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
      <div className='relative flex items-center justify-center w-80 mb-4 '>
        <h1 className='font-medium text-xl'>Excluive Products</h1>
      </div>

      <div className='grid gap-4 lg:p-0 lg:grid-cols-4 p-5 w-full max-w-screen-lg md:grid-cols-2 grid-cols-2 auto-rows-[250px]'>
      {
        renderView()
      }
      </div>
    </Layout>
  )
}

export {Home}