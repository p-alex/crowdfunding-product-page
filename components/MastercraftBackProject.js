import { useContext } from "react";
import ProjectContext from "../context/project-context";
import styles from "../styles/MastercraftBackProject.module.css";
import {
  SectionContainer,
  Button,
  Paragraph,
  HeaderTag,
} from "../component-library/component-library";
export default function MastercraftBackProject() {
  const context = useContext(ProjectContext);
  const { title, smallDesc } = context.data[0];
  const { handleToggleDonationMenu } = context;
  return (
    <SectionContainer textAlign="center">
      <img
        src="/images/logo-mastercraft.svg"
        alt="mastercraft"
        className={styles.logo}
      />
      <HeaderTag type="one" marginTop="10px">
        {title}
      </HeaderTag>
      <Paragraph marginTop="5px" marginBottom="35px">
        {smallDesc}
      </Paragraph>
      <div className={styles.btns_container}>
        <Button size="big" type="button" func={handleToggleDonationMenu}>
          Back this project
        </Button>
        <Button size="big" type="bookmark">
          Bookmark
        </Button>
      </div>
    </SectionContainer>
  );
}
