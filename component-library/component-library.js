import ButtonStyles from "../styles/Button.module.css";
import FlexContainerStyles from "../styles/FlexContainer.module.css";
export function Button({ children, size, type }) {
  return (
    <>
      {type === "button" ? (
        <button
          className={
            size === "small"
              ? ButtonStyles.btn + " " + ButtonStyles.small
              : size === "big"
              ? ButtonStyles.btn + " " + ButtonStyles.big
              : ButtonStyles.btn
          }
        >
          {children}
        </button>
      ) : type === "bookmark" ? (
        <button className={ButtonStyles.btn + " " + ButtonStyles.bookmark}>
          <img src="/images/icon-bookmark.svg" />
          <span> {children}</span>
        </button>
      ) : null}
    </>
  );
}
export function FlexContainer({ children }) {
  return <div className={FlexContainerStyles.flex_container}>{children}</div>;
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
  margin: "10px 0 40px 0",
  color: "grey",
};
export function Paragraph({ children }) {
  return <p style={paragraphStyles}>{children}</p>;
}
