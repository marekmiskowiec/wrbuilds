import { useState } from "react";
import "./ChampionFilter.css";

const ChampionFilter = ({ champions, folder, filter_type }) => {
  const roles = filter_type;

  const [selectedRole, setSelectedRole] = useState(filter_type[0]);

  const filterChampionsByRole = (tierChampions, role) => {
    if (role === "all") return tierChampions;
    return tierChampions.filter((champion) => champion.roles.includes(role));
  };

  return (
    <div>
      <div className="role-buttons">
        {roles.map((role) => (
          <button
            key={role}
            className={`btn ${selectedRole === role ? "active" : ""}`}
            onClick={() => setSelectedRole(role)}
          >
            {role}
          </button>
        ))}
      </div>

      {Object.keys(champions).map((tier) => (
        <div className="container" key={tier}>
          <div className="tier-box">{tier.replace("_", " ").toUpperCase()}</div>
          <div className="champion-box">
            {filterChampionsByRole(champions[tier], selectedRole).map(
              (champion) => (
                <div className="box" key={champion.name}>
                  <img
                    src={`/${folder}/${champion.name}.webp`}
                    alt={champion.name}
                  />
                </div>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChampionFilter;
