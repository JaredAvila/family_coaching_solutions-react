import React from "react";

import Card from "./Card/Card";

import classes from "./Services.css";

const Services = () => {
  const cards = [
    {
      title: "Counseling/Life Coaching",
      icon: "accessibility_new",
      paragraph:
        "I can assist you in bringing out the best YOU... through compassion, awareness, encouragement and support. If you're going through rough times, you need to understand how it affects your children. There are ways to handle this while keeping your children's best interests at heart. I can help you develop a Co-Parenting Plan that will work for you."
    },
    {
      title: "Parenting Clashes",
      icon: "offline_bolt",
      paragraph:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam amet dolorem officiis ea pariatur. Asperiores delectus quae maxime excepturi id eius sed quidem, consequuntur tempore ipsum cum deleniti mollitia quo quas modi quibusdam ipsam voluptates. Aspernatur molestiae laudantium vitae repellendus, rem est et, ipsam suscipit accusantium numquam unde nostrum dolores."
    },
    {
      title: "Mentoring",
      icon: "supervisor_account",
      paragraph:
        " Most of my work with Father Matters, an organization committed to building stronger and healthier communities by supporting, encouraging, and enlightening today’s fathers and families, has involved mentoring other men and fathers. Let's deal with the issues holding you back!"
    }
  ];
  return (
    <section id="section-about" className={classes.Services}>
      <h2 className={classes.Heading}>
        How can Family Coaching Solutions help you...
      </h2>
      <div className={classes.Spacer} />
      <div className={classes.Cards}>
        {cards.map(card => (
          <Card
            key={card.title}
            title={card.title}
            icon={card.icon}
            paragraph={card.paragraph}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
