import React, { useMemo } from "react";
import { useTable } from "react-table";
import useUsers from "hooks/useUsers";
import { MessageStyled, TableStyled } from "./styles";
import { Link } from "react-router-dom";

export default function Table() {
  const { users } = useUsers();

  const data = useMemo(
    () =>
      users.map((user) =>
        Object.assign({
          col1: user.name,
          col2: user.surname,
          col3: user.age,
          col4: user.gender,
        })
      ),
    [users]
  );

  const columns = useMemo(
    () => [
      { Header: "Name", accessor: "col1" },
      { Header: "Surname", accessor: "col2" },
      { Header: "Age", accessor: "col3" },
      { Header: "Gender", accessor: "col4" },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <>
      {users.length > 0 ? (
        <TableStyled {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
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
        </TableStyled>
      ) : (
        <MessageStyled>
          <p>
            There's not users right now. To create one, please click{" "}
            <Link to="/create">here</Link>
          </p>
        </MessageStyled>
      )}
    </>
  );
}
