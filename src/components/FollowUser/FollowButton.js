import React from 'react';

const FollowButton = (props) => {
  const { handleClick } = props;
  const { text } = props;
  const { classValue } = props;
  const { canFollow } = props;

  if(!canFollow){
    return(
      <button
        type="button"
        className={classValue}
        onClick={handleClick}
      >
        {text}
      </button>
    )
  }else{
    return <div />
  }

}
export default FollowButton;
