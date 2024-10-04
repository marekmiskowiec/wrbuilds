import { useState } from "react";
import "./SearchFilter.css";

export default function SearchChampions({ allChampions }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredChampions = allChampions.filter((champion) =>
    champion.frontmatter.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search champions"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="container">
        {filteredChampions.length > 0 ? (
          filteredChampions.map((champion) => (
            <a href={"/champions/" + champion.frontmatter.title}>
              <div className="box">
                <div className="champion-image">
                  <img
                    src={`/champions/${champion.frontmatter.image}`}
                    alt={champion.frontmatter.title}
                  />
                </div>
                <div className="champion-name">
                  {champion.frontmatter.title}
                </div>
              </div>
            </a>
          ))
        ) : (
          <p>No champions found</p>
        )}
      </div>
    </div>
  );
}
