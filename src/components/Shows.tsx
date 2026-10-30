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
              <td>October 24, 2026</td>
            </tr>
            <tr className="crow">
              <td>The Bucks - Holiday Party at Jam Lab</td>
              <td>Brookfield, IL</td>
              <td>December 11, 2026</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default Shows;
