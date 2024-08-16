describe("Check h1 on each page", () => {
  const pages = ["/", "/1"];

  pages.forEach((page) => {
    it(`should have at least one h1 tag on ${page}`, () => {
      cy.visit(page);
      cy.get("h1").should("have.length.greaterThan", 0);
    });
  });
});

export {};
