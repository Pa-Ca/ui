import React from "react";
import "./branchNav.scss";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import { Button } from "../../atoms/button/Button";

interface BranchNavProps {
  /**
   * Indicates if the like button should be displayed
   */
  showLike?: boolean;
  /**
   * Current like value
   */
  like?: boolean;
  /**
   * Function that change like value
   */
  onLikeClick?: () => void;
  /**
   * On share button click
   */
  onShareClick?: () => void;
  /**
   * On resume box click
   */
  onResumeClick?: () => void;
  /**
   * On pictures box click
   */
  onPicturesClick?: () => void;
  /**
   * On menu box click
   */
  onMenuClick?: () => void;
  /**
   * On reviews box click
   */
  onReviewsClick?: () => void;
  /**
   * Component main color
   */
  color?: string;
  /**
   * Component width
   */
  width?: string;
  /**
   * Component height
   */
  height?: string;
}

/**
 * Primary UI component for user interaction
 */
export const BranchNav = ({
  showLike,
  like,
  onLikeClick,
  onShareClick,
  onResumeClick,
  onPicturesClick,
  onMenuClick,
  onReviewsClick,
  color,
  width,
  height,
  ...props
}: BranchNavProps) => {
  return (
    <Box
      className="branch-nav--container"
      borderTopLeftRadius="12px"
      borderTopRightRadius="12px"
      style={{ width, height }}
    >
      <Box className="branch-nav--menu">
        <Box className="branch-nav--item" onClick={onResumeClick}>
          <Text className="branch-nav--menu-text" weight="600" color="#112211">
            Resumen
          </Text>
        </Box>
        <Box className="branch-nav--item" onClick={onPicturesClick}>
          <Text className="branch-nav--menu-text" weight="600" color="#112211">
            Fotos
          </Text>
        </Box>
        <Box className="branch-nav--item" onClick={onMenuClick}>
          <Text className="branch-nav--menu-text" weight="600" color="#112211">
            Menú
          </Text>
        </Box>
        <Box className="branch-nav--item" onClick={onReviewsClick}>
          <Text className="branch-nav--menu-text" weight="600" color="#112211">
            Reviews
          </Text>
        </Box>
      </Box>

      <Box className="branch-nav--menu">
        {showLike && (
          <Box className="branch-nav--menu-button">
            <Button
              size="box"
              borderColor={color}
              backgroundColor={color}
              primary={like}
              onClick={onLikeClick}
            >
              <Icon
                icon={like ? "heart-fill" : "heart"}
                size="20px"
                color={like ? "white" : "black"}
              />
            </Button>
          </Box>
        )}
        <Box className="branch-nav--menu-button">
          <Button
            size="box"
            borderColor={color}
            backgroundColor={color}
            onClick={onShareClick}
          >
            <Icon icon="share" size="20" />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
