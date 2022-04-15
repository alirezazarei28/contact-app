import "../Sass/Styles.scss";

const Error = ({ error }: { error: string }) => {
  return (
    <>
      <div role={"alert"} className="Error">
        <p>An error occurred:</p>
        <pre>{error}</pre>
        <pre>{"please refresh the page"}</pre>
      </div>
    </>
  );
};

export default Error;
