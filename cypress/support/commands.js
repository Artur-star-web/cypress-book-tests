Cypress.Commands.add('login', (email, password) => {

  cy.contains('Log in').click();
  cy.get('#mail').type(email);
  cy.get('#pass').type(password);
  cy.get('button[type="submit"]').click();
});
Cypress.Commands.add('addBookToFavorites', (bookTitle) => {
  // Находим книгу по точному названию и кликаем кнопку в её блоке
  cy.contains('.card .card-title', bookTitle) // Ищем заголовок книги
    .parents('.card') // Поднимаемся до карточки книги
    .within(() => {
      cy.get('button.btn-success').click(); // Кликаем кнопку внутри этой карточки
    });
});

Cypress.Commands.add('removeBookFromFavorites', (bookTitle) => {
  // Находим книгу по точному названию и кликаем кнопку в её блоке
  cy.contains('.card .card-title', bookTitle) // Ищем заголовок книги
    .parents('.card') // Поднимаемся до карточки книги
    .within(() => {
      cy.get('button.btn-secondary').click(); // Кликаем кнопку внутри этой карточки
    });
});
Cypress.Commands.add('checkBookInFavorites', (bookTitle) => {
  
  cy.contains('Favorites').click();
  
  cy.contains(bookTitle).should('be.visible');
});