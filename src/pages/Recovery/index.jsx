import { useSearchParams } from "react-router-dom";
import { Layout } from "../../Components/Layout";
import { RecoveryForm } from "./RecoveryForm";
import { RecoveryChangePassword } from "./RecoveryChangePassword";





function Recovery(){
    
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token') || '';
    
    const renderView = () => {
        if (token !== ''){
        return <RecoveryChangePassword token={token}/>
    } else {
        return <RecoveryForm/>;
    }
    }
    
    
    return(
        <Layout>
            {renderView()} 
        </Layout>
    )
}

export {Recovery}