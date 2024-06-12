const request = require('supertest');
const express = require('express');
const app = require('./index.js')

describe('GET /', () => {
  it('responds with Hola, Mundo Soy Key !3', (done) => {
    request(app)
      .get('/api/v1/welcome')
      .expect(200)
      .expect('Hola, Mundo Soy Key !3', done);
  });
});