import React from 'react';


const CommentForm = (props) => {

  return (
    <div>
        <form onSubmit={props.FormSubmit} id="comment_form_container">
          <p id="wrong_input"> {props.errors ? props.errors : '' }</p>
          <div id="comment_form">
            <textarea placeholder = "Comment..." name = "comment" id ="comment" onChange={props.changed} />
            <button type="submit" className="comment_button">Comment</button>
          </div>
        </form>
    </div>

  );
};

export default CommentForm;
