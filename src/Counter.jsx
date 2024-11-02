const Counter = () => {
  return (
    <div className=" col-12 col-md-2 offset-md-5 border text-white text-center">
      <span className="h2 pt-4 m-2 text-white-50">Fun Counter</span>
      <button className="btn btn-success m-1">+1</button>

      <button className="btn btn-danger">-1</button>
      <br />
      <span className="h4">
        Counter:
        <span className="text-success">0</span>
      </span>
    </div>
  );
};

export default Counter;
