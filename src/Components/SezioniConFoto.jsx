import { motion } from "motion/react"

function SezioniConFoto({ link, sxdx }) {

    if (sxdx == true) {
        return (
            <><motion.div
                className="divTesto"
                whileHover={{
                    scale: 1.05,
                    textShadow: "0px 0px 4px gray"
                }}>
                <h2>Titolo</h2>
                <p>
                    In eget sodales arcu, consectetur efficitur metus. Duis
                    efficitur tincidunt odio, sit amet laoreet massa fringilla
                    eu.
                </p>
            </motion.div>
                <div style={{padding:"10px"}}>
                    <img src={link} className='logo' />
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div>
                    <img src={link} className='logo' />
                </div>
                <motion.div
                    className="divTesto"
                    whileHover={{
                        scale: 1.05,
                        textShadow: "0px 0px 4px gray"
                    }}>
                    <h2>Titolo</h2>
                    <p>
                        In eget sodales arcu, consectetur efficitur metus. Duis
                        efficitur tincidunt odio, sit amet laoreet massa fringilla
                        eu.
                    </p>
                </motion.div>

            </>
        )
    }

}

export default SezioniConFoto