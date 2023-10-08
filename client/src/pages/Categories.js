import React from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";
const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
      <div
        className="container"
        style={{ marginTop: "100px", backgroundColor: "rgb(241, 242, 244)" }}
      > 
      <h1 className="text-center">Categories</h1>
        <div className="row container">
          {categories.map((c) => (
            // console.log(c._id),
            <div className="col-md-4 mt-5 mb-3 gx-3 gy-3" key={c._id}>
              <div className="card bg-light bg-gradient">
                <Link
                  to={`/category/${c._id}`} 
                  // here we need to category name which is passed in params c._id
                  className="btn p-4"
                  style={{
                    background: "#fff",
                    transition: "background 0.3s",
                  }}
                  onMouseOver={(e) => (e.target.style.background = "#99aab5")}
                  onMouseOut={(e) => (e.target.style.background = "#fff")}
                >
                  {c.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;