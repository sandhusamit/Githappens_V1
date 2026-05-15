describe("Auth API Flow", () => {
  const apiUrl = "http://localhost:3001";

  const uniqueId = Date.now() + Math.floor(Math.random() * 1000);

  const user = {
    firstName: `CypressFN_${uniqueId}`,
    lastName: `CypressLN_${uniqueId}`,
    username: `cypress_${uniqueId}`,
    email: `cypress_${uniqueId}@example.com`,
    password: "Password123!",
  };

//   after(() => {
//     cy.request({
//       method: "DELETE",
//       url: `${apiUrl}/api/test/users/by-email/${user.email}`,
//       failOnStatusCode: false,
//     });
//   });

  it("creates user, logs in, checks cookie, logs out, and verifies logout", () => {
    let authCookie;

    cy.request({
      method: "POST",
      url: `${apiUrl}/api/users`,
      body: user,
      failOnStatusCode: false,
    }).then((res) => {
      cy.log(JSON.stringify(res.body));

      expect(res.status).to.eq(201);
      expect(res.body.hasError).to.eq(false);
      expect(res.body.user.email).to.eq(user.email);
      expect(res.body.user.username).to.eq(user.username);
      expect(res.body.user.password).to.be.undefined;
    });

    cy.request({
      method: "POST",
      url: `${apiUrl}/api/auth/login`,
      body: {
        email: user.email,
        password: user.password,
      },
      failOnStatusCode: false,
    }).then((res) => {
      cy.log(JSON.stringify(res.body));

      expect(res.status).to.eq(200);
      expect(res.body.hasError).to.eq(false);
      expect(res.headers["set-cookie"]).to.exist;

      authCookie = res.headers["set-cookie"][0];
    });

    cy.then(() => {
      cy.request({
        method: "GET",
        url: `${apiUrl}/api/auth/me`,
        headers: {
          Cookie: authCookie,
        },
        failOnStatusCode: false,
      }).then((res) => {
        cy.log(JSON.stringify(res.body));

        expect(res.status).to.eq(200);
        expect(res.body.hasError).to.eq(false);
        expect(res.body.user.email).to.eq(user.email);
        expect(res.body.user.username).to.eq(user.username);
      });
    });

    cy.then(() => {
      cy.request({
        method: "POST",
        url: `${apiUrl}/api/auth/logout`,
        headers: {
          Cookie: authCookie,
        },
        failOnStatusCode: false,
      }).then((res) => {
        cy.log(JSON.stringify(res.body));

        expect(res.status).to.eq(200);
        expect(res.body.hasError).to.eq(false);
      });
    });

    cy.then(() => {
      cy.request({
        method: "GET",
        url: `${apiUrl}/api/auth/me`,
        failOnStatusCode: false,
      }).then((res) => {
        cy.log(JSON.stringify(res.body));

        expect(res.status).to.eq(401);
        expect(res.body.message).to.exist;
      });
    });
  });
});