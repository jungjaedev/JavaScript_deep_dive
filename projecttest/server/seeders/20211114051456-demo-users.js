'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert('users', [
      {
        id: 1,
        username: '이정도',
        nickname: 'jd1386',
        email: 'lee.jungdo@gmail.com',
        password: 'abc123456',
      },
      {
        id: 2,
        username: '김재완',
        nickname: 'lastrites2018',
        email: 'jaewan@gmail.com',
        password: 'abc123456',
      },
      {
        id: 3,
        username: '김성은',
        nickname: 'sunnysid3up',
        email: 'sunny@daum.net',
        password: 'abc123456',
      },
      {
        id: 4,
        username: '이주연',
        nickname: 'yyijoo',
        email: 'jooyeon@gmail.com',
        password: 'abc123456',
      },
      {
        id: 5,
        username: '구일모',
        nickname: 'johnnykoo84',
        email: 'johnny@gmail.com',
        password: 'abc123456',
      },
      {
        id: 6, 
        username: '장원진',
        nickname: 'jangwj2931',
        email: 'jang@gmail.com',
        password: 'abc123456',
      },
      {
        id: 7,
        username: '최윤우',
        nickname: 'yoonooyoonoo',
        email: 'yoonooyoonoo@naver.com',
        password: 'abc123456',
      },
      {
        id: 8,
        username: '이강인',
        nickname: 'kanginlee',
        email: 'kanginlee@hanmail.net',
        password: 'abc123456',
      },
      {
        id: 9,
        username: '박동민',
        nickname: 'dongpark',
        email: 'dongpark@naver.com',
        password: 'abc123456',
      },
      {
        id: 10,
        username: '정지수',
        nickname: 'jisoocity',
        email: 'jisoocity@naver.com',
        password: 'abc123456',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
