import React from 'react';

export default function EditRating({ onSubmit }) {
  return (
    <div>
      <form
        onSubmit={onSubmit}
        className="form-horizontal"
        role="form"
        id="editRating"
      >
        <input className="btn btn-default" type="submit" value="Save" />
      </form>
    </div>
  );
}
