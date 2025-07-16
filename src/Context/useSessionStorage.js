import React from "react";

const useSessionStorage = (itemName, initialValue) => {
  const [item, setItem] = React.useState(initialValue);
  
  

  React.useEffect(()=>{
    
        
        const sessionStorageItem = sessionStorage.getItem(itemName);
        
        let parsedItem;
    
        
        if(!sessionStorageItem){
          sessionStorage.setItem(itemName,JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else{
          parsedItem = JSON.parse(sessionStorageItem);
          setItem(parsedItem);
    
        }
      
      
      
  
  },[])

  const saveItem = (newItem) => {
  sessionStorage.setItem(itemName, JSON.stringify(newItem));
    
      setItem(newItem);   
  }
  

  return {item, saveItem};
}
  
export { useSessionStorage}