import './Home.css';
import { useEffect, useState } from 'react';

import { fetchBees } from '../../services/bees';
import BeeCard from '../../components/BeeCard/BeeCard';

export default function Home() {
  const [bees, setBees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBees();
      setBees(data);
    };
    fetchData();
  }, []);

  return (
    <div className="home">
      <div className="bee-list">
        {bees.map((bee) => (
          <BeeCard key={bee.id} bee={bee} />
        ))}
      </div>
    </div>
  );
}
