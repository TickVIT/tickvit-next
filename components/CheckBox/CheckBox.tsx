import { ChangeEvent } from 'react'
import { useCheckBox } from '../../hooks/useCheckBox'
import classes from './CheckBox.module.scss'

type CheckBoxProps = {
    name?: string
    checked: boolean
}

const CheckBox = ({ name, checked }: CheckBoxProps) => {
    const handleChange = useCheckBox((state) => state.handleChange)
    return (
        <label className={classes.checkBoxLabel}>
            <input
                type="checkbox"
                name={name}
                className={classes.checkBox}
                checked={checked}
                onChange={handleChange}
            />
        </label>
    )
}

export default CheckBox
