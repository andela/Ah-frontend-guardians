import React, { Component } from 'react'
import { toast } from 'react-toastify';
import { connect } from 'react-redux'
import CommentForm from '../../presentational/coments/CommentForm';
import { postcommentAction } from '../../../action/actionCreator/comments/postCommentCreator'
import {getcommentAction} from '../../../action/actionCreator/comments/getCommentAction'

export class PostComment extends Component {
  constructor(props) {
      super(props)
      this.state = {
        commentstate: '',
        errors: '',
        data: '',
        body:'',
      };
  }

  componentWillReceiveProps(nextProps) {
    const { data, errors } = nextProps;
    if (errors) {
      this.setState({ errors });
    } else if (data) {
      toast.success("Comment added")
      this.setState({ errors });
      this.setState({ data });
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  componentWillUpdate(){
  }
  handleFormSubmit = (e) => {
    e.preventDefault();
    const token= window.localStorage.getItem('token');
    if (!token){
      this.setState({errors:'Must first login to comment'})
    }
    else{
      const data = {
          body: this.state.comment,
         }
  
      const slug = this.props.slug;
      this.props.postcommentAction(slug, data);
    }
    
  };

  render() {
      const { errors } = this.state;
      this.props.getcommentAction(this.props.slug)
      
    
return (

      <div >
            <CommentForm
            errors={errors}
            changed={this.handleChange}
            FormSubmit={this.handleFormSubmit}
            />
      </div>
    )
  }
}

export const mapStateToProps = (state) => {
      return {
        data: state.commentsReducer.data,
        errors: state.commentsReducer.errors,
        }
    }

export default connect(mapStateToProps, { postcommentAction, getcommentAction })(PostComment)
getcommentAction