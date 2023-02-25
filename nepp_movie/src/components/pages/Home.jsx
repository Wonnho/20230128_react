import ContentList from "../home/ContentList";

const filters={
    trending:[
        {id:1,text:"movie", active:true},
        {id:2,text:"tv", active:false},
        {id:3,text:"people", active:false},
        
        
    ]
}

function Home() {
  return (
    <div>
      <ContentList title="트렌딩" initalState={filters.trending} />
    </div>
  );
}

export default Home;
