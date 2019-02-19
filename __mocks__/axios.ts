const mockAxios = jest.genMockFromModule('axios')
<<<<<<< HEAD

mockAxios.create = jest.fn(() => mockAxios)

export default mockAxios
=======
mockAxios.create = jest.fn(() => mockAxios)
export default mockAxios
>>>>>>> feat(CreateArticle): implement create article functionality
