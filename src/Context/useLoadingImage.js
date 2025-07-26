import { useState, useEffect } from "react";


const useImageLoading = (src) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!src) return;

        setLoading(true);
        setError(false);

        const img = new Image();
        
        img.onload = () => {
        setLoading(false);
        setError(false);
        };
        
        img.onerror = () => {
        setLoading(false);
        setError(true);
        };
        
        img.src = src;

        // Cleanup
        return () => {
        img.onload = null;
        img.onerror = null;
        };
    }, [src]);

    return { loading, error };
};

export {useImageLoading}