import styles from './styles.module.css'

const Backdrop = ({onClick}: {onClick: () => void}) => {
    return (
        <div
            className={styles.backdrop}
            onClick={onClick}
        />
    )
}

export default Backdrop