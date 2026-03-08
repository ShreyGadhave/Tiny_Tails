import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PawPrint } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4">
            <div className="text-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="inline-block mb-6"
                >
                    <div className="relative">
                        <PawPrint className="h-24 w-24 text-[#e67e22] mx-auto" />
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                            className="absolute -top-2 -right-2"
                        >
                            <span className="text-3xl">❓</span>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-7xl font-extrabold text-[#8b5a2b] font-serif mb-4"
                >
                    404
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold text-[#4a4a4a] mb-3"
                >
                    Oops! This page ran away!
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-500 text-lg mb-8 max-w-md mx-auto"
                >
                    Looks like this page went on a walk and didn't come back. Let's get you back to safety!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-full text-white bg-[#e67e22] hover:bg-[#d35400] shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                    >
                        🏠 Back to Home
                    </Link>
                    <Link
                        to="/products"
                        className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#8b5a2b] text-base font-bold rounded-full text-[#8b5a2b] hover:bg-[#8b5a2b] hover:text-white transition-all hover:-translate-y-1"
                    >
                        🛍️ Browse Products
                    </Link>
                </motion.div>

                {/* Decorative paw prints */}
                <div className="mt-12 flex justify-center gap-4 opacity-20">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 + i * 0.1 }}
                        >
                            <PawPrint
                                className="h-6 w-6 text-[#8b5a2b]"
                                style={{ transform: `rotate(${(i - 2) * 15}deg)` }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
