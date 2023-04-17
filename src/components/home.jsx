import photo from "../myphoto.png";
import "../components/mediaq.css";
function home() {
  return (
    <div id="homec">
      <div id="leftp">
        <p class="line-1 anim-typewriter">I'm Dinesh Amiti </p>
        <p> Web developer</p>
        <p>
          Proficient in an assortment of technologies like JavaScript , ReactJs.
          Able to effectively self-manage during independent projects, as well
          as collaborate in a team setting.
        </p>
      </div>
      <div  id="rightp">
        <img src={photo} alt="profile" id="photo" />
        
      </div>
    </div>
  );
}

export default home;
