import React from 'react'
import Title from '../Title'
import styles from '../../css/contact.module.css'

const Contact = () => {
    return (
        <section className={styles.contact}>
            <Title title="contact" subtitle="us" />
            <div className={styles.center}>
                <form
                    action="https://formspree.io/olijoyces@gmail.com"
                    method="POST"
                    className={styles.form}
                >
                    <div>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className={styles.formControl}
                            placeholder="John Smith"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className={styles.formControl}
                            placeholder="email@email.com"
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            id="message"
                            rows="10"
                            className={styles.formControl}
                            placeholder="hello there"
                        />
                    </div>
                    <input
                        type="submit"
                        value="submit here"
                        className={styles.submit}
                    />
                </form>
            </div>
        </section>
    )
}

export default Contact
