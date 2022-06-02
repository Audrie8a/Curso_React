import React from "react";

class ExercisesForm extends React.Component {
  render() {
    const { handleChange, form, handleSubmit } = this.props;
    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="title"
              name="title"
              onChange={handleChange}
              value={form.title}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="description"
              name="description"
              onChange={handleChange}
              value={form.description}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="img"
              name="img"
              onChange={handleChange}
              value={form.img}
            />
          </div>
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="leftColor"
                name="leftColor"
                onChange={handleChange}
                value={form.leftColor}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="rightColor"
                name="rightColor"
                onChange={handleChange}
                value={form.rightColor}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ExercisesForm;
