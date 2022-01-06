import "./intro.css";
import Coder from '../../images/coder.png'

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is </h2>
                    <h1 className="i-name">Christian Awelakoue</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Linux SysAdmin</div>
                            <div className="i-title-item">Front-End Developer</div>
                            <div className="i-title-item">Aspiring DevOps</div>
                        </div>
                    </div>

                    <p className="i-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, harum?
                    </p>
                </div>
                {/* <svg
                width='75'
                height='75'
                viewBox="0 0 75 75"
                fill='none'
                stroke="black"
                className="i-scroll"
                xmlns= 
                >

                </svg> */}
            </div>{/* end of i-left */}

            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Coder} alt="" className="i-img" />
            </div>{/* end of  i-left */}
        </div>
    );
}

export default Intro;