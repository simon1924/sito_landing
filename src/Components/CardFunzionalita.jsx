import { motion } from "motion/react"

function CardFunzionalita() {

    return (
        <>
            <motion.div className="card"
                whileHover={{
                    scale: 1.05,
                    textShadow: "0px 0px 4px gray"
                }}>
                <h3>Gestionale per Negozi</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas aliquam veniam dignissimos eius!</p>

            </motion.div>
            
        </>
    )
}

export default CardFunzionalita