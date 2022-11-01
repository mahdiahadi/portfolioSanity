import React from 'react'
import {motion} from 'framer-motion'
const MotionWrap = (Component,className) => function HOC (){
  return (
    <motion.div
        whileInView={{opacity:[0,0,1],y:[100,50,0]}}
        transition={{duration:0.5}}
        className={`${className} app__flex `}
    >
        <Component/>
    </motion.div>
  )
}

export default MotionWrap