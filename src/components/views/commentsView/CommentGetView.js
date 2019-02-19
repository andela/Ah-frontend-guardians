import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentReplyForm from "./CommentReplyForm";
import { getcommentAction } from '../../../action/actionCreator/getCommentAction'

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

    console.log(this.props, slug, "PPPPPPPPPPP");
    this.props.getcommentAction(slug);
  }

  componentWillReceiveProps(nextProps) {
    const { comment } = nextProps;

    console.log(this.props, "iiiiiiiiiiiiiiiiiiiiiiii");
  }

  render() {
console.log('=============>', this.props.comments)

const comments = this.props.comments.map((comment) => (
    <div id = "getCommentdiv">
    <p key={comment.id} id = "getCommentId">{comment.author}&nbsp;&nbsp;&nbsp;&nbsp;{comment.body}
    <p id = "reply_comment"><a href='#'>Reply</a></p>
    </p>
    </div>
  ))

      
return (
      <div >
        <div>{comments.length < 1 ? <p>No comments</p>:comments}</div>
            <CommentReplyForm
            data={this.data}
            changed={this.handleChange}
            FormSubmit={this.handleFormSubmit}
            />
      </div>
    )
  }
}

const mapStatetoProps = (state) => ({
    comments: state.getarticlecomments.data,
   
   })


export default connect(mapStatetoProps, { getcommentAction })(GetComments)
