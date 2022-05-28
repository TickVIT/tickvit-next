import { useState, useEffect } from 'react'
import Link from 'next/link'
import classes from './Navbar.module.scss'

type NavbarItemProps = {
    route: string
    icon: React.ReactNode
    text: string
    currentRoute: string
}

const NavbarItem = ({ route, currentRoute, icon, text }: NavbarItemProps) => {
    const [selected, setSelected] = useState(false)

    useEffect(() => {
        currentRoute === route && setSelected(true)

        return () => {
            setSelected(false)
        }
    }, [currentRoute])

    return (
        <Link href={route} passHref>
            <div
                className={`${classes.boxItems} ${
                    selected && classes.selected
                }`}
            >
                <div className={classes.icon}>{icon}</div>
                <div className={classes.itemText}>{text}</div>
            </div>
        </Link>
    )
}

export default NavbarItem
