import classes from './CheckBox.module.scss'

const CheckBox = () => {
    return (
        <label className={classes.checkBoxLabel}>
            <input type="checkbox" className={classes.checkBox} />
        </label>
    )
}

export default CheckBox
