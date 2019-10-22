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
          "I am very thankful for Jay’s coaching and advice.  He speaks from life experience and applies Biblical truths.  I have gone to see Jay to help me work through a period in my life where I had a child making poor choices and I needed help with how to work through this.  I have also seen Jay when I was dealing with a time of fear and anxiety.  It was very helpful to talk to him.  I left our sessions with a plan that gave me peace that I could do something positive about the situation and not be stuck in the worry and fear.  Thanks Jay!",
        name: "Phil R."
      }
    ]
  };

  testSlider = null;

  componentDidMount = () => {
    this.testSlider = setInterval(() => {
      this.switchSlide(true);
    }, 7000);
  };

  componentWillUnmount = () => {
    clearInterval(this.testSlider);
  };

  switchSlide = auto => {
    this.onForwardClickHandler(auto);
  };

  onBackClickHandler = () => {
    let newButtonConfig = [
      { classes: [styles.SelectBtn] },
      { classes: [styles.SelectBtn] },
      { classes: [styles.SelectBtn] }
    ];
    if (this.state.currentSlide <= 0) {
      newButtonConfig[2] = { classes: [styles.SelectBtn, styles.Selected] };
      this.setState({ currentSlide: 2, buttonConfig: newButtonConfig });
    } else {
      let curSlide = this.state.currentSlide;
      curSlide--;
      newButtonConfig[curSlide] = {
        classes: [styles.SelectBtn, styles.Selected]
      };
      this.setState({ currentSlide: curSlide, buttonConfig: newButtonConfig });
    }
    clearInterval(this.testSlider);
  };

  onForwardClickHandler = auto => {
    let newButtonConfig = [
      { classes: [styles.SelectBtn] },
      { classes: [styles.SelectBtn] },
      { classes: [styles.SelectBtn] }
    ];
    if (this.state.currentSlide >= 2) {
      newButtonConfig[0] = { classes: [styles.SelectBtn, styles.Selected] };
      this.setState({ currentSlide: 0, buttonConfig: newButtonConfig });
    } else {
      let curSlide = this.state.currentSlide;
      curSlide++;
      newButtonConfig[curSlide] = {
        classes: [styles.SelectBtn, styles.Selected]
      };
      this.setState({ currentSlide: curSlide, buttonConfig: newButtonConfig });
    }
    if (!auto) {
      clearInterval(this.testSlider);
    }
  };

  updateSelectedHandler = e => {
    let newButtonConfig = [
      { classes: [styles.SelectBtn] },
      { classes: [styles.SelectBtn] },
      { classes: [styles.SelectBtn] }
    ];
    newButtonConfig[e.target.dataset["num"]] = {
      classes: [styles.SelectBtn, styles.Selected]
    };
    this.setState({
      currentSlide: e.target.dataset["num"],
      buttonConfig: newButtonConfig
    });
    clearInterval(this.testSlider);
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
          <button
            data-num={0}
            onClick={this.updateSelectedHandler}
            className={this.state.buttonConfig[0].classes.join(" ")}
          ></button>
          <button
            data-num={1}
            onClick={this.updateSelectedHandler}
            className={this.state.buttonConfig[1].classes.join(" ")}
          ></button>
          <button
            data-num={2}
            onClick={this.updateSelectedHandler}
            className={this.state.buttonConfig[2].classes.join(" ")}
          ></button>
        </div>
      </Fragment>
    );
  }
}

export default Testimonials;
