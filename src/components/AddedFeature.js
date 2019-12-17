import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../Actions/action';

const AddedFeature = props => {
  return (
    <li>
      <button className="button" onClick={() => props.removeItem(props.feature)}>-</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, { removeItem })(AddedFeature);
