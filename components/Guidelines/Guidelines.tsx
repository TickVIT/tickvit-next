import { useRef, useState } from 'react'
import classes from './Guidelines.module.scss'

const Guidelines = () => {
    const checkTick = useRef<HTMLInputElement>(null)

    const buttonCheck = useRef<HTMLButtonElement>(null)

    const [isChecked, setIsChecked] = useState(true)

    const checkboxMarked = () => {
        isChecked
            ? buttonCheck.current
                ? (buttonCheck.current.disabled = false)
                : null
            : buttonCheck.current
            ? (buttonCheck.current.disabled = true)
            : null
    }

    return (
        <section className={classes.overlay}>
            <div className={classes.container}>
                <h1 className={classes.pageHeading}>GUIDELINES</h1>
                <ul className={classes.listBox}>
                    <li className={classes.listContent}>
                        Do not create more than one ticket for the same issue,
                        it will be reported and closed.
                    </li>
                    <li className={classes.listContent}>
                        To make sure the correct department receives your issue,
                        select the correct Main Category and Sub Category. The
                        ticket will be closed if the wrong selection of the
                        Category is done.
                    </li>
                    <li className={classes.listContent}>
                        Ensure you write all the necessary details so that the
                        concerned faculty can assist you.
                    </li>
                    <li className={classes.listContent}>
                        Every student is allotted two Urgent Tokens per year,
                        this will lead to making sure your ticket is solved on a
                        first-priority basis. Any misuse of the Urgent Token
                        will face consequences. Only use the Urgent Token if you
                        require a response within 24 Hours itself.
                    </li>
                    <li className={classes.listContent}>
                        If your Urgent Tokens get depleted on genuine issues,
                        raise a ticket requesting more Urgent tokens and it may
                        be considered to allot more Urgent Tokens to you.
                    </li>
                    <li className={classes.listContent}>
                        Before filing a ticket, check the FAQs section if
                        you&apos;re issue or question has already been answered.
                        You can do so even by using the search button - to
                        search the FAQs section for your question.
                    </li>
                </ul>
                <p className={classes.note}>
                    <strong>NOTE:</strong>We highly recommend ensuring and
                    rechecking your Main Category and Sub Category from the
                    flowchart available in FAQs to ensure the correct team
                    receives your issue. This makes sure there is a faster
                    response by less re-routing of a ticket and also reduces the
                    chances of a ticket being closed.
                </p>
                <div className={classes.guidelinesCheck}>
                    <input
                        type="checkbox"
                        id="guildlinesAgreement"
                        value="unchecked"
                        ref={checkTick}
                        onClick={() => setIsChecked(!isChecked)}
                        onChange={checkboxMarked}
                    />
                    <label htmlFor="guildlinesAgreement">
                        I agree to the Guildlines
                    </label>
                </div>
                <br />
                <button
                    style={{ opacity: isChecked ? 0.5 : 1 }}
                    type="submit"
                    id="submitButton"
                    className={classes.continueButton}
                    disabled
                    ref={buttonCheck}
                >
                    Continue
                </button>
            </div>
        </section>
    )
}
export default Guidelines
