import React from "react";
import { useCelebContext } from "~/lib/components/StaticPropsContextProvider";
import { Fact } from "~/lib/celeb/Facts/Fact";
import styled from "styled-components";

export const Facts = () => {
  const context = useCelebContext();
  const { groups, topics } = context.celeb.facts!;

  return (
    <StyledFacts>
      {topics.map((topic, i) => {
        const factGroup = groups[topic];

        return (
          <div key={`${topic}-${i}`} className="facts__facts-container">
            <div className="facts__topic">{topic}</div>

            {factGroup.map((fact, innerI) => {
              return (
                <div
                  key={`${topic}-${i}-${innerI}`}
                  className="facts__fact"
                >
                  <Fact value={fact} />
                </div>
              );
            })}
          </div>
        );
      })}
    </StyledFacts>
  );
};

const StyledFacts = styled.div`
  padding: 0 1rem;
  max-width: 72rem;
  .facts {
    &__facts-container {
      margin-top: 2rem;
    }
    &__topic {
      background-color: var(--clr-darkPurple);
      padding: 1rem;
      color: var(--clr-white);
      border-radius: 0.25rem;
    }
    &__fact {
      border-radius: 0.25rem;
      margin-top: 1.6rem;
      padding: 1rem;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
    }
  }
`;
