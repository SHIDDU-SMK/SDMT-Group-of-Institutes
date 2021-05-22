import React, { Component } from 'react';


class About extends Component {
  render() {
        return (
                <div className="container marketing" id="about">  
                    <div className="row featurette">
                        <div className="col-md-6">
                            <h2 className="featurette-heading">
                                About Us.
                            </h2>
                            <p>
                                SDMT's Ayurvedic Medical College & Research Centre started with the sole intension of providing quality Ayurvedic medical education to produce the physicians & surgeon to serve the humanity in more holistic way.  
                            </p>
                            <p>
                                The institution is started in the year 2005 in the name of late Shree Sidramappa Shasappa Danigond under Danigond Group Of Institutes (DGI) who was pioneer of the education in the region around the Terdal.
                            </p>
                            <p>
                                Walking on the pathway, laid down by the father, the son Dr. M. S. Danigond well known surgeon, pediatrician & educationist dream of bringing Ayurvedic education and treatment of Ayurvedic to people in the rural areas.
                            </p>
                        </div>
                        <div className="col-md-6 about-us-image" style={{marginTop:'100px', float:'right'}}>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/xnpLjSjpVmY?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" autoplay allowfullscreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            );
        }
    }
  export default About;