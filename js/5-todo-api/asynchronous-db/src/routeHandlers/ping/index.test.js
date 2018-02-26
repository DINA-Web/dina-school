const { getPingResponse, handlePing } = require('./index')

describe('routeHandlers/ping', () => {
  describe('getPingResponse', () => {
    it('returns pong', () => {
      const testValue = getPingResponse()
      const expectedResult = 'pong'

      expect(testValue).toEqual(expectedResult)
    })
  })

  describe('handlePing', () => {
    it('calls res.send with pong', () => {
      const sendSpy = jest.fn()
      const mockReq = { url: '/ping' }
      const mockRes = { send: sendSpy }

      handlePing(mockReq, mockRes)

      expect(sendSpy.mock.calls.length).toEqual(1)
      expect(sendSpy.mock.calls[0][0]).toEqual('pong')
    })
  })
})
