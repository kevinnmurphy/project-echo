import React from 'react';

const playlistURL = '565ijKKAnZ5hsAemTZgEPK?j=';

export default function Iframe() {
  const iframe = `<iframe src="https://open.spotify.com/embed/playlist/${playlistURL}" style="border: 0; width: 100%; height: 380px;" allowfullscreen allow="encrypted-media"></iframe>`;

  const innerText = { __html: iframe ? iframe : '' };

  return (
    <div>
      <div className='iframe' dangerouslySetInnerHTML={innerText} />
    </div>
  );
}
