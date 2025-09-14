import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddToLibraryPage() {
  const [name, setName] = useState(null);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState(null);
  const [album_cover, setAlbumCover] = useState(null);
  const [url, setUrl] = useState(null);

  const navigate = useNavigate();

  const createArtist = async (data) => {
    await axios.post(
      `http://musicapp-api-service-production.up.railway.app/addtolibrary`,
      data
    );
    window.location.replace("/library");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createArtist({ name, image, title, album_cover, url });
  };

  return (
    <form
      className="signup-container w-[500px] flex flex-col justify-center items-center my-20 mx-auto bg-black border-2 border-black rounded-lg"
      onSubmit={handleSubmit}
    >
      <h1 className="title text-4xl text-center uppercase p-5">
        add to library
      </h1>
      <label
        className="artist-name text-2xl text-center uppercase p-2"
        htmlFor="artist-name"
      >
        artist name
      </label>
      <input
        id="artist-name "
        name="artist-name"
        type="text"
        placeholder="artist name"
        onChange={(event) => setName(event.target.value)}
        required
      />
      <label
        className="image-url text-2xl text-center uppercase p-2"
        htmlFor="image-url"
      >
        artist image url
      </label>
      <input
        id="image-url"
        name="image-url"
        type="text"
        placeholder="artist image url"
        onChange={(event) => setImage(event.target.value)}
        required
      />
      <label
        className="album-title text-2xl text-center uppercase p-2"
        htmlFor="album-title"
      >
        album title
      </label>
      <input
        id="album-title"
        name="album-title"
        type="text"
        placeholder="album title"
        onChange={(event) => setTitle(event.target.value)}
        required
      />
      <label
        className="album-cover text-2xl text-center uppercase p-2"
        htmlFor="album-cover"
      >
        album cover url
      </label>
      <input
        id="album-cover"
        name="album-cover"
        type="text"
        placeholder="album cover url"
        onChange={(event) => setAlbumCover(event.target.value)}
        required
      />
      <label
        className="album-url text-2xl text-center uppercase p-2"
        htmlFor="album-url"
      >
        url from archive.org
      </label>
      <input
        id="album-url"
        name="album-url"
        type="text"
        placeholder="url from archive.org"
        onChange={(event) => setUrl(event.target.value)}
        required
      />
      <p className="example-url text-sm">
        Ex.https://archive.org/embed/07-warning&playlist=1&list_height=150
      </p>
      <button
        className="signup-button my-5 bg-orange-500 border-white border-2 rounded-md text-black text-2xl p-5"
        type="submit"
      >
        submit
      </button>
      <a
        className="back-to-homepage text-sm uppercase mb-5"
        onClick={() => {
          navigate("/profile");
        }}
      >
        back to hompage
      </a>
    </form>
  );
}

export default AddToLibraryPage;