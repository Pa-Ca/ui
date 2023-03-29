import React, { useMemo } from "react";
import "./categoryPreview.scss";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Button } from "../../atoms/button/Button";
import useResizeObserver from "../../hooks/useResizeObserver";
import { BranchCard, BranchCardProps } from "../../molecules/branchCard/BranchCard";

export interface CategoryPreviewProps {
  /**
   * Category title
   */
  title: string;
  /**
   * Category short description
   */
  description: string;
  /**
   * Branches that have this category
   */
  branches: BranchCardProps[];
  /**
   * On menu button click
   */
  onButtonClick: () => void;
  /**
   * Component width
   */
  width?: string;
  /**
   * Component height
   */
  height?: string;
  /**
   * Component main color
   */
  color?: string;
}

/**
 * Primary UI component for user interaction
 */
export const CategoryPreview = ({
  title,
  description,
  branches,
  onButtonClick,
  width,
  height,
  color,
  ...props
}: CategoryPreviewProps) => {
  const observer = useResizeObserver<HTMLDivElement>();

  const nPlates = useMemo(() => {
    return Math.max(1, Math.floor(observer.width / 240));
  }, [observer.width]);

  return (
    <Box
      className="category-preview--container"
      style={{ width, height }}
      innerRef={observer.ref}
    >
      <Box className="category-preview--header">
        <Box className="category-preview--summary">
          <Box backgroundColor="transparent">
            <Text type="h3" weight="600">
              {title}
            </Text>
          </Box>

          <Box backgroundColor="transparent">
            <Text color="#5a675b" weight="400">
              {description}
            </Text>
          </Box>
        </Box>

        <Button primary={false} backgroundColor={color} onClick={onButtonClick}>
          <Text type="h6" color="#112211" weight="500">
            Ver Más
          </Text>
        </Button>
      </Box>

      <Box className="category-preview--content">
        {branches?.slice(0, nPlates).map((branch, index) => (
          <Box
            className="category-preview--branch"
            backgroundColor="transparent"
            key={`category-preview--branch-${index}-${branch.name}`}
          >
            <BranchCard {...branch} color={color} width="100%" />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
