import styles from './Error.module.css'

const Error = ({ error }) => {
    return (
        <div className={styles.errorContainer}>
            <h1 className={styles.errorMessage}>
                {error}
            </h1>
        </div>
    )
}

export default Error