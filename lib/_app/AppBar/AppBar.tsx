import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export const AppBar = () => {
  const [show, setShow] = useState(false);
  return (
    <StyledNav>
      <div>
        <section className="appBar__section">
          <div className="appBar__logo-searchIcon">
            <div className="appBar__logo-container">
              <Link passHref href="/">
                <a>
                  <Image
                    src="/images/logo.svg"
                    width={250}
                    height={30}
                    alt="Hollowverse"
                    layout="fixed"
                  />
                </a>
              </Link>
            </div>

            {!show && (
              <svg
                onClick={() => setShow(true)}
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill=""
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.9996 27.586L21.4476 20.034C23.2624 17.8553 24.1674 15.0608 23.9743 12.2319C23.7812 9.40296 22.5049 6.75738 20.4109 4.84551C18.3169 2.93363 15.5664 1.90267 12.7316 1.96708C9.8968 2.03149 7.19598 3.18632 5.19097 5.19133C3.18596 7.19635 2.03112 9.89717 1.96671 12.732C1.9023 15.5667 2.93327 18.3172 4.84514 20.4112C6.75702 22.5052 9.4026 23.7816 12.2315 23.9747C15.0605 24.1678 17.8549 23.2628 20.0336 21.448L27.5856 29L28.9996 27.586ZM3.99963 13C3.99963 11.22 4.52747 9.4799 5.5164 7.99986C6.50533 6.51982 7.91094 5.36627 9.55548 4.68508C11.2 4.00389 13.0096 3.82566 14.7554 4.17293C16.5013 4.52019 18.1049 5.37736 19.3636 6.63603C20.6223 7.89471 21.4794 9.49835 21.8267 11.2442C22.174 12.99 21.9957 14.7996 21.3145 16.4441C20.6334 18.0887 19.4798 19.4943 17.9998 20.4832C16.5197 21.4722 14.7797 22 12.9996 22C10.6135 21.9973 8.32584 21.0483 6.63859 19.361C4.95134 17.6738 4.00227 15.3861 3.99963 13V13Z"
                  fill="#410f70"
                />
              </svg>
            )}
            {show && (
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setShow(false)}
              >
                <path
                  d="M12.0008 12L17.2438 17.243M6.75781 17.243L12.0008 12L6.75781 17.243ZM17.2438 6.75696L11.9998 12L17.2438 6.75696ZM11.9998 12L6.75781 6.75696L11.9998 12Z"
                  stroke="#410f70"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>

          <div className="appBar__input-section">
            {show && (
              <div className="appBar__input-container">
                <input
                  placeholder="Search for a celebrity"
                  type="search"
                  className="appBar__input"
                />
              </div>
            )}
          </div>
        </section>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  padding: 0 1rem;
  max-width: 72rem;
  svg {
    padding-bottom: 0.3rem;
    cursor: pointer;
  }
  .appBar {
    &__logo-searchIcon {
      display: flex;
      align-items: center;
      height: 3.75rem;
      gap: 1rem;
    }
    &__logo-container {
      flex: 1;
    }

    &__input-section {
      max-width: 40rem;
      input {
        margin-bottom: 1rem;
        border-radius: 4rem;
        outline: none;
        width: 100%;
        border: none;
        background-color: var(--clr-lightPurple);
        height: 2.25rem;
        padding: 1rem;
        z-index: 100;
        animation: slideDown 1.5s forwards;
        opacity: 0;
        transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
      }
    }
    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-300px);
      }
      to {
        opacity: 1;
        transform: translateX(0%);
      }
    }
  }
`;
