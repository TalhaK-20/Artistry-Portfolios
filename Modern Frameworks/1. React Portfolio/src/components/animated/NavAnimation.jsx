import { motion } from "framer-motion"

export default function NavAnimation({ children }) {
    return (
        <motion.div
            className="hidden lg:flex fixed top-44 right-36 2xl:right-72 items-center exactly-1024:right-36 z-50"
            variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
            }}
            initial='hidden' animate='visible'
            transition={{ duration: 0.5, delay: 0.85 }}
        >
            {children}
        </motion.div>
    )
}
