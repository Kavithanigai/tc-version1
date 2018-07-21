import React from 'react';
import './Explore.css';

const Explore = (props) => {
  return(
    <div id="antique-backdrop-image">
    <div className='explore'>

      <div className='explore-tc'>
        <h2>Why TravelComplete?</h2>
        <h3>All your travel needs in one spot!!</h3>
        <p className='explore-list'>
        <ul >
          <li>Make a list to pack for your trip.</li>
          <li>Plan your trip, places to visit and see visuals on map.</li>
          <li>See all your travel plans in a single page to print and share it with your friends and family.</li>
          <li>Once you are back from your trip, add your travel journal entry with pictures.</li>
          <li>Find the route that takes the shortest time for your travel needs(Reserved for future release).</li>
        </ul>
        </p>
      </div>

      <div className='map-image'>
        <img className='sample-map' src="https://cdn-images-1.medium.com/max/1600/1*Unvs2uoCWC3MxwGn3z0Hqw.png" alt="sampleMap"/>
      </div>
    </div>
    </div>
  );
}

export default Explore;
