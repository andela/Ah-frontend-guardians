import axios from "axios";
import moxios from "moxios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import MockAdapter from "axios-mock-adapter";
import * as actions from "../../actionCreator/comments/postCommentCreator";
import COMMENTS from '../../actionType/commentType'


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


  describe("comment actions", () => {
    it("should handle successfull comments", () => {
        const expectedAction = {
            type: 'POST_COMMENT',
            comments: { comments: { body: 'Nice article' } },
          }

        actions.type = "COMMENTS.POST_COMMENT";

        expect(
                actions.postCommentSuccessfully({ comments: { body: "Nice article" } }),
          ).toEqual(expectedAction);
            });
          });


describe('create comment failure', () => {
  const commentsFail = COMMENTS.COMMENTS_ERRORS

    it('should create an unsuccessful create user login action', () => {
       const error = { eror: 'This field is required' };
        const expectedAction = {
           type: commentsFail,
            error,
       };

        expect(actions.postCommentFail(error)).toEqual(expectedAction)
    })
  })


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

    it("should COMMENT_SUCCESFULLY", () => {
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
          type: COMMENTS.POST_COMMENT,
          commentdata: {
            user: {
              token: "123456trgeqgaf",
            },
          },
        },
      ];

      store
        .dispatch(
          actions.postcommentAction(
            {
              body: "What a wonderful aeticle",
            },
            'https://ah-backend-guardians-staging.herokuapp.com/api/the_moon/comments/',
          ),
        )
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it("should handle post comments", () => {
      moxios.stubRequest('https://ah-backend-guardians-staging.herokuapp.com/api/the_moon/comments/', {
        status: 400,
        responseText: {
          error: {
            token: "123456trgeqgaf",
          },
        },
        data:{}
      });

      const expectedActions = [
        {
          type: COMMENTS.COMMENTS_ERRORS,
          payload: {
            user: {
              token: "123456trgeqgaf",
            },
          },
        },
      ];
      store
        .dispatch(
          actions.postcommentAction(
            {
              body: "This field is required",
            },
            'https://ah-backend-guardians-staging.herokuapp.com/api/the_moon/comments/',
          ),
        ).then(() => {
          expect(store.getActions()).toEqual('');
        });
   });
 });