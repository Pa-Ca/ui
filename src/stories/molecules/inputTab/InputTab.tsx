import React, { useMemo } from "react";
import "./inputTab.scss";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { motion } from "framer-motion/dist/framer-motion";
import useResizeObserver from "../../hooks/useResizeObserver";

interface InputTabProps {
  /**
   * Current tab index
   */
  index: number;
  /**
   * Change tab index
   */
  setIndex?: (i: number) => void;
  /**
   * Tab title list
   */
  tabs?: string[];
}

/**
 * Primary UI component for user interaction
 */
export const InputTab = ({
  index,
  setIndex = () => {},
  tabs = [],
  ...props
}: InputTabProps) => {
  const observer = useResizeObserver<HTMLDivElement>();

  const lineWidth = useMemo(() => {
    return (observer.width / Math.max(tabs.length, 1)) * 0.6;
  }, [observer.width, tabs.length]);

  const lineLeft = useMemo(() => {
    return (index * observer.width) / Math.max(tabs.length, 1) + 20;
  }, [index, observer.width, tabs.length]);

  return (
    <Box
      className="input-tab--container"
      borderRadius="12px"
      weakShadow
      innerRef={observer.ref}
    >
      {tabs.map((tab, i) => (
        <Box className="input-tab--tab" onClick={() => setIndex(i)}>
          <Text color="#112211" weight="600">
            {tab}
          </Text>

          {i !== 0 && <Box className="input-tab--separator" />}
        </Box>
      ))}

      <motion.div
          initial={{ left: `${lineLeft}px`, width: `${lineWidth}px` }}
          animate={{ left: `${lineLeft}px`, width: `${lineWidth}px` }}
          exit={{ left: `${lineLeft}px`, width: `${lineWidth}px` }}
          transition={{ duration: 0.5 }}
          className="input-tab--line"
          style={{ borderColor: "#8DD3BB" }}
        />
    </Box>
  );
};
