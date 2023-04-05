import React from "react";
import "./signUp.scss";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import {
  SignUpForm,
  SignUpFormProps,
} from "../../molecules/signUpForm/SignUpForm";
import {
  ImagesCarousel,
  ImagesCarouselProps,
} from "../../molecules/imagesCarousel/ImagesCarousel";

interface SignUpProps {
  /**
   * height of the component
   */
  height?: string;
  /**
   * width of the component
   */
  width?: string;
  /**
   * SignUpForm props
   * @see SignUpFormProps
   * */
  signUpFormProps: SignUpFormProps;
  /**
   * ImagesCarousel props
   * @see ImagesCarouselProps
   * */
  imagesCarouselProps: ImagesCarouselProps;
}

/**
 * Primary UI component for user interaction
 */
export const SignUp = ({
  imagesCarouselProps,
  signUpFormProps,
  height,
  width,
  ...props
}: SignUpProps) => {
  return (
    <Box className="sign-up--container" style={{ height, width }}>
      <Box className="sign-up--caroussel">
        <ImagesCarousel {...imagesCarouselProps} />
      </Box>
      <Box className="sign-up--login-form-container">
        <Box className="sign-up--icon">
          <Icon icon="pa-ca" size={"62px"} />
        </Box>
        <Text type="h2" weight="700" className="sign-up--title">
          Sign up
        </Text>
        <Text className="sign-up--sub-title" type="p">
          Let’s get you all st up so you can access your personal account.
        </Text>
        <SignUpForm {...signUpFormProps} />
      </Box>
    </Box>
  );
};
