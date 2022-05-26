import Image from 'next/image'
import { ChevronDown } from 'react-feather'
import classes from './ManageSideBar.module.scss'

const ManageSideBar = () => {
    return (
        <div className={classes.mainBox}>
            <div className={classes.heading}>Details</div>

            <div className={classes.memberBox}>
                <div>
                    <Image
                        src={'/svg/avatar.svg'}
                        alt="photo"
                        height="70px"
                        width="70px"
                        layout="intrinsic"
                    />
                </div>
                <div className={classes.detailOuter}>
                    <div className={classes.detailInner}>
                        <p className={classes.pText}>Austin Jerry</p>
                        <p className={classes.email}>.</p>
                        <p className={classes.pText}>FFCS Head</p>
                    </div>
                    <div className={classes.detailInner}>
                        <p className={classes.email}>
                            austin.jerry2019@vitbhopal.ac.in
                        </p>
                    </div>
                </div>
            </div>

            <div className={classes.departmentRow}>
                <div className={classes.departHeading}>Departments</div>
                <div className={classes.ImageContainer}>
                    <ChevronDown size={15} />
                </div>
            </div>
        </div>
    )
}

export default ManageSideBar
