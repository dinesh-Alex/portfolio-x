import photo from "../myphoto.png";
import "../components/mediaq.css";
function home() {
  return (
    <div id="homec">
      <div id="leftp">
        <p class="line-1 anim-typewriter">I'm Dinesh Amiti </p>
        <p> SAP EWM Functional Consultant</p>
        <p>
        Motivated SAP EWM Functional Consultant with hands-on experience in decentralized and
          S/4HANA embedded environments, contributing to implementation, rollout, and support projects. 
          Possess a strong understanding of warehouse management processes and integration with ERP systems. 
          Experienced in requirement gathering, process design, testing, and post-go-live support activities.
          A quick learner with strong analytical and problem-solving skills, able to collaborate effectively within teams
          and deliver quality results.
        </p>
      </div>
      <div  id="rightp">
        <img src={photo} alt="profile" id="photo" />
        
      </div>
    </div>
  );
}

export default home;
