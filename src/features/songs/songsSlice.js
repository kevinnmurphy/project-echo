// import React, { useEffect, useState } from 'react';

// const songsSlice = () => {
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [songs, setSongs] = useState([]);

//   useEffect(() => {
//     fetch('https://api.example.com/songs')
//       .then((res) => res.json())
//       .then(
//         (result) => {
//           setIsLoaded(true);
//           setSongs(result.songs);
//         },
//         (error) => {
//           setIsLoaded(true);
//           setError(error);
//         }
//       );
//   }, []);

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   } else if (!isLoaded) {
//     return <div>Loading...</div>;
//   } else {
//     return (
//       <ul>
//         {songs.map((song) => (
//           <li key={song.name}>
//             {song.name} {song.price}
//           </li>
//         ))}
//       </ul>
//     );
//   }
// };

// export default songsSlice;
