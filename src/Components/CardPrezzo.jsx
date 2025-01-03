import { motion } from "motion/react"

function CardPrezzo({ prezzo }) {

    return (
        <>
            <motion.div className="card"
                whileHover={{
                    scale: 1.05,
                    textShadow: "0px 0px 4px gray"
                }}>
                <h3>Gestionale per Negozi</h3>
                <p>A partire da {prezzo}€ + iva inclusa</p>

                <button
                className='bottone'
                >Richiedi Informazioni</button>
            </motion.div>
            
        </>
    )
}

export default CardPrezzo