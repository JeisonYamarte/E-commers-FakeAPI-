import React from "react";

const useLocalStorage = (itemName, initialValue) => {
  const [item, setItem] = React.useState(initialValue);
  
  

  React.useEffect(()=>{
    
        
        const localStorageItem = localStorage.getItem(itemName);
        
        let parsedItem;
    
        
        if(!localStorageItem){
          localStorage.setItem(itemName,JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else{
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
    
        }
       
      
      
  
  },[])

  const saveItem = (newItem) => {
   localStorage.setItem(itemName, JSON.stringify(newItem));
    
    setItem(newItem);
  }
  

  return {item, saveItem};
}
  
export { useLocalStorage}