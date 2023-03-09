import classNames from 'classnames'

import styles from './styles.module.css'

interface CustomButtonProps {
    className?: string
    title?: string
    color?: string
    onClick?: React.MouseEventHandler<HTMLElement>
}

const CustomButton = ({className, onClick, title, color}: CustomButtonProps): React.ReactElement => {
    return (
        <button
            className={classNames({[className as string]: className}, styles.customButton)}
            onClick={onClick}
            style={{color}}
        >
            {title}
        </button>
    )
}

export default CustomButton