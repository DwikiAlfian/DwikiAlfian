import HeaderBar from "./components/bar/HeaderBar";
import Header from "./components/header/Header";
import List from "./components/list/List";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Helmet } from "react-helmet";

const TheApp = () => {
  return (
    <>
      <Helmet>
        <title>dwikialfian - Definition & Meaning</title>
      </Helmet>
      <HeaderBar />
      <div className="vw vh flex-center">
        <div className="max-width-small flex-column gap-20 p-25 m-t-25">
          <Header name={"dwikialfian"} nameSplit={"/dwi.ki.al.fi.an/"} />
          <div className="flex-column gap-20">
            <List
              title={"noun"}
              array={[
                {
                  title: "a self-taught software developer",
                },
                {
                  title: "mainly focused on front-end web development",
                },
              ]}
            />
            <List
              title={"expertise"}
              array={[
                {
                  title: "html - css",
                  sub: "able to do some ui designing",
                },
                {
                  title: "javascript",
                  sub: "able to work with react project",
                },
              ]}
              headNumber={"1"}
            />
            <List
              title={"projects"}
              array={[
                {
                  title: "electron-videoplayer",
                  sub: "free and open-source video player that build using electron-boilerplate",
                  github: "https://github.com/DwikiAlfian/video-player",
                  download:
                    "https://drive.google.com/file/d/1wXwVpJT7cq0SGp11T67Cf-74K3TRbjuk/view?usp=share_link",
                },
                {
                  title: "electron-libraryapp",
                  sub: "free and open-source library app that build using electron-boilerplate",
                  github: "https://github.com/DwikiAlfian/perpustron",
                  download:
                    "https://drive.google.com/file/d/1t7vDuCpSE9cMVgaEIb9cK2wF7yhffWqN/view?usp=share_link",
                },
              ]}
              headNumber={"2"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<TheApp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
