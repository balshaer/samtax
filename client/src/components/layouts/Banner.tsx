import { motion } from "framer-motion";
import { Button } from "../ui/button";

export default function Banner() {
  return (
    <section className="m-auto mb-16 max-w-4xl text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="section-title s text-4xl"
      >
        Professional Financial & Language Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="description pb-6"
      >
        Samtax is a professional services firm based in Philadelphia, PA,
        specializing in <span id="mark">tax preparation</span> and{" "}
        <span id="mark">financial consulting</span> for individuals and
        businesses. With a team of experienced professionals, Samtax offers
        personalized solutions to help clients navi
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex w-full items-center justify-center gap-4 max-md:flex-col"
      >
        <Button
          className="h-12 w-1/4 max-md:h-12 max-md:w-full"
          variant={"default"}
        >
          Get Started
        </Button>
        <Button
          className="h-12 w-1/4 max-md:h-12 max-md:w-full"
          variant={"outline"}
        >
          About us
        </Button>
      </motion.div>
    </section>
  );
}
