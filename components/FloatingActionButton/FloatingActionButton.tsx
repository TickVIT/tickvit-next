import React from 'react'
import { Plus } from 'react-feather'
import classes from './FloatingActionButton.module.scss'

const FloatingActionButton = () => {
    return (
        <button className={classes.fab}>
            <Plus />
        </button>
    )
}

export default FloatingActionButton
