import React, { useRef, useState } from 'react'
import CheckBox from '../CheckBox/CheckBox'
import styles from './TicketHeader.module.scss'
import s_styles from './SetStatus.module.scss'
import { useClickOutside } from '../../hooks/useClickOutside'
import {
    ArrowLeft,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    MoreVertical,
    RotateCw,
} from 'react-feather'
import { useCheckBox } from '../../hooks/useCheckBox'
import shallow from 'zustand/shallow'

interface Props {
    back: boolean
    reload: boolean
    check: boolean
    threeDots: boolean
    assign: boolean
}

const TicketHeader = ({ back, reload, threeDots, check, assign }: Props) => {
    const items = useCheckBox((state) => state.items, shallow)
    return (
        <div className={styles.container}>
            <div className={styles.leftHead}>
                {back && (
                    <div className={styles.btn} title="back">
                        <ArrowLeft color="#939ca8" size={20} />
                    </div>
                )}
                {check && (
                    <CheckBox
                        name="selectAll"
                        checked={
                            items.filter((item) => item.isChecked !== true)
                                .length < 1
                        }
                    />
                )}

                {reload && (
                    <div
                        className={`${styles.btn} ${styles.reload}`}
                        title="reload"
                    >
                        <RotateCw color="#939ca8" size={20} />
                    </div>
                )}
                {items.filter((item) => item.isChecked).length > 0 && (
                    <SetStatus />
                )}
                {threeDots && (
                    <div className={styles.btn} title="options">
                        <MoreVertical color="#939ca8" size={20} />
                    </div>
                )}
            </div>
            <div className={styles.rightHead}>
                {assign && <Assign />}
                {!(items.filter((item) => item.isChecked).length > 0) && (
                    <div className={styles.pageNumber}>1-50 of 315</div>
                )}
                <div className={styles.btnSecondary} title="previous">
                    <ChevronLeft color="#939ca8" size={20} />
                </div>
                <div className={styles.btnSecondary} title="next">
                    <ChevronRight color="#939ca8" size={20} />
                </div>
            </div>
        </div>
    )
}

export const SetStatus = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [value, setValue] = useState('clear')

    const statuses = ['Pending', 'In Review', 'Solved']

    const ref = useRef(null)

    useClickOutside(ref, setIsOpen, isOpen)
    return (
        <div
            ref={ref}
            className={s_styles.container}
            onClick={() => {
                setIsOpen(!isOpen)
            }}
        >
            <div className={s_styles.value}>
                <div>{value === 'clear' ? 'Set Status' : value}</div>
                <ChevronDown size={10} />
            </div>
            <div
                ref={ref}
                className={s_styles.dropdown}
                style={{ display: isOpen ? 'block' : 'none' }}
            >
                {statuses.map((status, index) => (
                    <div
                        key={index}
                        className={s_styles.dropdownItem}
                        onClick={() => {
                            setValue(status)
                            setIsOpen(!isOpen)
                        }}
                    >
                        {status}
                    </div>
                ))}

                <div
                    className={s_styles.dropdownItem}
                    onClick={() => {
                        setValue('clear')
                        setIsOpen(!isOpen)
                    }}
                    style={{ opacity: 0.5 }}
                >
                    Clear
                </div>
            </div>
        </div>
    )
}

export const Assign = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [value, setValue] = useState('clear')

    const assignees = ['John Doe', 'John Smith', 'Jane Doe']
    const ref = useRef(null)

    useClickOutside(ref, setIsOpen, isOpen)
    return (
        <div
            className={s_styles.container}
            onClick={() => {
                setIsOpen(!isOpen)
            }}
        >
            <div className={s_styles.value}>
                <div>{value === 'clear' ? 'Assign' : value}</div>
                <ChevronDown size={10} />
            </div>
            <div
                ref={ref}
                className={s_styles.dropdown}
                style={{ display: isOpen ? 'block' : 'none' }}
            >
                {assignees.map((status, index) => (
                    <div
                        key={index}
                        className={s_styles.dropdownItem}
                        onClick={() => {
                            setValue(status)
                            setIsOpen(!isOpen)
                        }}
                    >
                        {status}
                    </div>
                ))}

                <div
                    className={s_styles.dropdownItem}
                    onClick={() => {
                        setValue('clear')
                        setIsOpen(!isOpen)
                    }}
                    style={{ opacity: 0.5 }}
                >
                    Clear
                </div>
            </div>
        </div>
    )
}

export default TicketHeader
