import { useState } from "react"
import classNames from "classnames"
import Modal from 'react-overlays/Modal'

import ChairSvg from "./chair-svg"
import styles from './styles.module.css'
import {Backdrop} from "../../../components"

interface ChairProps {
    className?: string
    onReservateCallback: () => void
}

const Chair = ({className, onReservateCallback}: ChairProps ) => {
    const [isClicked, setIsClicked] = useState<boolean>(false)
    const [isConfirmed, setIsConfirmed] = useState<boolean>(false)

    const handleOnClick = () => {
        setIsClicked(!isClicked)
    }

    return (
        <>
            <div onClick={handleOnClick}>
                <ChairSvg className={classNames(styles.chair, {[className as string]: className, [styles.active as string]: isClicked || isConfirmed})} />
            </div>

            <Modal
                className={classNames(styles.modal)}
                show={isClicked}
                onBackdropClick={() => setIsClicked(false)}
                backdrop={true}
                renderBackdrop={() => <Backdrop onClick={() => setIsClicked(false)}/>}
            >
                <div className="flex flex-col justify-center items-center" >
                    <div className="flex justify-center font-bold text-lg" >Stoel reservatie</div>
                    <div className="flex justify-center" >Ben je zeker dat je deze plaats wil reserveren?</div>
                    <button
                        className={styles.reservationButton}
                        onClick={() => {
                            setIsConfirmed(true)
                            setIsClicked(false)
                            onReservateCallback()
                        }}
                    >
                        Reserveer!
                    </button>
                </div>
            </Modal>

        </>
    )
}

export default Chair