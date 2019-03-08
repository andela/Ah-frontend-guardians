import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentReplyForm from "../../presentational/coments/CommentReplyForm";
import { getcommentAction } from '../../../action/actionCreator/comments/getCommentAction'
import {updateCommentAction} from '../../../action/actionCreator/comments/updateComment'
import {deleteCommentAction} from '../../../action/actionCreator/comments/deleteCommentAction';

import swal from "sweetalert";


export class GetComments extends Component {
  constructor(props) {
      super(props)
      this.state = {
        commentstate: '',
        errors: '',
        data: '',
        slug: '',
      };
  }

  componentDidMount() {
    const slug = this.props.slug;
    this.props.getcommentAction(slug);
  }

  componentWillReceiveProps(nextProps) {
    const {updateComment, deleteComment} = nextProps
    if (updateComment){
      this.setState({updateComment:updateComment})
    }
    if (deleteComment){
      this.setState({deleteComment:deleteComment})
    }
  }

  onChange(e) {
    this.setState({
      commentstate: e.target.value
    })
  }

  onSubmit=(e) => {
    e.preventDefault() 
    const data = {
      body: this.state.commentstate,
     }
  const slug = this.props.slug;
  const commentId = e.target.id
  this.props.updateCommentAction(slug, data, commentId);
  }

  handleDelete = (e) => {
  const slug = this.props.slug;
  const commentId = e.target.id
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be to recover this comment!",
    icon: "warning",
    buttons: true,
    dangerMode: true
  }).then((willDelete) => {
    if (willDelete) {
      this.props.deleteCommentAction(slug, commentId)
    }
  });
  }

  render() {
const username= window.localStorage.getItem('username') 

const comments = this.props.comments.map((comment) => (
  <div key={comment.id} id = "getCommentdiv">
    <p id = "getCommentId">
      <i className="fas fa-user fa-2x icon_color"/>
      <span id="spanId">
        {comment.author.username}
      </span><br/>
      <label>
        <font color="black">{comment.body}</font>
      </label>
    </p>
    {(comment.author.username == username) ?
    <div className="editDiv">
      <a className="editLink" data-toggle="collapse" href={"#collapseExample3"+comment.id} role="button" aria-expanded="false" aria-controls="collapseExample2">
        Edit
      </a>
      <a href="#" onClick={this.handleDelete} id={comment.id} className="deleteLink">
        Delete
      </a>
    </div> : ''}
    <div className="collapse" id={'collapseExample3'+comment.id} >
      <form onSubmit={this.onSubmit.bind(this)} id={comment.id}>
        <textarea className="editComment" id={comment.id} name = "comment" onChange={this.onChange.bind(this)} defaultValue={comment.body}/>
        <input type = "submit"className="comment_update_button" value="Save" />
      </form>
    </div>
  </div>
  ))
      
return (
      <div >
        <div>{comments.length < 1 ? <p>No comments</p>:comments}</div>
            <CommentReplyForm
            />
      </div>
    )
  }
}

const mapStatetoProps = (state) => ({
    comments: state.getarticlecomments.data,
    updateComment: state.updatecomments,
    deleteComment: state.deleteCommentAction,
   })

export default connect(mapStatetoProps, { getcommentAction, updateCommentAction, deleteCommentAction})(GetComments)
