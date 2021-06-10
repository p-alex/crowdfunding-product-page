import styles from "../styles/MastercraftBackProject.module.css";
import {
  SectionContainer,
  Button,
  Paragraph,
  HeaderTag,
} from "../component-library/component-library";
export default function MastercraftBackProject() {
  return (
    <SectionContainer textAlign="center">
      <img
        src="/images/logo-mastercraft.svg"
        alt="mastercraft"
        className={styles.logo}
      />
      <HeaderTag type={"one"}>Mastercraft Bamboo Monitor Riser</HeaderTag>
      <Paragraph>
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </Paragraph>
      <div className={styles.btns_container}>
        <Button size="big" type="button" func={() => {}}>
          Back this project
        </Button>
        <Button size="big" type="bookmark" func={() => {}}>
          Bookmark
        </Button>
      </div>
    </SectionContainer>
  );
}
