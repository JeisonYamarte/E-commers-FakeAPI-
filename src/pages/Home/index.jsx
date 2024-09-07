import React from 'react'
import { Layout } from '../../Components/Layout'
import { Card } from '../../Components/Card'
import { ShoppingContext } from '../../Context'


function Home() {
  const {
    filteredItems,
  } = React.useContext(ShoppingContext);

  console.log('filteredItems', filteredItems)
  const renderView = ()=>{
    if (filteredItems.length > 0) {
      return (
        <>
        {
          filteredItems?.map((item)=>{
            return <Card key={item.id} data={item} />
          })
        }
      </>
      ) 
    } else {
      return (
        <>  We don't have anything </>
      )
    }
  }

  return (
    <Layout>
       <div className='relative flex items-center justify-center w-80 mb-4 '>
        <h1 className='font-medium text-xl'>Excluive Products</h1>
      </div>

      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
      {
        renderView()
      }
      </div>
    </Layout>
  )
}

export {Home}