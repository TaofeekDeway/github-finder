import React from 'react';
import PropTypes from 'prop-types';

const Useritem = ({ user: { avatar_url, login, html_url } }) => {
  return (
    <div className='card text-center'>
      <img
        className='round-img'
        src={avatar_url}
        alt='personal'
        style={{ width: '40px' }}
      />
      <h3 className='my'>{login}</h3>
      <a href={html_url} className='btn btn-dark btn-sm my-1'>
        More
      </a>
    </div>
  );
};

Useritem.prototype = {
  user: PropTypes.object.isRequired,
};
export default Useritem;
