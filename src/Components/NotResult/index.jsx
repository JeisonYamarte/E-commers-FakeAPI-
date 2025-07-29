import { CloudAlertIcon } from "lucide-react"

function NotResult (){

    return(
        <div className="w-full flex justify-center items-center flex-col text-hueso">
            <CloudAlertIcon />
            <p>We don&apos;t have anything</p>
        </div>
    )
}

export {NotResult}