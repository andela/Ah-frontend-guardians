import axios from "axios";
import swal from "sweetalert";
import { toast } from "react-toastify";
import { token, BASE_URL } from "../index";
import {
  DELETE_ARTICLE_SUCCESS,
  MY_ARTICLES_SUCCESS,
  EDIT_ARTICLE_SUCCESS,
  SEARCH_ARTICLE
} from "./types";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

export const myArticles = () => dispatch =>
  axios
    .get(`${BASE_URL}articles/my_articles/`, { headers: headers })
    .then(res => {
      dispatch({
        type: MY_ARTICLES_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));

export const deleteArticle = slug => dispatch =>
  axios
    .delete(`${BASE_URL}articles/${slug}/`, { headers: headers })
    .then(res => {
      dispatch({
        type: DELETE_ARTICLE_SUCCESS,
        payload: res.data,
        slug: slug
      });
      toast.success("Article Deleted");
    })
    .catch(err => console.log(err));

export const editArticle = (slug, payload) => dispatch => {
  axios
    .put(`${BASE_URL}articles/${slug}/`, payload, { headers: headers })
    .then(res => {
      dispatch({
        type: EDIT_ARTICLE_SUCCESS,
        payload: res.data,
        slug: slug
      });
      toast.success("Article Edited");
    })
    .catch(err => {
      let text = "";
      console.log(err)
      text += err.response.data.errors.description
        ? "\nDescription: " + err.response.data.errors.description
        : "";
      text += err.response.data.errors.title
        ? "\n\nTitle: " + err.response.data.errors.title
        : "";
      swal({
        title: "Wrong Input",
        text: text,
        icon: "warning"
      });
    });
};


export const filterArticle = param => dispatch => {
  const headers = {
      'Content-type': 'application/json'
    };
  axios
    .get(`${BASE_URL}articles/?search=${param}`, { headers: headers })
    .then(response => {
      dispatch({
        type: SEARCH_ARTICLE,
        payload: response.data.articles.results
      });
     const newData =  response.data.articles.results
     if(newData.length === 0){
      toast.error('No matches found')
     }
     
    });
};

