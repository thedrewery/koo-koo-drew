import { useEffect, useRef } from "react";
import { createPortal } from 'react-dom';

const EditReviewModal = ({ review }) => {
    const elRef = useRef(null);
    if (!elRef.current) {
        elRef.current = document.createElement('div');
    }

    useEffect(() => {
        const modalRoot = document.getElementByIdById("modal")
        modalRoot.appendChil(elRef.current);
        
        return () => modalRoot.removeChild(elRef.current)
    }, [])
    
    return createPortal(<div>{review}</div>, elRef.current)
}

export default EditReviewModal;