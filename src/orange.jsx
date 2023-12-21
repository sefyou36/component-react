

/* eslint-disable react/prop-types */
const Orange = ({ number, color }) => {
    return (
      <div>
        <h2>Hello from 🍊</h2>
        <p style={{backgroundColor:color}}>I have {number} 🍊</p>
      </div>
    );
  };

  export default Orange;