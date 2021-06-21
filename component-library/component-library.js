import { useContext } from "react";
import ProjectContext from "../context/project-context";
import buttonStyles from "../styles/Button.module.css";
import sectionContainerStyles from "../styles/SectionContainer.module.css";
import progressBarStyles from "../styles/ProgressBar.module.css";
import paragraphStyles from "../styles/Paragraph.module.css";
import modalStyles from "../styles/Modal.module.css";

export function Button({ children, size, type, func, isDisabled, tabindex }) {
  const context = useContext(ProjectContext);
  const { isNavMenuActive, toggleBookmarked, isBookmarked } = context;
  const { isDonationProcessActive } = context.donation;
  return (
    <>
      {type === "button" ? (
        <button
          className={
            size === "small"
              ? buttonStyles.btn + " " + buttonStyles.small
              : size === "big"
              ? buttonStyles.btn + " " + buttonStyles.big
              : buttonStyles.btn
          }
          onClick={func}
          disabled={isDisabled}
          aria-label={children}
          tabIndex={
            tabindex
              ? tabindex
              : isNavMenuActive || isDonationProcessActive
              ? "-1"
              : "0"
          }
        >
          {children}
        </button>
      ) : type === "bookmark" ? (
        <button
          className={buttonStyles.btn + " " + buttonStyles.bookmark}
          onClick={toggleBookmarked}
          aria-label={children}
          tabIndex={isNavMenuActive || isDonationProcessActive ? "-1" : "0"}
        >
          <img
            src={`/images/${
              isBookmarked ? "icon-bookmark-enabled" : "icon-bookmark"
            }.svg`}
            alt="bookmark icon"
          />
          <span>{isBookmarked ? "Bookmarked" : "Bookmark"}</span>
        </button>
      ) : null}
    </>
  );
}

export function HeaderTag({ children, type, marginBottom, marginTop }) {
  return (
    <>
      {type === "one" ? (
        <h1 style={{ marginBottom, marginTop }}>{children}</h1>
      ) : type === "two" ? (
        <h2 style={{ marginBottom, marginTop }}>{children}</h2>
      ) : type === "three" ? (
        <h3 style={{ marginBottom, marginTop }}>{children}</h3>
      ) : type === "four" ? (
        <h4 style={{ marginBottom, marginTop }}>{children}</h4>
      ) : type === "five" ? (
        <h5 style={{ marginBottom, marginTop }}>{children}</h5>
      ) : type === "six" ? (
        <h6 style={{ marginBottom, marginTop }}>{children}</h6>
      ) : null}
    </>
  );
}

export function Paragraph({ children, marginTop, marginBottom }) {
  return (
    <p
      className={paragraphStyles.paragraph}
      style={{ marginBottom, marginTop }}
    >
      {children}
    </p>
  );
}

export function SectionContainer({ children, textAlign }) {
  return (
    <section className={sectionContainerStyles.container} style={{ textAlign }}>
      {children}
    </section>
  );
}

export function ProgressBar({
  currentValue,
  maxValue,
  marginBottom,
  marginTop,
}) {
  return (
    <div
      className={progressBarStyles.bar_container}
      style={{ marginBottom, marginTop }}
    >
      <div
        className={progressBarStyles.bar}
        style={
          currentValue < maxValue
            ? {
                width: ((currentValue / maxValue) * 100).toString() + "%",
              }
            : { width: "100%" }
        }
      ></div>
    </div>
  );
}

export function Modal({ children, handleResetDonationMenu }) {
  return (
    <>
      <div
        className={modalStyles.modal_backdrop}
        onClick={handleResetDonationMenu}
      ></div>
      <div className={modalStyles.modal}>{children}</div>
    </>
  );
}

export function AnchorTag({ children, url }) {
  const context = useContext(ProjectContext);
  const { isNavMenuActive } = context;
  const { isDonationProcessActive } = context.donation;
  return (
    <a
      href={url}
      tabIndex={isNavMenuActive || isDonationProcessActive ? "-1" : "0"}
    >
      {children}
    </a>
  );
}

export function FeedbackModal() {
  return <h1>hello</h1>;
}
