import { useRouter } from 'next/router'
import { NavbarData } from '../../utils/navBarData'
import classes from './Navbar.module.scss'
import { v4 as uuidv4 } from 'uuid'
import NavbarItem from './NavbarItem'

const Navbar = () => {
    const router = useRouter()

    return (
        <div className={classes.outerBox}>
            {NavbarData.map((item) => (
                <NavbarItem
                    key={uuidv4()}
                    route={item.route}
                    currentRoute={router.pathname}
                    icon={item.Icon}
                    text={item.text}
                />
            ))}
        </div>
    )
}

export default Navbar
