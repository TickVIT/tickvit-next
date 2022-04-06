import { NextPage } from 'next'
import React, { ReactNode, useState } from 'react'
import { ArrowLeft, ChevronDown } from 'react-feather'
import classes from '../styles/Faq.module.scss'
import { faqData } from '../utils/faqData'

// @desc FAQ Page
// @route /faq
const Faq: NextPage = () => {
    return (
        <section className={classes.FAQ_home}>
            <div className={classes.FAQ_max_width}>
                <div className={classes.fa}>
                    <ArrowLeft className={classes.arrow} size={18} /> Back
                </div>
                <div className={classes.FAQ_home_content}>
                    <h1>
                        T<span>ICK</span>VIT
                    </h1>
                    <h3>Frequently Asked Questions</h3>
                </div>
                {faqData.map((faq) => (
                    <FaqItem
                        key={faq.question}
                        question={faq.question}
                        answer={faq.answer}
                    />
                ))}
            </div>
        </section>
    )
}

export default Faq

const FaqItem = ({
    question,
    answer,
}: {
    question: string
    answer: ReactNode | string
}) => {
    const [selected, setSelected] = useState(false)

    return (
        <div>
            {/* <!-- class "coll" is the container, common for all FAQ tab --> */}
            <button
                type="button"
                className={classes.collapsible}
                onClick={() => setSelected(!selected)}
            >
                {question}
                <ChevronDown className={classes.chevron} size={18} />
            </button>
            {/* <!-- under button tag write the title of FAQ tab  --> */}
            <div
                className={classes.FAQ_content}
                style={{
                    display: selected ? 'block' : 'none',
                    visibility: 'unset',
                }}
            >
                {/* <!-- under FAQ_content class enter the content  --> */}
                {answer}
            </div>
        </div>
    )
}
