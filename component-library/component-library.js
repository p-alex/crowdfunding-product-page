import buttonStyles from "../styles/Button.module.css";
import sectionContainerStyles from "../styles/SectionContainer.module.css";
import progressBarStyles from "../styles/ProgressBar.module.css";

export function Button({ children, size, type, func }) {
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
        >
          {children}
        </button>
      ) : type === "bookmark" ? (
        <button
          className={buttonStyles.btn + " " + buttonStyles.bookmark}
          onClick={func}
        >
          <img src="/images/icon-bookmark.svg" alt="bookmark icon" />
          <span>{children}</span>
        </button>
      ) : null}
    </>
  );
}

export function HeaderTag({ children, type }) {
  return (
    <>
      {type === "one" ? (
        <h1>{children}</h1>
      ) : type === "two" ? (
        <h2>{children}</h2>
      ) : type === "three" ? (
        <h3>{children}</h3>
      ) : type === "four" ? (
        <h4>{children}</h4>
      ) : type === "five" ? (
        <h5>{children}</h5>
      ) : type === "six" ? (
        <h6>{children}</h6>
      ) : null}
    </>
  );
}

const paragraphStyles = {
  margin: "25px 0",
  color: "grey",
  lineHeight: "30px",
};
export function Paragraph({ children }) {
  return <p style={paragraphStyles}>{children}</p>;
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
