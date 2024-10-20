import { motion } from "framer-motion"

export default function ProjectCircle({ children }) {
    return (
        <motion.div
            className="relative hidden lg:block"
            variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 },
            }}
            initial='hidden' animate='visible'
            transition={{ duration: 0.5, delay: 1.6 }}
        >
            {children}
        </motion.div>
    )
}
