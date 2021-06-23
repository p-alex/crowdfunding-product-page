import { useContext } from "react";
import ProjectContext from "../context/project-context";
import {
  FeedbackBox,
  Button,
  HeaderTag,
  Paragraph,
} from "../component-library/component-library";
export default function FeedbackModal() {
  const context = useContext(ProjectContext);
  const { donationSuccess } = context.donation;
  const { handleResetDonationState, data } = context;
  return (
    <>
      {donationSuccess && (
        <FeedbackBox>
          {donationSuccess === "Success" && (
            <img src="/images/icon-check.svg" />
          )}
          <HeaderTag type="two" marginBottom="30px">
            {donationSuccess === "Success"
              ? "Thanks for your support!"
              : "Something went wrong!"}
          </HeaderTag>
          <Paragraph marginBottom="30px">
            {donationSuccess === "Success"
              ? `Your pledge brings us one step closer to sharing ${data[0].title} worldwide. You will get an email once our campaign is completed.`
              : `Your pledge did not go through. Try again.`}
          </Paragraph>
          <Button size="small" type="button" func={handleResetDonationState}>
            Got it
          </Button>
        </FeedbackBox>
      )}
    </>
  );
}
