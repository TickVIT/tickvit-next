import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { Plus, X } from 'react-feather'
import shallow from 'zustand/shallow'
import { useClickOutside } from '../../hooks/useClickOutside'
import { useInteractions } from '../../hooks/useInteractions'
import { NavbarData } from '../../utils/navBarData'
import Drawer from '../Drawer/Drawer'
import NavbarItem from '../NavBar/NavbarItem'
import classes from './SideBar.module.scss'
import { useMediaQuery } from 'react-responsive'

const SideBar = () => {
    const showSidebar = useInteractions(
        (state) => state.interactions.showSidebar,
        shallow
    )
    const setInteractions = useInteractions((state) => state.setInteractions)
    const router = useRouter()
    const ref = useRef(null)

    useClickOutside(
        ref,
        () => setInteractions('showSidebar', false),
        showSidebar
    )
    return (
        <div className={classes.sidebar}>
            <div
                className={`${classes.outerBox} ${
                    showSidebar ? classes.active : ''
                }`}
                ref={ref}
            >
                <div className={classes.firstBox}>
                    <div className={classes.text}>Tickets</div>
                    <div className={classes.button}>
                        <button className={classes.btn}>
                            <Plus /> New Ticket
                        </button>
                    </div>
                    <div
                        className={classes.closeButton}
                        onClick={() => setInteractions('showSidebar', false)}
                    >
                        <X />
                    </div>
                </div>
                <div className={classes.secondBox}>
                    <div className={classes.innerBox}>
                        <>
                            <p className={classes.section}>Tickets</p>
                            <div className={classes.dataBox}>
                                <div
                                    className={`${classes.dataElement} ${classes.selected}`}
                                >
                                    <p className={classes.pText}>All Tickets</p>
                                    <p className={classes.pText}>304</p>
                                </div>
                                <div className={classes.dataElement}>
                                    <p className={classes.pText}>
                                        Recieved Tickets
                                    </p>
                                    <p className={classes.pText}>1014</p>
                                </div>
                                <div className={classes.dataElement}>
                                    <p className={classes.pText}>
                                        Created Tickets
                                    </p>
                                    <p className={classes.pText}>21</p>
                                </div>
                            </div>
                        </>
                        <>
                            <p className={classes.section}>Status</p>
                            <div className={classes.dataBox}>
                                <div className={classes.dataElement}>
                                    <p className={classes.pText}>Pending</p>
                                    <p className={classes.pText}>4</p>
                                </div>
                                <div className={classes.dataElement}>
                                    <p className={classes.pText}>In-Review</p>
                                    <p className={classes.pText}>10</p>
                                </div>
                                <div className={classes.dataElement}>
                                    <p className={classes.pText}>Solved</p>
                                    <p className={classes.pText}>230</p>
                                </div>
                            </div>
                        </>
                        <>
                            <p className={classes.section}>Labels</p>
                            <div className={classes.dataBox}>
                                <div className={classes.dataElement}>
                                    <p className={classes.pText}>Urgent</p>
                                    <p className={classes.pText}>1</p>
                                </div>
                                <div className={classes.dataElement}>
                                    <p className={classes.pText}>Add course</p>
                                    <p className={classes.pText}>4</p>
                                </div>
                                <div className={classes.dataElement}>
                                    <p className={classes.pText}>
                                        Delete Course
                                    </p>
                                    <p className={classes.pText}>230</p>
                                </div>
                            </div>
                        </>
                        <div className={classes.navLinks}>
                            <p className={classes.section}>More</p>
                            <div className={`${classes.dataBox}`}>
                                {NavbarData.map((item) => (
                                    <NavbarItem
                                        key={item.route}
                                        className={`${classes.dataElement} ${
                                            classes.boxItems
                                        } ${
                                            router.pathname === item.route
                                                ? classes.selected
                                                : ''
                                        }`}
                                        currentRoute={router.pathname}
                                        route={item.route}
                                        icon={item.Icon}
                                        text={item.text}
                                        sidebar={true}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const Wrapper = () => {
    const showSidebar = useInteractions(
        (state) => state.interactions.showSidebar,
        shallow
    )
    const setInteractions = useInteractions((state) => state.setInteractions)
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` })

    return (
        <>
            {isMobile ? (
                <Drawer
                    isOpen={showSidebar}
                    onClose={() => setInteractions('showSidebar', false)}
                    position="left"
                >
                    <SideBar />
                </Drawer>
            ) : (
                <SideBar />
            )}
        </>
    )
}

export default Wrapper
