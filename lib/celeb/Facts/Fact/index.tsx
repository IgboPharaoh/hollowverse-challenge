import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { useCelebContext } from "~/lib/components/StaticPropsContextProvider";
import { Fact as TFact } from "~/lib/components/types";

export const Fact: React.FC<{ value: TFact }> = ({ value }) => {
  const {
    celeb: { name },
  } = useCelebContext();

  return (
    <StyledFact>
      <div className="fact__date-container">
        <p>{value.date}</p>
      </div>

      <div className="fact__quote-container">
        {(value.type === "quote" && (
          <div>
            <p>
              {value.context}, {name} said
            </p>

            <blockquote>
              <p>{value.quote}</p>
            </blockquote>
          </div>
        )) ||
          (value.type == "fact" && (
            <div>
              <p>{value.content}</p>
            </div>
          ))}
      </div>

      <div className="fact__subtags-container">
        {value.tags.map((t) => {
          return (
            <p key={t.tag.name}>
              # {t.isLowConfidence && "Possibly "}
              {t.tag.name}
            </p>
          );
        })}
      </div>

      <div className="fact__link-container">
        <Link href={value.source}>Source</Link>
        <Link href={value.forumLink}>Forum link</Link>
      </div>
    </StyledFact>
  );
};

const StyledFact = styled.div`
  .fact {
    &__date-container {
      p {
        font-size: 0.875rem;
        color: var(--clr-darkGray);
        font-weight: 500;
      }
    }
    &__quote-container {
      p {
        padding-top: 1rem;
        line-height: 150%;
        color: var(--clr-textBlack);
      }
      blockquote {
        border-left: 5px solid var(--clr-darkPurple);
        background-color: var(--clr-lightPurple);
        border-radius: 0.25rem;
        margin: 1rem 0;
        p {
          padding: 1rem;
        }
      }
    }
    &__subtags-container {
      p {
        margin-top: 0.5rem;
        margin-right: 1rem;
        color: var(--clr-darkPurple);
        font-size: 0.75rem;
        display: inline-block;
        font-weight: 500;
      }
    }
    &__link-container {
      padding-top: 1rem;
      a {
        color: var(--clr-darkPurple);
        font-size: 0.875rem;
        padding-right: 1rem;
        cursor: pointer;
      }
    }
  }
`;
