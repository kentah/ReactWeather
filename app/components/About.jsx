var React = require('react');


var About = (props) => {
  return (
    <div>
      <h1 className='text-center page-title'>About</h1>
      <p>This is a weather application built with React. I have built This
      for The Complete React Web App Course.
    </p>
    <p>
      Here are some of the tools I've used:
    </p>
    <ul>
      <li>
        <a href='https://facebook.github.io/react'>React</a> - This is the
          JavaScript framework used.
      </li>
      <li>
        <a href='http://openweathermap.org'>Open Weather Map</a> - This is
          what I've used to retrieve weather.
      </li>
    </ul>
    </div>
  )
};

module.exports = About;
