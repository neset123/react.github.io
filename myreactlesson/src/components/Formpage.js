import React, { useState, useEffect } from 'react';

const FormPage = () => {
  const [name, setName] = useState('');
  const [opinion, setOpinion] = useState('');
  const [opinions, setOpinions] = useState([]);

  useEffect(() => {
    // Retrieve opinions from local storage when the component mounts
    const storedOpinions = localStorage.getItem('opinions');
    if (storedOpinions) {
      setOpinions(JSON.parse(storedOpinions));
    }
  }, []);

  useEffect(() => {
    // Save opinions to local storage whenever the opinions state changes
    localStorage.setItem('opinions', JSON.stringify(opinions));
  }, [opinions]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Save the user's opinion and perform any necessary actions
    const savedName = name;
    const savedOpinion = opinion;

    setOpinions((prevOpinions) => {
      const updatedOpinions = [{ name: savedName, opinion: savedOpinion }, ...prevOpinions];
      if (updatedOpinions.length > 5) {
        updatedOpinions.pop();
      }
      return updatedOpinions;
    });

    setName('');
    setOpinion('');
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <form onSubmit={handleFormSubmit}>
          <h2>Share Your Opinion</h2>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Your User Name
            </label>
            <input
              type="text"
              id="exampleFormControlInput1"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your User Name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Enter your opinion
            </label>
            <textarea
              id="exampleFormControlTextarea1"
              rows="3"
              className="form-control"
              value={opinion}
              onChange={(e) => setOpinion(e.target.value)}
              placeholder="Enter your opinion"
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <button className="btn btn-primary mb-3" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="opinion-container">
        <ol className="list-group list-group-numbered">
          <h2>User Opinions</h2>
          {opinions.length > 0 ? (
            opinions.map((opinionItem, index) => (
              <li className="list-group-item d-flex justify-content-between align-items-start" key={index}>
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{opinionItem.name}</div>
                  {opinionItem.opinion}
                </div>
                <span className="badge bg-primary rounded-pill">
                  <span className="material-symbols-outlined">sentiment_satisfied</span>
                </span>
              </li>
            ))
          ) : (
            <p>No opinions shared yet.</p>
          )}
        </ol>
      </div>
    </div>
  );
};

export default FormPage;
