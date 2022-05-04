import React from "react";
import styled from "styled-components";
import { useCelebContext } from "~/lib/components/StaticPropsContextProvider";

export const TagCollection = () => {
  const tags = useCelebContext().celeb.tags!;

  return (
    <StyledTags>
      <div className="tags__regular">
        {tags.regular.map((t) => (
          <div className="tags__text-tags " key={t.tag.name}>
            {t.tag.name}
          </div>
        ))}
      </div>

      {tags.lowConfidence.length > 0 && (
        <div className="tags__low-confidence">
          <p>Maybe</p>
          <div className="low-container">
            {tags.lowConfidence.map((t) => (
              <div className="tags__text-tags" key={t.tag.name}>
                {t.tag.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </StyledTags>
  );
};

const StyledTags = styled.div`
  margin-top: 2rem;
  padding: 0 0.5rem;
  text-align: center;
  max-width: 72rem;
  .tags {
    &__low-confidence {
      margin-top: 1.5rem;
      p {
        font-weight: 600;
      }
    }

    &__text-tags {
      border: 1px solid var(--clr-darkPurple);
      color: var(--clr-darkPurple);
      font-size: 0.75rem;
      font-weight: 500;
      width: fit-content;
      padding: 0.6rem 0.4rem;
      border-radius: 0.25rem;
      display: inline-block;
      margin: 0 0.5rem;
      margin-top: 1rem;
    }
  }
`;
