import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const Loading = () => {
    const text = "Talha Khalid."
    const [displayedText, setDisplayedText] = useState("")
    const [i, setI] = useState(0)


    useEffect(() => {
        const typingEffect = setInterval(() => {
            if (i < text.length) {
                setDisplayedText((prevState) => prevState + text.charAt(i));
                setI(i + 1);
            } else {
                clearInterval(typingEffect);
            }
        }, 90);

        return () => {
            clearInterval(typingEffect);
        };
    }, [i])

    return (
        <motion.section
            className="flex flex-col items-center justify-center w-full text-main-color font-main-font fixed inset-0 z-[100]">
            <motion.div
                className="absolute center text-[60px] ssm:text-[50px] xsm:text-[40px] sm:text-[52px] m7:text-[65px] md:text-[70px] m8:text-[90px] mmd:text-[100px] lg:text-[110px] m1:text-[120px] xl:text-[135px] leading-none loader"
                variants={{
                    visible: { opacity: 100 },
                    hidden: { opacity: 0 }
                }}
                initial='visible'
                animate='hidden'
                transition={{ delay: 1.1, duration: 2.0 }}
            >
                {displayedText}
            </motion.div>
        </motion.section>
    )
}
export default Loading
