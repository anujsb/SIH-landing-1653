import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
const Hero = () => {
  return (
    <div>
      <div className="relative h-screen w-full bg-white flex justify-center items-center overflow-hidden">
        <BackgroundCellCore />
        <div className="relative z-50  pointer-events-none select-none text-center">
          <h1 className="md:text-2xl lg:text-7xl font-medium text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-500 pointer-events-none mt-28">
            Nyay Sutra 
          </h1>
          <p className="text-neutral-700 my-5">details</p>
          <div className="my-10 flex items-center justify-center gap-4">
            <Button className="text-white" variant="default">Book a Demo</Button>
            <p className="text-neutral-600">
              5,000 people like you <br /> have purchased this product!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

const BackgroundCellCore = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const ref = useRef<any>(null);

  const handleMouseMove = (event: any) => {
    const rect = ref.current && ref.current.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const size = 300;
  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="h-screen absolute inset-0"
    >
      <div className="absolute h-screen inset-y-0  overflow-hidden">
        <div className="absolute h-full w-full pointer-events-none -bottom-2 z-40 bg-white [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
        <div
          className="absolute inset-0 z-20 bg-transparent"
          style={{
            maskImage: `radial-gradient(
              ${size / 4}px circle at center,
             white, transparent
            )`,
            WebkitMaskImage: `radial-gradient(
            ${size / 4}px circle at center,
            white, transparent
          )`,
            WebkitMaskPosition: `${mousePosition.x - size / 2}px ${
              mousePosition.y - 1.5 * size
            }px`,
            WebkitMaskSize: `${size}px`,
            maskSize: `${size}px`,
            pointerEvents: "none",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        >
          <Pattern cellClassName="border-[#4A4A4A] relative z-[100]" />
        </div>
        <Pattern className="opacity-[0.5]" cellClassName="border-[#CCCCCC]" />
      </div>
    </div>
  );
};

const Pattern = ({
  className,
  cellClassName,
}: {
  className?: string;
  cellClassName?: string;
}) => {
  const x = new Array(47).fill(0);
  const y = new Array(30).fill(0);
  const matrix = x.map((_, i) => y.map((_, j) => [i, j]));
  const [clickedCell, setClickedCell] = useState<any>(null);

  return (
    <div className={cn("flex flex-row  relative z-30", className)}>
      {matrix.map((row, rowIdx) => (
        <div
          key={`matrix-row-${rowIdx}`}
          className="flex flex-col  relative z-20 border-b"
        >
          {row.map((_, colIdx) => {
            const controls = useAnimation();

            useEffect(() => {
              if (clickedCell) {
                const distance = Math.sqrt(
                  Math.pow(clickedCell[0] - rowIdx, 2) +
                    Math.pow(clickedCell[1] - colIdx, 2)
                );
                controls.start({
                  opacity: [0, 1 - distance * 0.1, 0],
                  transition: { duration: distance * 0.2 },
                });
              }
            }, [clickedCell]);

            return (
              <div
                key={`matrix-col-${colIdx}`}
                className={cn(
                  "bg-transparent border-l border-b border-neutral-600",
                  cellClassName
                )}
                onClick={() => setClickedCell([rowIdx, colIdx])}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  whileHover={{
                    opacity: [0, 1, 0.5],
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "backOut",
                  }}
                  animate={controls}
                  className="bg-[#BEBEBE] h-9 w-9" //  rgba(14, 165, 233, 0.15) for a more subtle effect
                ></motion.div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};
