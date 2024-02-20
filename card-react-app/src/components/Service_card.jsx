import React from 'react';

const serviceData = [
  {
    icon: 'glyphicon glyphicon-tree-conifer',
    title: 'Here is a pokok',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
  },
  {
    icon: 'glyphicon glyphicon-heart',
    title: 'Here\'s a heart',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
  },
  {
    icon: 'glyphicon glyphicon-tint',
    title: 'Waterfall maybe?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
  },
];

const Service_card = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Services</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
        </div>
        <div className="row text-center">
          {serviceData.map((service, index) => (
            <div className="col-md-4" key={index}>
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className={service.icon}></i>
              </span>
              <h4 className="service-heading">{service.title}</h4>
              <p className="text-muted">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service_card;
