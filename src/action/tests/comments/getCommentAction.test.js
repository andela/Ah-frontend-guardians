import axios from "axios";
import moxios from "moxios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import MockAdapter from "axios-mock-adapter";
import * as actions from "../../actionCreator/comments/getCommentAction";
import COMMENTS from '../../actionType/commentType'


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

 describe("comment thunk actions", () => {
    const mockAdapter = new MockAdapter(axios);
    const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));
    const store = mockStore({ data: {} });

    beforeEach(() => {
      moxios.install();
    });

    afterEach(() => {
      moxios.uninstall();
    });

    it("should GET_COMMENTS_SUCCESFULLY", () => {
      moxios.stubRequest('https://ah-backend-guardians-staging.herokuapp.com/api/the_moon/comments/', {
        status: 200,
        responseText: {
          user: {
            token: "123456trgeqgaf",
          },
        },
      });

      const expectedActions = [
       {
          type: COMMENTS.GET_COMMENT,
          commentdata: {
            user: {
              token: "123456trgeqgaf",
            },
          },
        },
      ];

      store
        .dispatch(
          actions.getcommentAction(
            {
              body: "What a wonderful aeticle",
            },
            'https://ah-backend-guardians-staging.herokuapp.com/api/the_moon/comments/1',
          ),
        )
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
 });