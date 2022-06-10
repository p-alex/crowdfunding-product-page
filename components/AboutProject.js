import { useContext } from "react";
import ProjectContext from "../context/project-context";
import {
  SectionContainer,
  HeaderTag,
  Paragraph,
} from "../component-library/component-library";
import Reward from "./Reward";
// p
export default function AboutProject() {
  const context = useContext(ProjectContext);
  const { rewards, longDesc } = context.data[0];
  return (
    <SectionContainer textAlign="left">
      <HeaderTag type="two">About this project</HeaderTag>
      <Paragraph>{longDesc}</Paragraph>
      {rewards.map((reward) => {
        return (
          <Reward
            key={reward.id}
            title={reward.title}
            minPledge={reward.minPledge}
            desc={reward.desc}
            stock={reward.stock}
            id={reward.id}
          />
        );
      })}
    </SectionContainer>
  );
}
