var NeedToKnowTable = ({tableData}) => {
  return (
    <table className="table table-dark table-hover">
        <thead className="c-orange">
          <tr>
            {
              tableData.headers.map((h,i) => (<th key={i}>{h}</th>))
            }
          </tr>
        </thead>
        <tbody>
          {tableData.rows.map((r, i) => 
            <>
              <tr key={i}>
                <td>{r.name}</td>
                <td>{r.use}</td>
                <td>{r.base}</td>
                <td>
                  {getRuneImagesFromString(r.runes)}
                  {<div>{r.runes}</div>}
                </td>
                <td>{r.note}</td>
              </tr>
            </>
          )}
        </tbody>
      </table>
  );
}

var RecipeTable = ({tableData}) => {
  return (
    <table className="table table-dark table-hover">
        <thead className="c-orange">
          <tr>
            {
              tableData.headers.map((h,i) => (<th key={i}>{h}</th>))
            }
          </tr>
        </thead>
        <tbody>
          {tableData.rows.map((r, i) => 
            <>
              <tr key={i}>
                <td>{r.name}</td>
                <td>{r.input}</td>
                <td>{r.output}</td>
                <td>{r.note}</td>
              </tr>
            </>
          )}
        </tbody>
      </table>
  );
}

function getRuneImagesFromString(spaceDelimitedRunes){
  let imgs;

  let runes = spaceDelimitedRunes.split(" ");
  imgs = runes.map(r => {
    return <img src={`./images/Rune${r}.gif`} alt="Rune"></img>
  });

  return (
    <div className="d-flex">{imgs}</div>
  )
}


export { NeedToKnowTable, RecipeTable };