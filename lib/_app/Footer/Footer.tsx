import Image from "next/image";
import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <StyledFooter>
      <Image
        width={50}
        height={50}
        alt="Hollowverse"
        src="/images/letter-logo.png"
      />
      <div>
        <p>
          Hollowverse is about the important <br />
          people and their beliefs.
        </p>

        <p>
          Email us at{" "}
          <a href="mailto:hollowverse@hollowverse.com">
            hollowverse@hollowverse.com
          </a>
          .
        </p>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: var(--clr-lightPurple);
  margin-top: 4rem;
  padding: 4rem 1rem;
  max-width: 72rem;
  p {
    color: var(--clr-textBlack);
    line-height: 150%;
    padding-top: 1rem;
  }
  p:last-child {
    padding-top: 0.75rem;
    a {
      color: var(--clr-darkPurple);
      font-weight: 500;
    }
  }
`;
