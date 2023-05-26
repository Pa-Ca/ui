import React from "react";
import styles from "./terms.module.scss";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { BasicPage } from "../basicPage/BasicPage";
import { HeaderProps } from "../../organisms/header/Header";

interface TermsProps {
  /**
   * Component width
   */
  headerArgs?: HeaderProps;
}

/**
 * Primary UI component for user interaction
 */
export const Terms = ({ headerArgs, ...props }: TermsProps) => {
  return (
    <Box className={(styles["terms--super-container"])}>
      <BasicPage headerArgs={headerArgs}>
        <Box className="terms--container">
          <Text color="#112211" weight="600" type="h4">
            Términos y Condiciones
          </Text>

          <Box className={(styles["term--section"])}>
            <Text color="#112211" type="h5" className="term--title">
              Payments
            </Text>

            <ul>
              <li>
                <Text color="#112211" weight="400" type="h6">
                  If you are purchasing your ticket using a debit or credit card
                  via the Website, we will process these payments via the
                  automated secure common payment gateway which will be subject
                  to fraud screening purposes. <br />
                  <br />
                </Text>
              </li>

              <li>
                <Text color="#112211" weight="400" type="h6">
                  If you do not supply the correct card billing address and/or
                  cardholder information, your booking will not be confirmed and
                  the overall cost may increase. We reserve the right to cancel
                  your booking if payment is declined for any reason or if you
                  have supplied incorrect card information. If we become aware
                  of, or is notified of, any fraud or illegal activity
                  associated with the payment for the booking, the booking will
                  be cancelled and you will be liable for all costs and expenses
                  arising from such cancellation, without prejudice to any
                  action that may be taken against us. <br />
                  <br />
                </Text>
              </li>

              <li>
                <Text color="#112211" weight="400" type="h6">
                  Golobe may require the card holder to provide additional
                  payment verification upon request by either submitting an
                  online form or visiting the nearest Golobe office, or at the
                  airport at the time of check-in. Golobe reserves the right to
                  deny boarding or to collect a guarantee payment (in cash or
                  from another credit card) if the card originally used for the
                  purchase cannot be presented by the cardholder at check-in or
                  when collecting the tickets, or in the case the original
                  payment has been withheld or disputed by the card issuing
                  bank. Credit card details are held in a secured environment
                  and transferred through an internationally accepted system.
                  <br />
                  <br />
                </Text>
              </li>
            </ul>
          </Box>

          <Box className={(styles["term--section"])}>
            <Text color="#112211" type="h5" className="term--title">
              Contact Us
            </Text>

            <Text color="#112211" weight="400" type="h6">
              If you have any questions about our Website or our Terms of Use,
              please contact: <br />
              Golobe Group Q.C.S.C <br />
              Golobe Tower <br />
              P.O. Box: 22550 <br />
              Doha, State of Qatar <br />
              Further contact details can be found at golobe.com/help <br />
            </Text>
          </Box>
        </Box>
      </BasicPage>
    </Box>
  );
};