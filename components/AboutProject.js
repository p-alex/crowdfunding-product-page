import {
  SectionContainer,
  HeaderTag,
  Paragraph,
} from "../component-library/component-library";
import Reward from "./Reward";
export default function AboutProject() {
  return (
    <SectionContainer textAlign="left">
      <HeaderTag type="one">About this project</HeaderTag>
      <Paragraph>
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand. Featuring artisan craftsmanship, the simplicity of design
        creates extra desk space below your computer to allow notepads, pens,
        and USB sticks to be stored under the stand.
      </Paragraph>
      <Reward />
      <Reward />
      <Reward />
    </SectionContainer>
  );
}
