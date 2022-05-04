import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { sanityImage } from "~/lib/components/sanityio";
import { useCelebContext } from "~/lib/components/StaticPropsContextProvider";

export const TopSection = () => {
  const context = useCelebContext();

  const picture = context.celeb.picture || context.placeholderImage;

  return (
    <StyledSection>
      <section>
        <header>
          <div>
            <Image
              blurDataURL={picture.metadata.lqip}
              placeholder="blur"
              src={sanityImage(picture).width(200).height(250).url()}
              width={200}
              height={250}
              priority
              alt={context.celeb.name}
            />
          </div>

          <h1>
            <span>Religion, politics, and ideas of</span>
            <br /> <span>{context.celeb.name}</span>
          </h1>
        </header>
      </section>
    </StyledSection>
  );
};

const StyledSection = styled.div`
  margin: 0 auto;
  text-align: center;
  padding: ;

  section{
    background: linear-gradient(-90deg, #4535f74f, #fbc9546f, #4cfde838);
    position: relative;
    background-size: 100% 100%;
    background-repeat: repeat-x;
    z-index: 0;

  }
  header{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 1;
    padding-top: 1rem;
  }

  h1 {
    font-size: 1.25rem;
    font-weight: 400;
    margin: 1rem 0;
    letter-spacing: -0.01em;
    line-height: 2rem;
    color: var(--clr-darkGray);
  }
  span:last-child {
    font-weight: 500;
    font-size: 1.5rem;
    color: var(--clr-black);
  }
`;
