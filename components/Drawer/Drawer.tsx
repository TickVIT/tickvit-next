import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import cn from 'classnames'
import useMountTransition from '../../hooks/useMountTransition'
import classes from './Drawer.module.scss'

function createPortalRoot() {
    const drawerRoot = document.createElement('div')
    drawerRoot.setAttribute('id', 'drawer-root')

    return drawerRoot
}

interface DrawerProps {
    isOpen: boolean
    children: React.ReactNode
    className?: string
    onClose: () => void
    position?: 'left' | 'right' | 'top' | 'bottom'
    removeWhenClosed?: boolean
}

const Drawer = ({
    isOpen,
    children,
    className,
    onClose,
    position = 'left',
    removeWhenClosed = false,
}: DrawerProps) => {
    const bodyRef = useRef<null | HTMLElement>(null)
    let portalRootRef = useRef<null | HTMLElement>(null)
    const isTransitioning = useMountTransition(isOpen, 300)
    const [domReady, setDomReady] = useState(false)

    useEffect(() => {
        setDomReady(true)
    })

    // Append portal root on mount
    useEffect(() => {
        bodyRef.current = document.querySelector('body')
        portalRootRef.current =
            document.getElementById('drawer-root') || createPortalRoot()
        bodyRef?.current?.appendChild(portalRootRef.current)
        const portal = portalRootRef.current
        const bodyEl = bodyRef.current

        return () => {
            // Clean up the portal when drawer component unmounts
            portal.remove()
            // Ensure scroll overflow is removed
            bodyEl!.style.overflow = ''
        }
    }, [])

    // Prevent page scrolling when the drawer is open
    useEffect(() => {
        const updatePageScroll = () => {
            if (isOpen) {
                bodyRef!.current!.style.overflow = 'hidden'
            } else {
                bodyRef!.current!.style.overflow = ''
            }
        }

        updatePageScroll()
    }, [isOpen])

    // Allow Escape key to dismiss the drawer
    useEffect(() => {
        const onKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose()
            }
        }

        if (isOpen) {
            window.addEventListener('keyup', onKeyPress)
        }

        return () => {
            window.removeEventListener('keyup', onKeyPress)
        }
    }, [isOpen, onClose])

    if (!isTransitioning && removeWhenClosed && !isOpen) {
        return null
    }

    return domReady
        ? createPortal(
              <div
                  aria-hidden={isOpen ? 'false' : 'true'}
                  className={cn(
                      classes.drawerContainer,
                      isOpen && classes.open,
                      isTransitioning && classes.in,
                      className
                  )}
              >
                  <div className={cn(classes.drawer, position)} role="dialog">
                      {children}
                  </div>
                  <div className={classes.backdrop} onClick={onClose} />
              </div>,
              portalRootRef.current!
          )
        : null
}

export default Drawer
