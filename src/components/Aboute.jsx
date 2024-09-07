import max from "../assets/max.png"
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
const Aboute = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="mt-8 text-center text-4xl"> <span className="border-b border-purple-600">About <span className="text-emerald-300">Me</span></span></h1>
            <div className="flex flex-wrap ">
                <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: - 100 }}
                transition={{ duration: 0.5 , delay: 0.3 }}
                className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className="w-7/12" src={max} alt="about methon picture" />
                    </div>
                </motion.div>
                <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 , delay: 0.5 }}
                className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start mt-10">
                        <p className="my-2 max-w-xl py-6 mt-10">{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Aboute;