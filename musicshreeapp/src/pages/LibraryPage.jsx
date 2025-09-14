import axios from "axios";
import useFetch from "../Customhooks/useFetch";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import UpdateAlbumModal from "../Components/UpdateAlbumModal";

function LibraryPage() {
  const [url, setUrl] = useState(null);
  const [title, setTitle] = useState(null);
  const [album_cover, setAlbumCover] = useState(null);
  const [artistId, setArtistId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const data = useFetch(
    `http://musicapp-api-service-production.up.railway.app/library`
  );

  const navigate = useNavigate();

  const deleteArtist = async (artistId) => {
    await axios.delete(
      `http://musicapp-api-service-production.up.railway.app/library/${artistId}`
    );
    window.location.reload();
  };

  const updateAlbumUrl = async (artistId, data) => {
    await axios.put(
      `http://musicapp-api-service-production.up.railway.app/library/${artistId}`,
      data
    );
    window.location.reload();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateAlbumUrl(artistId, { title, album_cover, url });
  };

  return (
    <main>
      <header className="header flex flex-row justify-between uppercase text-4xl  text-black p-5 bg-gradient-to-r from-pink-300/40 to-pink-200/40 to-pink-100/40">
        <h1>
          library{" "}
          <a
            className="back-to-homepage text-orange-700 text-lg"
            onClick={() => {
              navigate("/profile");
            }}
          >
            back to homepage
          </a>
        </h1>
        <a
          onClick={() => {
            navigate("/addtolibrary");
          }}
        >
          add to library
        </a>
      </header>
      <div className="artist-list  flex flex-wrap justify-center gap-10 p-20">
        {data.map((item) => {
          return (
            <div
              className="artist-card flex flex-col items-center gap-5"
              key={item.artist_id}
            >
              <div className="flex flex-row items-center">
                {" "}
                <p className="artist-name text-black/80 uppercase">
                  {item.name}
                </p>
                <button
                  className="delete-button relative left-5 text-red-600"
                  onClick={() => {
                    deleteArtist(item.artist_id);
                  }}
                >
                  x
                </button>
              </div>
              <img
                className="w-[150px] h-[150px] rounded-full"
                src={item.image}
              />
              <button
                className="update-button bg-black p-2 text-sm uppercase rounded-md"
                onClick={() => {
                  toggleModal();
                  setArtistId(item.artist_id);
                }}
              >
                change your favorite album
              </button>
              <UpdateAlbumModal show={showModal} handleClose={toggleModal}>
                <h2 className="text-xl uppercase mb-4">
                  update your favorite album for this artist
                </h2>
                <form
                  className="update-album-url flex flex-col gap-2"
                  onSubmit={handleSubmit}
                >
                  <label
                    className="album-url text-md text-center uppercase p-2"
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
                    className="album-url text-md text-center uppercase p-2"
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
                    className="album-url text-md text-center uppercase p-2"
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
                    className="signup-button my-5 bg-orange-500 rounded-md text-black text-2xl p-5"
                    type="submit"
                  >
                    submit
                  </button>
                </form>
              </UpdateAlbumModal>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default LibraryPage;