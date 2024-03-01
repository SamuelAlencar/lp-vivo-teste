// cypress/integration/header.spec.js

import React from "react";
import Header from "@/components/header";
import { mount } from "cypress/react18";

describe("Header Component", () => {
  beforeEach(() => {
    mount(<Header />);
  });

  it("should render the header with menu icon, logo, and menu", () => {
    cy.get("[data-testid=menu]").should("exist");
    cy.get("[data-testid=btn-menu]").should("exist");
    cy.get("[data-testid=logo]").should("exist");
  });

  it("should toggle the menu on icon click", () => {
    cy.get("[data-testid=btn-menu]").click();
  });

});
