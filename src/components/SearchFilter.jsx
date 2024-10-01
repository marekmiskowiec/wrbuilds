import { useState } from "react";

export default function SearchChampions({ allChampions }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredChampions = allChampions.filter((champion) =>
    champion.frontmatter.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div class="search-bar">
        <input
          type="text"
          placeholder="Search champions"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div class="container">
        {filteredChampions.length > 0 ? (
          filteredChampions.map((champion) => (
            <a href={"/champions/" + champion.frontmatter.title}>
              <div class="box">
                <div class="champion-image">
                  <img
                    src={`/champions/${champion.frontmatter.title}.webp`}
                    alt={champion.frontmatter.title}
                  />
                </div>
                <div class="champion-name">{champion.frontmatter.title}</div>
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
