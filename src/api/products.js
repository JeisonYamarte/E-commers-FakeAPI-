import api from './axiosConfig';


export const getProducts = async (category) =>{
    try {
        let url = '/products';
        if (category) {
            switch (category) {
                case 'clothes':
                    url = '/categories/6';
                    break;
                case 'furnitures':
                    url = '/categories/8';
                    break;
                case 'electronics':
                    url = '/categories/7';
                    break;
                case 'others':
                    url = '/categories/10';
                    break;
                case 'toys':
                    url = '/categories/9';
                    break;
                default:
                    url= '/products';
                    break;
            }
        }
        const response = await api.get(url);
        return response.data.products || response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
}
    /*const filterItemsByTitle = (items, searchByTitle) =>{
        return items.filter(item => item.name.toLowerCase().includes(searchByTitle.toLowerCase()));
    }*/

export const getSearchProducts = async (search) =>{
    try{
        const response = await api.get(`/products?search=${search}`)
        return response.data;
    } catch (error) {
        console.error("Error fetching search products:", error);
        throw error;
    }
}

