const mockSweet = jest.genMockFromModule('sweetalert')

mockSweet.create = jest.fn(() => mockSweet)

export default mockSweet
