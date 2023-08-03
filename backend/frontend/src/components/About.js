import React from "react";

const About = () => {
  return (
    <div className="container accordion" id="accordionPanelsStayOpenExample">
      <h2 className="mb-3">Let's start with iNoteReact</h2>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne"
          >
            What is the iNoteReact app?
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseOne"
          className="accordion-collapse collapse show"
        >
          <div className="accordion-body">
            <strong>
              Store all notes and important information digitally, usually in a
              cloud-based storage system.
            </strong>
            It makes note-taking convenient and accessible, and allows you to
            write and study flexibly.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseTwo"
          >
            Use of iNoteReact app
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseTwo"
          className="accordion-collapse collapse"
        >
          <div className="accordion-body">
            <strong>
              iNoteReact App is fast, uses the original author's language, and
              generally feels easier.
            </strong>
            The issue is the content is often poorly assimilated and easily
            forgotten. In contrast, note-making is slower, more involved, and
            uses our own language.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseThree"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseThree"
          >
            It’s accessible
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseThree"
          className="accordion-collapse collapse"
        >
          <div className="accordion-body">
            <strong>
              No matter where your ideas find you, a iNoteReact app allows you to
              write them down.
            </strong>
            This way, you will never have to forget your ideas and plans.
            Additionally, digital-note taking allows you to read and edit
            anywhere you are. This means you don’t have to be by your desk or on
            your computer all day.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseFour"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseFour"
          >
            It’s more interactive
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseFour"
          className="accordion-collapse collapse"
        >
          <div className="accordion-body">
            <strong>
              iNoteReact note-taking lets you customize your writing experience
              to suit your goals and needs.
            </strong>
            If you prefer to include links and images and edit as you write,
            digital note-taking makes it possible, facilitating your study
            process. For example, including URLs in your notes will make it easy
            for you to revisit them for future references. Images make your
            notes more descriptive and easy to consume and visuals can make
            reading a lot easier. Also, photos make it easier to memorize,
            understand, and retain complex concepts.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseFive"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseFive"
          >
            Future scope of iNoteReact
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseFive"
          className="accordion-collapse collapse"
        >
          <div className="accordion-body">
            iNoteReact App Market size is growing at a moderate pace with
            substantial growth rates over the last few years and is estimated
            that the market will grow significantly in the forecasted period
            <strong>i.e. 2022 to 2030.</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
