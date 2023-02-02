const formResult = (props) => {
  return (
    <div>
      <h1>Results</h1>
      <form>
        name={props.name}
        password={props.password}
        email={props.email}
        <button>Edit your informations</button>
      </form>
    </div>
  );
};

export default formResult;
