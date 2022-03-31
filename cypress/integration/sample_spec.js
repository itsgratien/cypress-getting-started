describe("my first test", () => {
  it('finds the content "type"', () => {
    cy.visit("index.html");
    cy.get("h1").contains("Welcome to home page");
    cy.contains("about us").click();
    cy.url().should("include", "about.html");
    cy.url().get(".aboutH1").contains("This is about page");
  });
});
