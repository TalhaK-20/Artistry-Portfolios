import { motion, useInView } from 'framer-motion'
import { useRef } from "react";

export default function NavTitle({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div ref={ref}
            className='pt-8 sm:max-w-fit md:max-w-none flex items-center md:justify-center sm:justify-start cursor-grab z-50 transform ease-linear duration-300'
            drag
            dragConstraints={{
                top: -2,
                left: -2,
                right: 2,
                bottom: 2,
            }}
            style={{
                opacity : isInView ? '1' : '0',
                transform: isInView ? "translateY(-30px)": "none",
            }}
        >
            {children}
        </motion.div>
    )
}