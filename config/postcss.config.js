import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

module.exports = ({ env }) => {
  console.log(cssnano,'222222')
  return{
    plugins: [
      autoprefixer,
      env === "production" ? cssnano : null
    ]
  }

  };
  