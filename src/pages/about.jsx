import image from '/vite.svg'
const About = ({data}) => {
    return (
        <div className="About">
            <img src={image} alt="" />
            <h2>{data}</h2>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi laudantium earum incidunt aspernatur tempora corporis!</span>
        </div>
    )
}

export default About