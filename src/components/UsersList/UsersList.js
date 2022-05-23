import { Container } from "@nextui-org/react";
import React from "react";
import Header from "./Header";
import Table from "./Table/Table";

export default function UsersList() {
  return (
    <Container>
      <Header />
      <Table />
    </Container>
  );
}
