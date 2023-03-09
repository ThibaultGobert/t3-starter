import { useState } from "react"
import classNames from "classnames"
import Modal from 'react-overlays/Modal'

import ChairSvg from "./chair-svg"
import styles from './styles.module.css'
import {Backdrop} from "../../../components"
import CustomButton from "../../../components/custom-button"

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

    /**
     * TODO
     * Al geserveerd? => Annuleer
     * Nieuw stoeltje reserveren? => oude is terug beschikbaar
     */

    return (
        <>
            <div className="hover:cursor-pointer" onClick={handleOnClick}>
                <ChairSvg className={classNames(styles.chair, {[className as string]: className, [styles.active as string]: isClicked || isConfirmed})} />
            </div>

            <Modal
                className={classNames(styles.modal)}
                show={isClicked}
                onBackdropClick={() => setIsClicked(false)}
                backdrop={true}
                renderBackdrop={() => <Backdrop onClick={() => setIsClicked(false)}/>}
            >
                <>
                <div
                    className="absolute right-5 top-0 hover:cursor-pointer"
                    onClick={() => setIsClicked(false)}
                >x</div>
                <div className={`flex flex-col  items-center ${styles.modalContentWrapper as string}`}>
                    <div className={`flex justify-center font-bold text-lg ${styles.title as string}`} >Stoel reservatie</div>
                    <div className={styles.divider} />
                    <div className={`flex justify-center grow text-center ${styles.modalContent as string}`} >Ben je zeker dat je deze plaats wil reserveren?</div>
                    <CustomButton
                        onClick={() => {
                            setIsConfirmed(true)
                            setIsClicked(false)
                            onReservateCallback()
                        }}
                        title="Reserveer!"
                        className={styles.reservationButton}
                    />
                       
                </div>
                </>
            </Modal>

        </>
    )
}

export default Chair