function A(props) {
  return (
    <>
      <C data={props.data} />
    </>
  );
}

function B(props) {
  return <h3>{props.data}</h3>;
}

function C(props) {
  return (
    <>
      <D data={props.data} />
    </>
  );
}

function D(props) {
  return (
    <>
      <h3>{props.data}</h3>;
      <E data={props.data} />
    </>
  );
}

function E(props) {
  return (
    <>
      <h3>{props.data}</h3>;
      <F data={props.data} />
    </>
  );
}

function F(props) {
  return <h3>{props.data}</h3>;
}

function PropsExample() {
  const data = "Hello";
  return (
    <div>
      <h2>Understanding Props ....</h2>
      <A data={data} />
      <B data={data} />
    </div>
  );
}

export default PropsExample;
