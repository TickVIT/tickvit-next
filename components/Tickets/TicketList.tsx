import classes from './Tickets.module.scss'
import { faker } from '@faker-js/faker'
import { v4 as uuidv4 } from 'uuid'

import { useCheckBox } from '../../hooks/useCheckBox'
import TicketItem from './TicketItem'

const TicketList = () => {
    const selectStatus = () => {
        const rand = Math.round(Math.random() * 2)
        return rand === 0 ? 'Pending' : rand === 1 ? 'In-review' : 'Solved'
    }

    const addItem = useCheckBox((state) => state.addItem)
    return (
        <div className={classes.table}>
            <div className={classes.tableBody}>
                {[...Array(50)].map((_, index) => {
                    const id = uuidv4()
                    addItem({ id })
                    return (
                        <TicketItem
                            key={id}
                            id={id}
                            name={faker.name.findName() + ' 19BCX10010'}
                            subject={
                                faker.company.catchPhrase() +
                                faker.company.catchPhrase()
                            }
                            label={
                                Math.round(Math.random()) === 0
                                    ? 'Urgent'
                                    : undefined
                            }
                            status={selectStatus()}
                            date={faker.date.past()}
                            read={
                                Math.round(Math.random()) === 0 ? true : false
                            }
                            index={index}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default TicketList
