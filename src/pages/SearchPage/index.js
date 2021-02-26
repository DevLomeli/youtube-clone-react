import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetch_videos } from "../../redux/actions";

import VideosContainer from "../../components/VideosContainer";

const SearchPage = (history) => {
  const { searchTerm } = history.match.params;
  const { videos } = useSelector((state) => state.videos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_videos(searchTerm));
  }, [dispatch, searchTerm]);
  return (
    <section className="container">
      <VideosContainer
        titlePage={`Videos related with ${searchTerm}`}
        videosData={videos}
      />
    </section>
  );
};

export default SearchPage;
