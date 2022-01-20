import React from 'react';
import './About.css';
import emma from '../../assets/emma.jpeg';
import michelle from '../../assets/michelle.jpg';
import zach from '../../assets/zachphoto.jpg';
import adria from '../../assets/linkedin.jpeg';

export default function About() {
  return (
    <div className="about">
      <h1 className="about-title">About The Hive</h1>
      <div className="about-bios">
        <div className="about-bio-card">
          <h3 className="about-bio-card-title">Adria Ivanitsky</h3>
          <img className="about-bio-card-image" src={adria} />
          <p>
            Adria is a web developer in Portland, OR. She loves playing soccer, making music, and
            being annoying in the Zoom chat. Also... bees.
          </p>
        </div>
        <div className="about-bio-card">
          <h3 className="about-bio-card-title">Emma Egstad</h3>
          <img className="about-bio-card-image" src={emma} />
          <p>
            Emma is a web developer in Portland, OR. She loves each and every bee, but especially
            super fuzzy digger bees. In addition to bees, Emma loves CSS, array methods, and weekly
            builds (just kidding).
          </p>
        </div>
        <div className="about-bio-card">
          <h3 className="about-bio-card-title">Michelle Nygren</h3>
          <img className="about-bio-card-image" src={michelle} />
          <p>
            Michelle is a web developer in Portland, OR. She loves making things from beeswax
            (thanks, honeybees!), and using honey in her baking. In addition to bees, Michelle loves
            keeping Julie on her toes with her hand raised in class.
          </p>
        </div>
        <div className="about-bio-card">
          <h3 className="about-bio-card-title">Zachary Caldwell</h3>
          <img className="about-bio-card-image" src={zach} />
          <p>
            Zach is a web developer in Portland, OR. He loves foraging for mushrooms with his dog.
            Zach loves when he forgets he is not muted and burps loudly over zoom. He loves when
            projects dont have CSS in the grading rubric.
          </p>
        </div>
      </div>
    </div>
  );
}
