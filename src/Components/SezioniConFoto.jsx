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
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum rem fuga optio quas totam autem quae minus, eaque praesentium consequuntur ullam provident officiis necessitatibus, minima cum hic odit harum nobis!
                </p>
            </motion.div>
                <div style={{ padding: "20px" }}>
                    <img src={link} className='logo' />
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div>
                    <img src={link} style={{padding:"20px"}} />
                </div>
                <motion.div
                    className="divTesto"
                    whileHover={{
                        scale: 1.05,
                        textShadow: "0px 0px 4px gray"
                    }}>
                    <h2>Titolo</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse eos, nesciunt asperiores illo minus accusamus voluptatem itaque tempore dolor exercitationem deleniti iusto delectus nisi cum sequi harum atque saepe eligendi!
                    </p>
                </motion.div>

            </>
        )
    }

}

export default SezioniConFoto