import React from 'react';
import _ from 'lodash';
// import AlbumsList from './AlbumsList';

const SearchResult = (props) => {
  const { result, setCategory, selectedCategory } = props;
  const { artists } = result;
  return (
    <React.Fragment>
      <div className='search-buttons'>
        {!_.isEmpty(artists.items) && (
          <button
            className={`${
              selectedCategory === 'artists' ? 'btn active' : 'btn'
            }`}
            onClick={() => setCategory('artists')}
          >
            Artists
          </button>
        )}
      </div>
    </React.Fragment>
  );
};
export default SearchResult;
