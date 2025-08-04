const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <img 
            src="/profile.jpg" 
            alt="Albert's Profile" 
            className="profile-image"
          />
          <h1>Albert</h1>
          <p>
            Full-Stack Developer & Software Engineer
          </p>
          <p>
            Passionate about creating secure, scalable, and impactful projects that better the people around me.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;