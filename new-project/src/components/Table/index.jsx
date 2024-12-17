import TableRow from "../TableRow";

return (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>age</th>
      </tr>
    </thead>
    <tbody>
      {students &&
        students.map((s) => {
          return (
            <TableRow key={s.id}>
              <td>{s.id}</td>
              <td>{s.studentName}</td>
              <td>{s.age}</td>
            </TableRow>
          );
        })}
    </tbody>
  </table>
);

export default Table;
