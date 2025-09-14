import useFetch from "../Customhooks/useFetch";

function MusicPlayer({ artistId }) {
  const albums = useFetch(
    "http://musicapp-api-service-production.up.railway.app/albums"
  );

  const albumsFiltered = albums.filter(
    ({ artist_id }) => artist_id == artistId
  );

  return (
    <div className="music-player min-h-[66%] flex flex-col gap-2 mx-2 my-2 p-5 bg-gradient-to-r from-pink-300/40 to-pink-200/40 to-pink-100/40 overflow-scroll overflow-x-hidden rounded-md">
      <img
        className="album-cover mt-5 w-[200px] h-[200px]"
        src={albumsFiltered.map(({ album_cover }) => album_cover)}
      />
      <p className="album-info uppercase text-left">
        {albumsFiltered.map(({ title }) => title)}-
        {albumsFiltered.map(({ name }) => name)}
      </p>
      <iframe
        className="embedded-player w-full h-full mb-2"
        src={albumsFiltered.map(({ url }) => url)}
      ></iframe>
    </div>
  );
}

export default MusicPlayer;