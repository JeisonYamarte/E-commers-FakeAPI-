import React from 'react'
import { Layout } from '../../Components/Layout'
import { Card } from '../../Components/Card'

function Home() {
  const API = 'https://fakestoreapi.com/products';
  const [items, setItems] = React.useState(null);
  

  React.useEffect(()=>{
    fetch(API)
      .then(response => response.json())
      .then(data => setItems(data));
      
  },[])



  return (
    <Layout>
      Home
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
      {
        items?.map((item)=>{
          return <Card key={item.id} data={item} />
        })
      }
      </div>
    </Layout>
  )
}

export {Home}