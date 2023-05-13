import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import {getNewsItems} from '../store/actions/index';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Masonry from "react-masonry-css";
// useSelector-bring data from store
// useDispatch-request Action to store
const Home=()=> {
const newsItems=useSelector((state)=>
    state.news
)
console.log(newsItems)
const dispatch=useDispatch();
useEffect(()=>{
    dispatch(getNewsItems())
},[dispatch])

  return (
    <React.Fragment>
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {newsItems.news
          ? newsItems.news.news.map((item) => (
              <div key={item._id}>
                <img
                  src="https://picsum.photos/700"
                  alt=""
                  style={{ width: "100%", height: "250px" }}
                />
                <div className="author">
                  <span>Jharana</span>
                  <span>{item.author}</span>
                </div>
                <div className="content">
                  <div className="title">{item.title}</div>
                  <div className="excerpt">{item.body}</div>
                  <LinkContainer to={`/news/${item._id}`}>
                    <Button variant="light" className="mt-3">
                      Read More
                    </Button>
                  </LinkContainer>
                </div>
              </div>
            ))
          : null}
      </Masonry>
    </React.Fragment>
  );
}

export default Home