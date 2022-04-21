import Image from 'next/image'
import React, { useState } from 'react'
import CheckBox from '../CheckBox/CheckBox'
import styles from './TicketHeader.module.scss'
import s_styles from './SetStatus.module.scss'

interface Props {
    back: boolean
    reload: boolean
    status: boolean
    check: boolean
    threeDots: boolean
    assign: boolean
}

const TicketHeader = ({
    back,
    reload,
    status,
    threeDots,
    check,
    assign,
}: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.leftHead}>
                {back && (
                    <div className={styles.btn} title="back">
                        <Image src={'/svg/back.svg'} height={12} width={14} />
                    </div>
                )}
                {check && <CheckBox />}
                {reload && (
                    <div className={styles.btn} title="reload">
                        <Image src={'/svg/reload.svg'} height={18} width={20} />
                    </div>
                )}
                {status && <SetStatus />}
                {threeDots && (
                    <div className={styles.btn} title="options">
                        <Image
                            src={'/svg/threeDots.svg'}
                            height={18}
                            width={17}
                        />
                    </div>
                )}
            </div>
            <div className={styles.rightHead}>
                {assign && <Assign />}
                <div className={styles.pageNumber}>1-50 of 315</div>
                <div className={styles.btnSecondary} title="previous">
                    <Image
                        src={'/svg/backward.svg'}
                        height={13.005}
                        width={6.495}
                    />
                </div>
                <div className={styles.btnSecondary} title="next">
                    <Image src={'/svg/forward.svg'} height={13} width={6} />
                </div>
            </div>
        </div>
    )
}

export const SetStatus = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [value, setValue] = useState('clear')

    const statuses = ['Pending', 'In Progress', 'On Hold', 'Resolved']
    return (
        <div
            className={s_styles.container}
            onClick={() => {
                setIsOpen(!isOpen)
            }}
        >
            <div className={s_styles.value}>
                <div>{value === 'clear' ? 'Set Status' : value}</div>
                <Image src={'/svg/dropdown.svg'} height={5} width={8} />
            </div>
            <div
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
    return (
        <div
            className={s_styles.container}
            onClick={() => {
                setIsOpen(!isOpen)
            }}
        >
            <div className={s_styles.value}>
                <div>{value === 'clear' ? 'Assign' : value}</div>
                <Image src={'/svg/dropdown.svg'} height={5} width={8} />
            </div>
            <div
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
