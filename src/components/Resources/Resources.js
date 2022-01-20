import React from 'react';
import './Resources.css';
import { Link } from 'react-router-dom';
import honeybee from '../../assets/honeybee.jpg';
import bumblebee from '../../assets/bumblebee.jpeg';
import leafcutterbee from '../../assets/leafcutterbee.jpeg';

export default function Resources() {
  return (
    <div className="resources">
      <h2 className="resources-title">Support Our Pollinators!</h2>
      <p>
        There is an incredible diversity of bee species, with ~20,000 in the world, ~4,000 in North
        America and ~500 in Oregon alone! They come in all shapes and sizes, make their homes in a
        variety of unique places and together play an integral role in the pollination of our lands.
      </p>
      <p>
        Unfortunately, due to factors such as climate change, habitat loss, rampant pesticide usage,
        human management practices, and the spread of pests and disease - our bee populations are in
        decline. Here are a few simple ways to support pollinator populations of all kinds. 🐝💛✨
      </p>
      <div className="resources-images">
        <img className="resources-image" src={honeybee} alt="honeybee" />
        <img className="resources-image" src={bumblebee} alt="bumblebee" />
        <img className="resources-image" src={leafcutterbee} alt="leafcutter bee" />
      </div>
      <ul>
        <li>
          Plant native flowers that bloom at different stages of the season (and make sure they
          haven not been treated with pesticides).
        </li>
        <li>
          Provide habitat for tunnel-nesting bees, and leave brambles and bare, sunny patches in
          your yard for ground-nesters
        </li>
        <li>
          Purchase local and organic produce to increase the demand for bee-friendly farming
          practices.
        </li>
        <li>
          Go pesticide-free! Pest-control products do not discriminate, and will kill bees alongside
          the target pest.
        </li>
        <li>
          Get involved in local citizen science efforts to help entomologist track important data on
          bee populations! Check out the{' '}
          <a href="https://www.oregonbeeproject.org/">Oregon Bee Project</a>.
        </li>
        <li>Spread the word and share your love of bees with others!</li>
      </ul>
      <button>
        <Link to={'/'}>Back to Home</Link>
      </button>
    </div>
  );
}
