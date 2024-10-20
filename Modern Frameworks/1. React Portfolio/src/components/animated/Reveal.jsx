import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Reveal({children,width='fit-content',color="#28e98c",RevealDelay, TextDelay}) {
  const ref = useRef(null)
  const isInView = useInView(ref,{once:true})

  return (
    <div ref={ref} style={{position:'relative' , width , overflow:'hidden',}}>
      <motion.div 
        variants={{ hidden: {opacity:0 , y:100}, visible: {opacity:1 , y:0},}}
        initial='hidden' animate={isInView ? 'visible' : 'hidden'}
        transition={{duration:0.5 , delay:TextDelay}}
      >
        {children}
      </motion.div>

      <motion.div
        variants={{ hidden: {right:0}, visible: {right:'100%'}}}
        initial='hidden' animate={isInView ? 'visible' : 'hidden'}
        transition={{duration:0.5 , delay:RevealDelay , ease:'easeIn'}}
        style={{ position:'absolute', top:4, bottom:4, left:0, right:0, background:color, zIndex:20}}
      >
      </motion.div>
    </div>
  )
}
