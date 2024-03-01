// cypress/integration/cards.spec.js

import React from "react";
import Cards from "@/components/cards";
import { mount } from "cypress/react18";

describe("Cards Component", () => {
  beforeEach(() => {
    // Monte o componente
    mount(<Cards />);
  });

  it("should render the Cards component with three Card elements", () => {
    cy.get("[data-testid=cards]").should("exist");
  });

});
