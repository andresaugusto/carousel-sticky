"use client"

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion"
import ImageContainer from "../ImageContainer/ImageContainer"

const OneAlt = "https://andresaugusto-aa-media.s3.amazonaws.com/images/aa-demo-wide-1080p-filtered-poster.png"
const classes = {
    carousel: "bg-[#131313] h-[500svh]",
    contentContainer: "sticky top-0 h-[100svh] flex justify-start align-end overflow-hidden",
    images: "flex flex-row wrap-none gap-x-[5svw] px-[5svw]",
    image: "my-auto h-[75svh] w-[75svw]",
}

const MotionImg = ({children}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={classes.image}
        >
            {children}
        </motion.div>
    )
}

const HorizontalScroll = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef })
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-69%"])
    return (
        <div 
            ref={targetRef} 
            className={classes.carousel}
        >
            <div 
                className={classes.contentContainer}
            >
                <motion.div 
                    style={{ x }}
                    className={classes.images}
                >
                    <MotionImg>
                        <ImageContainer 
                            imageSource={OneAlt}
                            description={"Image 1"}
                        />
                    </MotionImg>
                    <MotionImg>
                        <ImageContainer 
                            imageSource={OneAlt}
                            description={"Image 1"}
                        />
                    </MotionImg>
                    <MotionImg>
                        <ImageContainer 
                            imageSource={OneAlt}
                            description={"Image 1"}
                        />
                    </MotionImg>
                    <MotionImg>
                        <ImageContainer 
                            imageSource={OneAlt}
                            description={"Image 1"}
                        />
                    </MotionImg>
                </motion.div>
            </div>
        </div>
    );
};

export default HorizontalScroll;