import React from 'react';
import './Explore.css';

const Explore = props => {
  return (
    <div id="antique-backdrop-image">
      <div className="explore">
        <div className="explore-tc">
          <h2>Why TravelComplete?</h2>
          <h3>All your travel needs in one spot!!</h3>
          <div className="explore-list">
            <ul className="explore-list">
              <li>Make a list to pack for your trip.</li>
              <li>
                Plan your trip:
                <ul className="indented-list">
                  <li> Places to visit.</li>
                  <li>
                    {' '}
                    Add notes about your trip - flight,car rentals etc...
                  </li>
                  <li> List to pack for wonderful trip.</li>
                  <li> See all your travel plans in a single page.</li>
                  <li> Check weather.</li>
                </ul>
              </li>
              <li>
                Features reserved for future releases:
                <ul className="indented-list">
                  <li>Update travel plan with feedback</li>
                  <li>Shortest time to travel between loactions.</li>
                  <li>Print and share travel plan with friends and family.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="map-image">
          <img
            className="sample-map"
            src="https://cdn-images-1.medium.com/max/1600/1*Unvs2uoCWC3MxwGn3z0Hqw.png"
            alt="sampleMap"
          />
        </div>
      </div>
    </div>
  );
};

export default Explore;
