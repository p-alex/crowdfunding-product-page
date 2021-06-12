import { useContext } from "react";
import ProjectContext from "../context/project-context";
import {
  SectionContainer,
  HeaderTag,
  Paragraph,
} from "../component-library/component-library";
import Reward from "./Reward";
export default function AboutProject() {
  const context = useContext(ProjectContext);
  const { rewards, longDesc } = context.data[0];
  return (
    <SectionContainer textAlign="left">
      <HeaderTag type="one">About this project</HeaderTag>
      <Paragraph>{longDesc}</Paragraph>
      {rewards.map((reward, id) => {
        return (
          <Reward
            key={id}
            title={reward.title}
            minPledge={reward.minPledge}
            desc={reward.desc}
            stock={reward.stock}
          />
        );
      })}
    </SectionContainer>
  );
}
