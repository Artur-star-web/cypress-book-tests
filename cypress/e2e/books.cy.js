describe('Book Application Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Успешный логин', () => {
    cy.login('test@test.com', 'test');
    cy.contains('Добро пожаловать test@test.com').should('be.visible');
    cy.contains('Log out').should('be.visible');
  });

  it('Ошибка при логине с неверными данными', () => {
    cy.login('wrong@email.com', 'wrongpassword');
    cy.contains('Неправильая почта или пароль').should('be.visible');
  });

  it('Добавление книги в избранное', () => {
    cy.login('test@test.com', 'test');
    
    // Добавляем книгу в избранное
    cy.addBookToFavorites('Война и мир');
    cy.checkBookInFavorites('Война и мир');
  });

  it('Удаление книги из избранного', () => {
    cy.login('test@test.com', 'test');
    
    // Потом удаляем из избранного
    cy.removeBookFromFavorites('Война и мир');
    
    // Проверяем, что книги нет в избранном
    cy.contains('h4', 'Favorites').click();
    cy.contains('Война и мир').should('not.exist');
  });

  it('Отображение пустого списка избранного', () => {
    cy.login('test@test.com', 'test');
    
    // Переходим в избранное через заголовок h4
    cy.contains('h4', 'Favorites').click();
    
    // Проверяем сообщение о пустом списке
    cy.contains('Please add some book to favorit on home page!').should('be.visible');
  });
});