import { connect } from "react-redux";
import { fetchData } from "../../actions";
import { React, useEffect } from "react";
import "Movies.css";

const Movies = (props) => {
  useEffect(() => {
    props.fetchData();
  }, []);

  const list=()=>{
      return  props.movies.map((movie) => {
   return(
      <div className="item" >
      <div className="content">{movie.title? movie.title: movie.name}</div>
      <button>select</button>
    </div>);
  });
};
return (<div className="ui divided list">{list()}</div>);
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

// export default connect(null, { fetchData })(Movies);
export default connect((mapStateToProps), { fetchData })
  (Movies);
