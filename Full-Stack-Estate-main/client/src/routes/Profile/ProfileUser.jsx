import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import List from "../../components/list/List";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

function ProfileUser() {
  const [user, setUser] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading state
  const [error, setError] = useState(null); // State to track errors
  const { userId } = useParams();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Reset error state
        setError(null);
        // Fetch user data
        const userDataResponse = await apiRequest.get(`/users/${userId}`);
        setUser(userDataResponse.data);

        // Fetch user posts
        const userPostsResponse = await apiRequest.get(`/posts/user/${userId}`);
        setUserPosts(userPostsResponse.data);

        // Set loading to false after fetching data
        setLoading(false);
      } catch (error) {
        // Set error state if there's an error
        setError("Error fetching user data. Please try again later.");
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
          </div>
          <div className="info">
            {loading && <p>Loading user information...</p>}
            {error && <p>{error}</p>}
            {user && (
              <>
                <span>
                  Avatar:
                  <img src={user.avatar || "noavatar.jpg"} alt="Avatar" style={{ width: "50px", height: "50px", borderRadius: "50%" }}/>
                </span>
                <span>
                  Username: <b>{user.username}</b>
                </span>
                <span>
                  E-mail: <b>{user.email}</b>
                </span>
                <span>Rating : <Rater
                  total={5}
                  rating={0}
                  style={{ fontSize: 30, color: "yellow" }}
                /></span>
                
              </>
            )}
          </div>

          <div className="title">
            <h1>User Posts</h1>
          </div>
          <div className="userPosts">
            {loading ? (
              <p>Loading user posts...</p>
            ) : (
              <List posts={userPosts} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileUser;
