import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="relative">
        <div className="w-24 h-24 relative">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 30% 30%, #0CC0DF 0%, transparent 70%)",
                "radial-gradient(circle at 70% 70%, #0CC0DF 0%, transparent 70%)",
                "radial-gradient(circle at 30% 30%, #0CC0DF 0%, transparent 70%)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-0 rounded-lg overflow-hidden"
            style={{ background: "rgba(12, 192, 223, 0.1)" }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-full h-1 bg-[#0CC0DF]/30"
                style={{ top: `${i * 25}%` }}
                animate={{
                  x: [-500, 500],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                  duration: 2.5,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </motion.div>
          <motion.div
            className="absolute inset-4 bg-[#0CC0DF]/10 rounded-full backdrop-blur-sm"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              borderRadius: ["50%", "30%", "50%"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
