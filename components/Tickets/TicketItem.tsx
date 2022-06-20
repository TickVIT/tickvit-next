import dateFormat from 'dateformat'
import { useEffect, useState } from 'react'
import { MoreVertical } from 'react-feather'
import CheckBox from '../CheckBox/CheckBox'
import StatusLabel from '../StatusLabel/StatusLabel'
import classes from './Tickets.module.scss'

import { useCheckBox } from '../../hooks/useCheckBox'

type ItemType = {
    id: string
    name: string
    subject: string
    label?: string
    status: 'Pending' | 'In-review' | 'Solved'
    date: Date
    read: boolean
    index: number
    checkbox?: boolean
}

const TicketItem = ({
    id,
    name,
    subject,
    label,
    status,
    date,
    read,
    index,
    checkbox = true,
}: ItemType) => {
    const now = new Date()
    const item = useCheckBox((state) =>
        state.items.find((item) => item.id === id)
    )

    const [hasMounted, setHasMounted] = useState(false)

    useEffect(() => {
        setHasMounted(true)
    }, [])

    if (!hasMounted) {
        return null
    }

    return (
        <div
            className={`${classes.gridItem} ${checkbox === false && classes.noCheckbox} ${
                read ? classes.read : classes.unread
            } ${item?.isChecked ? classes.selected : ''}`}
            style={{ zIndex: 60 - index }}
        >
            {checkbox && (
                <div className={classes.itemWrapper}>
                    <div className={classes.item}>
                        <CheckBox
                            name={id}
                            checked={item?.isChecked || false}
                        />
                    </div>
                </div>
            )}
            <div className={classes.itemWrapper}>
                <div className={`${classes.item} ${classes.name}`}>{name}</div>
            </div>
            <div className={classes.itemWrapper}>
                <div className={`${classes.item} ${classes.subject}`}>
                    {subject}
                </div>
            </div>
            <div className={`${classes.itemWrapper} ${classes.status}`}>
                <StatusLabel status={status} classes={classes.item} />
            </div>
            <div className={classes.itemWrapper}>
                <div className={`${classes.item} ${classes.date}`}>
                    {date.toDateString() === now.toDateString()
                        ? dateFormat(date, 'shortTime')
                        : date.getFullYear() === now.getFullYear()
                        ? dateFormat(date, 'mmm d')
                        : dateFormat(date, 'shortDate')}
                </div>
            </div>
            {checkbox && <div className={classes.itemWrapper}>
                <div
                    className={`${classes.item} ${classes.moreVertical} ${classes.btn}`}
                >
                    <MoreVertical size={20} />
                </div>
            </div>}
        </div>
    )
}

export default TicketItem
