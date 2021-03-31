import React, { useEffect } from "react";

import CircularProgress from "@material-ui/core/CircularProgress";

import { useDispatch, useSelector } from "react-redux";

import { fetch_videos } from "../../redux/actions";

import VideosContainer from "../../components/VideosContainer";

const SearchPage = (history) => {

  const { searchTerm } = history.match.params;
  const { videos, loading } = useSelector((state) => state.videos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_videos(searchTerm));
  }, [dispatch, searchTerm]);


  const renderVideosSearched = () => {
    return loading
      ? <CircularProgress size="6rem" />
      : <VideosContainer
        titlePage={`Videos related with ${searchTerm}`}
        videosData={videos}
      />
  }

  return (
    <section className="section container">
      {renderVideosSearched()}
    </section>
  );
};

export default SearchPage;
