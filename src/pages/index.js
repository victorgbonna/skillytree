import MainContent from "../components/mainContent";
import Nav from "../components/nav";
import RightSideBar from "../components/rightSideBar";

export default function Home() {
  
  return (
    <div className='container'>
        <Nav/>
        <div className="gridContainer">
          <MainContent/>
          <RightSideBar/>
        </div>
    </div>
  )
}
