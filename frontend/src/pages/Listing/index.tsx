
import MovieCard from "componets/MovieCard";
import Pagination from "componets/Pagination";

import './style.css';

function Listing() {

    return (
        <>
        <Pagination />
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <MovieCard />
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-6">
                    <MovieCard />
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-6">
                    <MovieCard />
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-6">
                    <MovieCard />
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-6">
                    <MovieCard />
                </div>
            </div>
        
        </div>
       
        </>
        
    )
}

export default Listing;