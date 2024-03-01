import React from "react";
import Carousel from "@/components/carousel";
import { mount } from "cypress/react18";

describe("Carousel Component", () => {
  beforeEach(() => {
    mount(<Carousel />);
  });

  it("should render the carousel with arrows and slides", () => {
    cy.get("#carousel").should("exist");
    cy.get(".slick-prev").should("exist");
    cy.get(".slick-next").should("exist");
    cy.get(".slick-slide").should("have.length", 3);
  });

  it("should navigate to the next slide on clicking the next arrow", () => {
    cy.get(".slick-next").click();
  });
});
