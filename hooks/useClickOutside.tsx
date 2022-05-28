import React from 'react'

const useClickOutside = (ref: any, setDropDown: any, dropDown: any) => {
    React.useEffect(() => {
        const eventListener = (event: any) => {
            if (dropDown && ref.current && !ref.current.contains(event.target))
                setDropDown(false)
        }
        document.addEventListener('mousedown', eventListener)
        return () => {
            document.removeEventListener('mousedown', eventListener)
        }
    }, [ref, dropDown])
}

export { useClickOutside }
