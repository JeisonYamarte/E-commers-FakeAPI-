import {FileImage, Loader2 } from 'lucide-react';
import { useImageLoading } from '../../Context/useLoadingImage';

function ImageState({src, alt}){
    const { loading, error} = useImageLoading(src)

    return(
        <>
            {loading && (
                <div className='h-full w-full flex justify-center items-center'>
                    <Loader2 className='animate-spin w-20 h-20 text-duraznoclaro'/>
                </div>
            )}
            {error && (
                <div className='w-full h-full flex flex-col justify-center items-center bg-piedra rounded-lg'>
                    <FileImage className='w-10 h-10' />
                    <p className='text-sm'>The image could not be loaded</p>
                </div>
            )}
            {!loading && !error && (
                <img className='w-full h-full object-cover rounded-lg' src={src} alt={alt} />
            )}
        </>
    )
}

export {ImageState}