import React, { Component } from "react";

import * as styles from "./Testimonilas.module.css";

class Testimonials extends Component {
  state = {
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
  switchSlide = () => {
    setInterval();
  };
  render() {
    return (
      <div className={styles.Testimonials}>
        <h1>Testimonials Slider!</h1>
      </div>
    );
  }
}

export default Testimonials;
