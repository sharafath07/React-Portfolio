import { motion } from "framer-motion";

export default function About() {
    return (
        <div
            id="about"
            className="min-h-screen orbitron flex items-center justify-center relative overflow-hidden"
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                viewport={{ amount: 0.7 }}
                className="max-w-5/6 mx-auto text-center md:text-left"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-10 underline underline-offset-8 decoration">
                    About <span className="text-[#cc2bfb] underline underline-offset-8 decoration">Me</span>
                </h2>
                <p className="text-gray-400 text-sm md:text-base font-mono leading-relaxed mb-4 text-justify">
                    I am Sharafath Ahammed V, a passionate and dedicated student pursuing Software Development. I enjoy building modern, responsive, and user-friendly web applications.
                </p>

                <p className="text-gray-400 text-sm md:text-base font-mono leading-relaxed mb-6 text-justify">
                    With a strong foundation in HTML, CSS, JavaScript, and React, I focus on creating clean UI and smooth user experiences. I am constantly learning new technologies and improving my skills to become a professional developer.
                </p>

            </motion.div>

        </div>
    );
}