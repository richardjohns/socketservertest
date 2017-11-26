const request = require('supertest')

jest.mock('../../src/db/videos', () => ({
  getVideos: () =>
    Promise.resolve([
      { id: 1, text: "test text 1" },
      { id: 2, text: "test text 2" }
    ])
}));

const server = require('../../src/server')

test('GET /round', () => {
  return request(server)
    .get('/api/v1/videos')
    .expect(200)
    .then(res => {
      // console.log(res)
      expect(res.body.length).toBe(2)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})
