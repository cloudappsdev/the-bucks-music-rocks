import "./Shows.scss";

const Shows = () => {
  return (
    <>
      <br />
      <div>
        <h2>Upcoming Shows:</h2>
        <div>
          <table className="ctbl">
            <tr className="crow">
              <td>Stadium Club</td>
              <td>McCook</td>
              <td>July-18, 2026</td>
            </tr>
            <tr className="crow">
              <td>St Cletus : Festival</td>
              <td>LaGrange</td>
              <td>September 12, 2026</td>
            </tr>
            <tr className="crow">
              <td>The Bucks play The Mood outdoor bash</td>
              <td>Countryside</td>
              <td>September 19, 2026</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default Shows;
