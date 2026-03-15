import React from 'react';
import { motion } from 'framer-motion';

const StartingLoader: React.FC = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-slate-50 dark:bg-slate-900">
            <motion.div
                animate={{
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
            >
                <img src="/pwa-192x192.png" alt="Loading..." className="w-24 h-24" />
            </motion.div>
        </div>
    );
};

export default StartingLoader;
