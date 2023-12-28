import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderNav from "./components/components/headerNav/HeaderNav";
import VideoNav from "./components/components/headerNav/videoplayer/VideoNav";
import ChannelTag from "./components/components/headerNav/channel/ChannelTag";
import Comment from "./components/components/comment/Comment";
import VideoList from "./components/components/videoList/VideoList";
import DescriptionSection from "./components/description/DescriptionSection";

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <div id="row1" style={{ display: "flex" }}>
        <div id="column1">
          <VideoNav />

          <ChannelTag />
          <DescriptionSection />
          <Comment />
        </div>

        <VideoList />
      </div>
    </div>
  );
}

export default App;
