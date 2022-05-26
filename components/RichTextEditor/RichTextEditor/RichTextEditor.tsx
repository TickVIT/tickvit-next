import React, { useEffect, useState } from 'react'
import { Plus, X } from 'react-feather'
import styles from './RichTextEditor.module.scss'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

// Use DynamicExport to prevent SSR
const RichTextEditor = () => {
    const [subject, setSubject] = useState('')
    const [category, setCategory] = useState('')
    const [message, setMessage] = useState('')

    const handleChange = (value: any) => {
        setMessage(value)
    }
    const handleSubmit = (e: any) => {
        console.log({ subject, category, message })
        setSubject('')
        setCategory('')
        setMessage('')
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>New Ticket</div>
                <div className={styles.btn}>
                    <X color="#939ca8" size={20} />
                </div>
            </div>
            <div className={styles.subContainer}>
                <input
                    value={subject}
                    type="text"
                    placeholder="Subject"
                    onChange={(e) => setSubject(e.target.value)}
                />
                <div className={styles.divider}></div>
                <input
                    value={category}
                    type="text"
                    placeholder="Category"
                    onChange={(e) => setCategory(e.target.value)}
                />
                <div className={styles.divider}></div>

                <ReactQuill
                    placeholder="Type a message ..."
                    value={message}
                    onChange={handleChange}
                    modules={RichTextEditor.modules}
                />
            </div>
            <div className={styles.bottomBar}>
                <div className={styles.btn}>
                    {/* <Paperclip color="black" size={15} /> */}
                </div>
                <div className={styles.btns}>
                    <button className={`${styles.btnRed} ${styles.button}`}>
                        <Plus color="#ff0000" size={20} />
                        Urgent
                    </button>
                    <button
                        className={`${styles.btnBlue} ${styles.button}`}
                        onClick={handleSubmit}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}

RichTextEditor.modules = {
    toolbar: [
        ['bold', 'italic', 'underline', 'strike'],

        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ header: 1 }, { header: 2 }],

        [{ align: [] }],
    ],
}

export default RichTextEditor
