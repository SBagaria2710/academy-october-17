import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

function About() {
  return <h2>About page</h2>;
}

function Home() {
  useEffect(() => {
    console.log("Mounting");
    return () => {
      console.log("Unmounting");
    };
  }, []);
  return (
    <div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/listing">Listing</Link>
        </li>
      </ul>
      <h2>Home page</h2>
    </div>
  );
}

function Listing() {
  return <h2>Listing page</h2>;
}

function ListItem() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/productssss/${productId}`)
      .then((res) => res.json())
      .then((json) => {
        setIsLoaded(true);
        setData(json);
      })
      .catch(() => {
        console.log("Here");
        setIsError(true);
      });
  }, []);

  if (isLoaded) {
    return <h2>Listing page for {data.category}</h2>;
  } else if (isError) {
    return <Navigate to={"/home"} />;
  } else {
    return <h2>Loading...</h2>;
  }
}

function UserProfile() {
  return <h2>User Profile Page</h2>;
}

function FourOFour() {
  return <h2>Oops, something went wrong. Check back in sometime.</h2>;
}

export { About, Home, ListItem, Listing, UserProfile, FourOFour };
