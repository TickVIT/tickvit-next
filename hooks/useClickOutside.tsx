import React, { MutableRefObject } from 'react'
const useClickOutside = (
    ref: MutableRefObject<any>,
    setOpen: (open?: boolean) => void,
    open: boolean
) => {
    React.useEffect(() => {
        const eventListener = (event: MouseEvent) => {
            if (open && ref.current && !ref.current.contains(event.target))
                setOpen(false)
        }
        document.addEventListener('mousedown', eventListener)
        return () => {
            document.removeEventListener('mousedown', eventListener)
        }
    }, [ref, open])
}

export { useClickOutside }
