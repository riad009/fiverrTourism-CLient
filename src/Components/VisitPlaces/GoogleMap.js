import React from 'react';

const GoogleMap = ({ city }) => {
  const url = city.iframe;

  return (
    <div >
      {url && (
        <div  dangerouslySetInnerHTML={{ __html: url }} />
      )}
    </div>
  );
};

export default GoogleMap;
