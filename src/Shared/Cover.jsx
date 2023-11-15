import { Parallax  } from 'react-parallax';


const Cover = ({ img, title, subtitle }) => {
    return (

        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero h-[500px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md bg-black px-5 py-10 opacity-50">
                        <h1 className="mb-5 text-5xl font-bold font-Chinzel text-white">{title}</h1>
                        <p className="">{subtitle}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;