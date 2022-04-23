import Image from 'next/image'
import React from 'react'
import classes from './CategoryDashboard.module.scss'
import Avatar from '../../static/images/Avatar.png'
import DropDown from "../../static/icons/down.svg"

const CategoryDashboard = () => {
    return (
        <div className={classes.mainBox}>
            <div className={classes.heading}>Details</div>

            <div className={classes.memberBox}>
                <div>
                    <Image
                        src={Avatar}
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
                        <p className={classes.email}>austin.jerry2019@vitbhopal.ac.in</p>
                    </div>
                </div>
            </div>

            <div className={classes.departmentRow}>
                <div className={classes.departHeading}>
                    Departments
                </div>
                <div>
                    <Image
                        src={DropDown}
                        alt="icon"
                        height="10px"
                        width="10px"
                        layout="intrinsic"
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default CategoryDashboard
