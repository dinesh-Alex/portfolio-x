import ui from "../components/ui.jpg"
import webdes from "../components/webdesign.jpg"
import appdesign from "../components/appdesign.jpg"
import "../components/mediaq.css"
function serv() {
  return (
    <div>
       <h2 id="heading">Services</h2>
      <div className="s-container">
        <div className="s-item">
          <p>SAP EWM Implementation & Rollout</p>
            <img src={ui} alt="" className="servi"/>
        </div>
        <div className="s-item">
          <p>Support & Continuous Improvement</p>
          <img src={webdes} alt="" className="servi"/>
        </div>
        <div className="s-item">
          <p>Warehouse Process Optimization</p>
          <img src={appdesign} alt="" className="servi"/>
        </div>
      </div>
    </div>
  );
}

export default serv;
