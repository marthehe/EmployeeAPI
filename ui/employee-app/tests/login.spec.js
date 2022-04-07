// Login test
//When username and password were not provided user should not be redirected to Home Page

describe("Login test", function () {
  //Arrange - setup initial app state
  // - visit a web page
  it("should not redirect to Home page when no user details are provided", function () {
    cy.visit("/");

    //Act - take an action
    // interact with it that element
    cy.get("button").contains("Login").click();

    //Assert - make an assertion
    // - make an assertion about page content

    cy.url().should("not.include", "home");
  });

  //When username and password were provided user should be redirected to Home Page

  it("should redirect to Home page when correct user details are provided", function () {
    cy.visit("/");

    //Act - take an action
    // interact with it that element
    cy.get("input#username").type("t-mahend");
    cy.get("input#password").type("Zwiedzanko89");

    cy.get("button").contains("Login").click();

    //Assert - make an assertion
    // - make an assertion about page content
    cy.url().should("include", "home");
  });
});
