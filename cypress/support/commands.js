Cypress.Commands.add('login', (email, password) => {
  cy.visit('/');
  
  // Сначала находим и кликаем кнопку "Log in"
  cy.contains('Log in').click();
  
  // Ждем пока форма логина появится
  cy.get('#mail', { timeout: 10000 }).should('be.visible').type(email);
  cy.get('#pass').type(password);
  cy.get('button[type="submit"]').click();
});
Cypress.Commands.add('addBookToFavorites', (bookTitle) => {
  // Простой способ: ищем любую кнопку "Add to favorite" на странице
  cy.get('button.btn-success').first().click();
});

Cypress.Commands.add('removeBookFromFavorites', (bookTitle) => {
  // Простой способ: ищем любую кнопку "Delete from favorite" на странице
  cy.get('button.btn-secondary').first().click();
});

Cypress.Commands.add('checkBookInFavorites', (bookTitle) => {
  
  cy.contains('Favorites').click();
  
  cy.contains(bookTitle).should('be.visible');
});