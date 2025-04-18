import React, { useEffect, useState } from "react";
import { getAllPersonAsync } from "../Services/api-service";

export const PersonList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAllPersonAsync()
      .then((data) => {
        setItems(data || []);
      })
      .catch((err) => console.error(err));
  });

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Person List</h1>
      {items.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <table border="1" cellPadding="8" cellSpacing="0" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Business Entity ID</th>
              <th>Person Type</th>
              <th>Title</th>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Last Name</th>
              <th>Modified Date</th>
            </tr>
          </thead>
          <tbody>
            {items.map((person) => (
              <tr key={person.businessEntityId}>
                <td>{person.businessEntityId}</td>
                <td>{person.personType}</td>
                <td>{person.title || "-"}</td>
                <td>{person.firstName}</td>
                <td>{person.middleName || "-"}</td>
                <td>{person.lastName}</td>
                <td>{new Date(person.modifiedDate).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
