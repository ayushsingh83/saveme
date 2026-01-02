import "./SidebarLogo.css"
import Logo from '../../assets/SaveMeLogo.png';
import Title from '../../assets/SaveMeTitle.png';

const SidebarLogo = () => {
    return (
        <div className="app-name-logo">
            <div className="heading-container">
                <img src={Logo} alt="SaveMe Logo" className="saveme-logo" />
                <img src={Title} alt="SaveMe Title" className="saveme-title" />
            </div>
        </div>
    );

}
export default SidebarLogo;