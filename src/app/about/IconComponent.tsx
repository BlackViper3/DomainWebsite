import { IconType } from "react-icons";
import techIconStyles from "@styles/techiconstyles.module.css";


const IconComponent: React.FC<{ icon: IconType;  dataTip:String }> = (props) => {
    return (
      <div className="tooltip tooltip-bottom" data-tip={props.dataTip}>
        <div className={` ${techIconStyles.techIcons} `}>
          <props.icon />
        </div>
      </div>
    );
  };

export default IconComponent;