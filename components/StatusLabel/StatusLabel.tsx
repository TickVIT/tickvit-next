import { CheckCircle, Clock, Search } from 'react-feather'
import styles from './StatusLabel.module.scss'

interface Props {
    status: 'Pending' | 'In-review' | 'Solved'
    classes?: string
}

const StatusLabel = ({ status, classes }: Props) => {
    const GetIcon = () => {
        return status === 'Pending' ? (
            <Clock size={20} />
        ) : status === 'In-review' ? (
            <Search size={20} />
        ) : (
            <CheckCircle size={20} />
        )
    }

    return (
        <div
            className={`${classes ?? ''} ${styles.status} ${
                status === 'Pending'
                    ? styles.pending
                    : status === 'In-review'
                    ? styles.inReview
                    : styles.solved
            }`}
        >
            <GetIcon /> {status}
        </div>
    )
}

export default StatusLabel
