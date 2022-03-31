describe("About.html", () => {
  it("should contains h1", () => {
    cy.visit("about.html");
    cy.get("h1").contains("This is about page");
  });
});
