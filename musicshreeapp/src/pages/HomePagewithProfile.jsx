import SideBar from "../Components/SideBar";
import Header from "../Components/Header";
import useFetch from "../Customhooks/useFetch";
import { auth, firebaseDB } from "../config/firebase.js";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePagewithProfile() {
  const [artistId, setArtistId] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [userDetail, setUserDetail] = useState(null);

  const navigate = useNavigate();

  const artists = useFetch(
    `http://musicapp-api-service-production.up.railway.app/artists?name=${searchText}`,
    searchText
  );

  const getUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      const docRef = doc(firebaseDB, "users", user.uid);
      const docGet = await getDoc(docRef);
      if (docGet.exists()) {
        const result = docGet.data();
        setUserDetail(`Hello! ${result.username}`);
      }
    });
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handleLogout = async () => {
    try {
      auth.signOut();
      navigate("/");
      alert("LOG OUT SUCCESSFULLY");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    setSearchText(event.target.value);
  };

  const handleUserClick = () => {
    navigate("/profile");
  };

  const handleLibraryClick = () => {
    navigate("/library");
  };

  return (
    <main className="flex flex-row">
      <SideBar
        firstOption={userDetail}
        secondOption="log out"
        handleFirstOption={handleUserClick}
        handleSecondOption={handleLogout}
        artistId={artistId}
      />
      <div className="main-container w-[60%] h-screen">
        <Header
          libraryOptionClick={handleLibraryClick}
          libraryOption="library"
          onChange={handleChange}
          value={searchText}
        />
        <div className="mainContent-container bg-gradient-to-r from-pink-300/40 to-pink-200/40 to-pink-100/40 h-[85%] overflow-scroll overflow-x-hidden rounded-md">
          <h1 className="title text-4xl text-black mx-28 my-5">ARTISTS</h1>
          <div className="artist-card-list flex flex-wrap justify-center px-16">
            {artists.map(({ name, image, artist_id }) => {
              return (
                <div
                  className="artist-card flex flex-col items-center gap-2 p-5"
                  key={artist_id}
                >
                  <button
                    className="cursor-pointer"
                    onClick={() => setArtistId(artist_id)}
                  >
                    <img
                      className="artist-img w-[150px] h-[150px] rounded-full"
                      src={image}
                    />
                  </button>
                  <p className="uppercase">{name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePagewithProfile;