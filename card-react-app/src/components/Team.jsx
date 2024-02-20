import React from 'react';

const Team = () => {
    const teamMembers = [
        {
            name: 'Kay Garland',
            role: 'Lead Designer',
            imageUrl: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
        },
        {
            name: 'Larry Parker',
            role: 'Lead Marketer',
            imageUrl: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
        },
        {
            name: 'Diana Pertersen',
            role: 'Lead Developer',
            imageUrl: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
        },
    ];

    return (
        <>
            <section id="team" className="bg-light-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading">Our Amazing Team</h2>
                            <h3 className="section-subheading text-muted">
                                Lorem ipsum dolor sit amet consectetur.
                            </h3>
                        </div>
                    </div>
                    <div className="row">
                        {teamMembers.map((member, index) => (
                            <div className="col-sm-4" key={index}>
                                <div className="team-member">
                                    <img
                                        src={member.imageUrl}
                                        className="img-responsive img-circle"
                                        alt={member.name}
                                    />
                                    <h4>{member.name}</h4>
                                    <p className="text-muted">{member.role}</p>
                                    <ul className="list-inline social-buttons">
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-twitter"></i> {/* Font Awesome Twitter Icon */}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-facebook"></i> {/* Font Awesome Facebook Icon */}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-linkedin"></i> {/* Font Awesome LinkedIn Icon */}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 text-center">
                            <p className="large text-muted">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                                eaque, laboriosam veritatis, quos non quis ad perspiciatis,
                                totam corporis ea, alias ut unde.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Team;
