"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AnimationInitializer() {
    const pathname = usePathname();

    useEffect(() => {
        let timer;

        const initializeAnimations = () => {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    if (window.runCarouselJS) {
                        window.runCarouselJS();
                    }

                    if (window.runGsapAnimations) {
                        window.runGsapAnimations();
                    }

                    if (window.runMainJS) {
                        window.runMainJS();
                    }
                });
            });
        };

        timer = setTimeout(initializeAnimations, 50);

        return () => {
            clearTimeout(timer);
        };
    }, [pathname]);

    return null;
}