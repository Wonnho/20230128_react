import ContentList from "../home/ContentList";

const filters = {
  trending: [
    { id: 1, text: "movie", active: true, url: "/trending/movie/week" },
    { id: 2, text: "tv", active: false, url: "/trending/tv/week" },
 //   { id: 3, text: "people", active: false, url: "/trending/person/week" },
  ],
popular:[
  { id: 1, text: "movie", active: true, url: "/movie/popular" },
  { id: 2, text: "tv", active: false, url: "/tv/popular" },
]

};

function Home() {
  return (
    <div>
      <ContentList title="Trends" initalState={filters.trending} />
      <ContentList title="popularity" initalState={filters.popular} />
    </div>
  );
}

export default Home;
