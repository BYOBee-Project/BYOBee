import React from 'react';
import './About.css';
import emma from '../../assets/emma.jpeg';
import bumblebee from '../../assets/bumblebee.jpeg';
import michelle from '../../assets/michelle.jpg';
import zach from '../../assets/zachphoto.jpg';

export default function About() {
  return (
    <div>
      <h1>About The Hive</h1>
      <div className="bios">
        <div className="bio-card">
          <h3>Adria Ivanitsky</h3>
          <img src={bumblebee} />
          <p>
            Adria is a web developer in portland, OR. she loves to playing soccer, making music, and
            being annoying in the zoom chat. also bees
          </p>
        </div>
        <div className="bio-card">
          <h3>Emma Egstad</h3>
          <img src={emma} />
          <p>
            Emma is a web developer in Portland, OR. She loves each and every bee, but especially
            super fuzzy digger bees. In addition to bees, Emma loves CSS, array methods, and weekly
            builds (just kidding).
          </p>
        </div>
        <div className="bio-card">
          <h3>Michelle Nygren</h3>
          <img src={michelle} />
          <p>
            Michelle is a web developer in Portland, OR. She loves making things from beeswax
            (thanks, honeybees!), and using honey in her baking. In addition to bees, Michelle loves
            keeping Julie on her toes with her hand raised in class.
          </p>
        </div>
        <div className="bio-card">
          <h3>Zachary Caldwell</h3>
          <img src={zach} />
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
