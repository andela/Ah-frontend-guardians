import React, { Component } from 'react'
import { toast } from 'react-toastify';
import { connect } from 'react-redux'
import CommentForm from './CommentForm';
import { postcommentAction } from '../../../action/actionCreator/commentActions'

export class CommentsList extends Component {
  constructor(props) {
      super(props)
      this.state = {
        commentstate: '',
        errors: '',
        data: '',
      };
  }

  componentWillReceiveProps(nextProps) {
    const { data, errors } = nextProps;
    console.log(data, "Efffffffffffffps");

    if (errors) {
      console.log(errors, "Errorsnextprops");
      this.setState({ errors });
    } else if (data) {
      toast.success("Comment added")
      // this.props.history.push('/');
      this.setState({ errors });
      console.log(data, "Datanextprops");
      this.setState({ data });
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const token = window.localStorage.getItem('token');
    console.log(token, ".............token");
    
    if (!token){
      this.setState({errors:'Must first login to comment'})
    }
    else{
      console.log(this.props, "Comment state");
      const data = {
          body: this.state.comment,
         }
  
      const slug = this.props.slug;
      this.props.postcommentAction(slug, data);
    }
    
  };

  render() {
      const { errors } = this.state;

    
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
  console.log(state.commentarticle.data, "SUCCCCCC");
  console.log(state.commentarticle.errors, "ERRORRRRRRR");

      return {
        data: state.commentarticle.data,
        errors: state.commentarticle.errors,
        }
    }

export default connect(mapStateToProps, { postcommentAction })(CommentsList)
