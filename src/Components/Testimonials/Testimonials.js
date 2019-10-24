import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import * as styles from "./Testimonilas.module.css";

class Testimonials extends Component {
  state = {
    currentSlide: 0,
    buttonConfig: [
      { classes: [styles.SelectBtn, styles.Selected] },
      { classes: [styles.SelectBtn] },
      { classes: [styles.SelectBtn] },
      { classes: [styles.SelectBtn] },
      { classes: [styles.SelectBtn] },
      { classes: [styles.SelectBtn] }
    ],
    testimonials: [
      {
        text:
          "Over two years ago I asked family and friends if they knew of a good Christian counselor. I am so delighted that they told me about Jay. From the moment I walked into his office Jay created a welcoming and safe environment where I felt I could be vulnerable and honest about my issues while I learned and grew along my journey. Jay listens intently and has the ability to ask the right questions or helps me see situations fro a different perspective that allows me to find solace and understanding throughout my growth. My relationship with Christ has grown as a result of our conversations and I cannot thank him enough for all he continued to do for me. Jay in an outstanding counselor. He is down to earth, realistic, loves God and has a passion for helping others.",
        name: "Talia R."
      },
      {
        text:
          "Jay's kind heart, strong faith and wisdom has gotten me through a lot of tough situations in my life. I am so grateful for his guidance and advice.",
        name: "Debbie W."
      },
      {
        text:
          "I am very thankful for Jay’s coaching and advice.  He speaks from life experience and applies Biblical truths.  I have gone to see Jay for help with parenting and have also seen him when I was dealing with a time of fear and anxiety.  It was very helpful to talk to him.  I left our sessions with a plan that gave me peace that I could do something positive about the situation and not be stuck in the worry and fear.  Thanks Jay!",
        name: "Jon D."
      },
      {
        text:
          "Do you have a child at home who taps out drum beats on the kitchen table and around the house?  We have one! Jay was our son’s 7th grade science teacher at Pioneer Family Academy.  In the beginning of school, Jay mentioned that he taught drums – and we jumped at the opportunity to have our son take lessons and try them out. Jay is an excellent drum teacher!  I highly recommend him.  He knows how to help students learn to play by feel and consistent practice of drum rudiments, songs, and exercises.  Song learning was done through careful listening and breaking down pieces of the song.  Jay has his studio set up with drum kits facing each other.  My son would watch him play and then play it back.  My son enjoyed drum lessons and Jay kept him motivated with a variety of things to work on, fun beats, and watching youtube clips of different drummers. It has been a great thrill to watch and hear our son play drums over the past several years!  My wife and I always enjoy seeing him play in different bands and worship teams.  He loves to play the drums and I thank Jay for teaching him and encouraging him during his early days of playing in church youth group.  Jay is also a very personable guy and I am thankful to have gotten to know him over the years and I consider him a good friend.",
        name: "Phil R."
      },
      {
        text:
          "We would recommend taking drum lessons with Jay to anyone who wants to learn, no matter your level of experience!  Our son had never played before and has now been studying with Jay for over 4 years.  He has learned so much during that time, and it's such a blessing to see how much he enjoys playing.  Jay has a way of making each lesson fun, and he engages his students by allowing them to bring in music that interests them. and every lesson!  And that's why when our son was struggling with some anxiety issues we didn't hesitate to ask Jay to have a counseling session with him, and his insights and help he had for our son and for us as parents continues to be a blessing to us today.",
        name: "Andrea M."
      },
      {
        text:
          'While going through my divorce, my attorney suggested I contact Jay.  I\'m really glad I did, as he helped me develop a perspective that has allowed me to actually become friendly with my ex, which has been really beneficial not only to me, but to my kids as well.  Our co-parenting is working out really well, and I go see Jay every once in a while for a "tune-up" which helps me stay on track.',
        name: "Randy L."
      }
    ]
  };

  // variable to hold the setInterval function
  testSlider = null;

  //starts the slider with setInterval
  componentDidMount = () => {
    this.testSlider = setInterval(() => {
      this.switchSlide(true);
    }, 7000);
  };

  // clearInterval upon unmounting
  componentWillUnmount = () => {
    clearInterval(this.testSlider);
  };

  // increments testimonial slider without clearInterval
  switchSlide = auto => {
    this.onForwardClickHandler(auto);
  };

  // decrements testimonial slider and runs clearInterval
  onBackClickHandler = () => {
    this.updateSlideCount("backward");
    clearInterval(this.testSlider);
  };

  // increments testimonial slider and runs clearInterval
  onForwardClickHandler = auto => {
    this.updateSlideCount("forward");
    if (!auto) {
      clearInterval(this.testSlider);
    }
  };

  // updates testimonial slider based on which button is clicked
  updateSelectedHandler = e => {
    this.updateClassesAndSlide(e.target.dataset["num"]);
    clearInterval(this.testSlider);
  };

  // handles button class update and testimonial slide update
  updateClassesAndSlide = num => {
    let newButtonConfig = [
      { classes: [styles.SelectBtn] },
      { classes: [styles.SelectBtn] },
      { classes: [styles.SelectBtn] },
      { classes: [styles.SelectBtn] },
      { classes: [styles.SelectBtn] },
      { classes: [styles.SelectBtn] }
    ];
    newButtonConfig[num] = {
      classes: [styles.SelectBtn, styles.Selected]
    };
    this.setState({
      currentSlide: num,
      buttonConfig: newButtonConfig
    });
  };

  // based on direction handles logic for slider
  updateSlideCount = direction => {
    let curSlide = this.state.currentSlide;
    if (direction === "forward") {
      if (curSlide >= this.state.testimonials.length - 1) {
        this.updateClassesAndSlide(0);
      } else {
        curSlide++;
        this.updateClassesAndSlide(curSlide);
      }
    } else {
      if (curSlide <= 0) {
        this.updateClassesAndSlide(this.state.testimonials.length - 1);
      } else {
        curSlide--;
        this.updateClassesAndSlide(curSlide);
      }
    }
  };

  render() {
    return (
      <Fragment>
        <div className={styles.Testimonials}>
          <div className={styles.Wrapper}>
            <FontAwesomeIcon
              icon={faChevronLeft}
              onClick={this.onBackClickHandler}
              className={styles.ChevBtn}
            />
            <div className={styles.Testimonial}>
              <FontAwesomeIcon className={styles.Icon} icon={faQuoteLeft} />
              <div>
                <p>{this.state.testimonials[this.state.currentSlide].text}</p>
                <h6>
                  -{this.state.testimonials[this.state.currentSlide].name}
                </h6>
              </div>
            </div>
            <FontAwesomeIcon
              onClick={() => this.onForwardClickHandler(false)}
              icon={faChevronRight}
              className={styles.ChevBtn}
            />
          </div>
        </div>
        <div className={styles.Controls}>
          {this.state.buttonConfig.map((button, i) => {
            return (
              <button
                key={i}
                data-num={i}
                onClick={this.updateSelectedHandler}
                className={button.classes.join(" ")}
              ></button>
            );
          })}
        </div>
      </Fragment>
    );
  }
}

export default Testimonials;
