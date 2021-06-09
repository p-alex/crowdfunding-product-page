import SectionContainer from "../containers/SectionContainer";
import styles from "../styles/MastercraftBackProject.module.css";
import {
  Button,
  FlexContainer,
  Paragraph,
  HeaderTag,
} from "../component-library/component-library";
export default function MastercraftBackProject() {
  return (
    <SectionContainer>
      <img
        src="/images/logo-mastercraft.svg"
        alt="mastercraft"
        className={styles.logo}
      />
      <HeaderTag type={"one"}>Mastercraft Bamboo Monitor Riser</HeaderTag>
      <Paragraph>
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </Paragraph>
      <FlexContainer>
        <Button size="big" type="button">
          Back this project
        </Button>
        <Button type="bookmark">Bookmark</Button>
      </FlexContainer>
    </SectionContainer>
  );
}
