import VideoPlayer from "./VideoPlayer";
import './componentcss/sectionmarketing.css'

const SectionMarketing = () => {
  return (
    <div className="fullwidth orange">
      <div className="teal">
        <div className="marketing-text">
          <h4>Fun and Modern Designs that Will Blow Your Mind!</h4>
          <p class="">
            Are you tired of the same old boring balloon animals and swords?
            Look no further! Kevin is a world-renowned balloon artist with over
            10 years of experience perfecting his
            craft.
          </p>
          <p class="">
          His
            unique and modern designs have wowed audiences all around the world. In 2022 alone, Kevin twisted balloons as far away as
            Croatia, South Africa, Mexico, Botswana, and even at 30,000 ft in the air! 
          </p>
          <p class="">
            So why settle for anything less than the best? Let Kevin bring his
            world-famous balloon art to your next event and make it an
            unforgettable experience that your guests will be talking about for
            years to come. Don't wait, book him now before it's too late!
          </p>
        </div>
        <VideoPlayer className="videoplayer"/>
      </div>
    </div>
  );
};

export default SectionMarketing;
