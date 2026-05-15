describe("Home page", () => {
  it("loads the app", () => {
    cy.visit("http://localhost:5173");
    cy.contains("Home");
  });
});
