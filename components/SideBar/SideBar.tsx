import { Plus } from 'react-feather'
import classes from './SideBar.module.scss'

const SideBar = () => {
    return (
        <div className={classes.outerBox}>
            <div className={classes.firstBox}>
                <div className={classes.text}>Tickets</div>
                <div className={classes.button}>
                    <button className={classes.btn}>
                        <Plus /> New Ticket
                    </button>
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
                                <p className={classes.pText}>Created Tickets</p>
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
                                <p className={classes.pText}>Delete Course</p>
                                <p className={classes.pText}>230</p>
                            </div>
                        </div>
                    </>
                </div>
            </div>
        </div>
    )
}

export default SideBar
