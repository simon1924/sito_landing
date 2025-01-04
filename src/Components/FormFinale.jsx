import "./FormFinale.css"
import { motion } from "motion/react"





const FormFinale = () => {
    return (
        <div className="formContainer">
            <div>
                <motion.h3
                    initial={{ y: "200%" }}
                    transition={{ ease: [0.455, 0.03, 0.515, 0.955], duration: 1 }}
                    animate={{ y: 0 }}
                >Contact</motion.h3>
            </div>

            <div>
                <form method="POST" action="">
                    <div>
                        <div>
                            <label htmlFor="name">
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    required="required"
                                    placeholder="Name"
                                />
                            </label>

                            <label htmlFor="email">
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                    required="required"
                                />
                            </label>
                            <label htmlFor="phone">
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="Phone"
                                    required="required"
                                />
                            </label>
                            <label htmlFor="company">
                                <input
                                    id="company"
                                    name="company"
                                    type="text"
                                    placeholder="Company"
                                    required="required"
                                />
                            </label>

                            <label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    required="required"
                                    placeholder="Tell us a little more about your cool project!"
                                ></textarea>
                            </label>
                            <div>
                                <motion.button className="bottone" type="submit"
                                whileHover={{ scale: 1.1}}
                                whileTap={{ scale: 0.9}}
                                
                                >Send</motion.button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormFinale;