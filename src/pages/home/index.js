import useUserContext from "context/UserContext";
import React, { useMemo } from "react";
import { Helmet } from "react-helmet";
import { useTable } from "react-table";

export default function HomePage() {
  const [state] = useUserContext();

  const data = useMemo(
    () =>
      state.users.map((user) =>
        Object.assign({
          col1: user.id,
          col2: user.name,
          col3: user.surname,
          col4: user.age,
        })
      ),
    [state.users]
  );

  const columns = useMemo(
    () => [
      { Header: "id", accessor: "col1" },
      { Header: "Name", accessor: "col2" },
      { Header: "Surname", accessor: "col3" },
      { Header: "Age", accessor: "col4" },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <>
      <Helmet>
        <title>Home | TaxDown Code Challenge</title>
      </Helmet>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        {
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        }
      </table>
    </>
  );
}
