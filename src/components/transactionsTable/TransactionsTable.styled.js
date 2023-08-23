import { styled } from "styled-components";

export const Table = styled.table`
margin-left: auto;
margin-right: auto;

th {
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}


td {
  border: 1px solid #ddd;
  padding: 8px;
}


tr:nth-child(even) {
  background-color: #f2f2f2;
}


tr:hover {
  background-color: #e0e0e0;
}


td, th {
  white-space: nowrap; 
}


td:first-child, th:first-child {
  border-left: none;
}

td:last-child, th:last-child {
  border-right: none;
}


td, th {
  text-align: center;
}
`