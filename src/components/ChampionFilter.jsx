import { useState } from 'react';
import './ChampionFilter.css'

const ChampionFilter = ({ champions }) => {
  const roles = [/*'all',*/ 'baron', 'jungle', 'mid', 'dragon', 'support'];
  
  const [selectedRole, setSelectedRole] = useState('baron');

  const filterChampionsByRole = (tierChampions, role) => {
    // if (role === 'all') return tierChampions;
    return tierChampions.filter(champion => champion.roles.includes(role));
  };

  return (
    <div>
      <div className="role-buttons">
        {roles.map(role => (
          <button 
            key={role}
            className={`btn ${selectedRole === role ? 'active' : ''}`}
            onClick={() => setSelectedRole(role)}>
            {role}
          </button>
        ))}
      </div>

      {Object.keys(champions).map(tier => (
        <div className="container" key={tier}>
          <div className="box1">{tier.replace('_', ' ').toUpperCase()}</div>
          <div className="box2">
            {
              filterChampionsByRole(champions[tier], selectedRole).map(champion => (
                <div className="box" key={champion.name}>
                  <img src={`/champions/${champion.name}.png`} alt={champion.name} />
                </div>
              ))
            }
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChampionFilter;