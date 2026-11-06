import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import {
    FaLinkedinIn,
    FaInstagram,
    FaFacebookF,
    FaYoutube,
    FaXTwitter,
} from "react-icons/fa6";

import { HiOutlineShare } from "react-icons/hi2";

import styles from "./FloatingSocial.module.css";

const socials = [
    {
        icon: FaLinkedinIn,
        href: "https://www.linkedin.com/company/virtualgalaxy/",
        color: "#0A66C2",
    },
    {
        icon: FaYoutube,
        href: "https://www.youtube.com/channel/UCNHCxfflXlIj52Ch3QV2ayg",
        color: "#FF0000",
    },
    {
        icon: FaInstagram,
        href: "https://www.instagram.com/virtualgalaxyinfotech",
        color: "#E1306C",
    },
    {
        icon: FaFacebookF,
        href: "https://www.facebook.com/VirtualGalaxyInfotechLtd",
        color: "#1877F2",
    },

    {
        icon: FaXTwitter,
        href: "https://x.com/Virtualvgipl",
        color: "#1a1d1e",
    },

];

const containerVariants = {
    open: {
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.03,
        },
    },

    closed: {
        transition: {
            staggerChildren: 0.04,
            staggerDirection: -1,
        },
    },
};

const itemVariants = {
    open: (index) => ({
        opacity: 1,
        scale: 1,
        y: -(index + 1) * 68,

        transition: {
            type: "spring",
            stiffness: 420,
            damping: 24,
            mass: 0.8,
        },
    }),

    closed: {
        opacity: 0,
        scale: 0.4,
        y: 0,

        transition: {
            duration: 0.18,
        },
    },
};

export default function FloatingSocial() {
    const closeTimeout = useRef(null);

    const [open, setOpen] = useState(false);

    const [isDesktop, setIsDesktop] = useState(false);

    const wrapperRef = useRef(null);

    useEffect(() => {
        const resize = () => {
            setIsDesktop(window.innerWidth > 768);
        };

        resize();

        window.addEventListener("resize", resize);

        return () => window.removeEventListener("resize", resize);
    }, []);

    useEffect(() => {

        return () => {

            if (closeTimeout.current) {

                clearTimeout(closeTimeout.current);

            }

        };

    }, []);

    useEffect(() => {
        function outside(e) {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(e.target)
            ) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", outside);

        return () =>
            document.removeEventListener("mousedown", outside);
    }, []);

    return (
        <motion.div
            ref={wrapperRef}
            className={styles.wrapper}
            animate={open ? "open" : "closed"}
            variants={containerVariants}
            onMouseEnter={() => {

                if (!isDesktop) return;

                if (closeTimeout.current) {
                    clearTimeout(closeTimeout.current);
                }

                setOpen(true);

            }}

            onMouseLeave={() => {

                if (!isDesktop) return;

                closeTimeout.current = setTimeout(() => {

                    setOpen(false);

                }, 250);   // 250ms feels natural

            }}
        >
            {socials.map((item, index) => {
                const Icon = item.icon;

                return (
                    <motion.a
                        key={index}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.social}
                        custom={index}
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.12,
                            x: 8,
                        }}
                        style={{
                            "--hover": item.color,
                        }}
                    >
                        <Icon />
                    </motion.a>
                );
            })}

            <motion.button
                type="button"
                className={styles.toggle}
                onClick={() => {
                    if (!isDesktop) {
                        setOpen((prev) => !prev);
                    }
                }}
                animate={{
                    scale: open ? 0.92 : 1,
                }}
                transition={{
                    duration: 0.25,
                }}
                whileTap={{
                    scale: 0.88,
                }}
            >
                <motion.div
                    animate={{
                        rotate: open ? 180 : 0,
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                    }}
                >
                    <HiOutlineShare />
                </motion.div>
            </motion.button>
        </motion.div>
    );
}