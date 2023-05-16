import React from "react";
import "./Evidence.css";

const Evidence = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="evidence_left">
            <h3>Evidence of Buddhism</h3>
            <p>
              In current Buddhist society, the top Buddhist role models have
              iron wills, but lack real ACTION or PURPOSE behind this because of
              a misinterpretation of Dharma. Buddha’s four main vows tell a
              different story of how the Buddha should act.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="evidence_right">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    The Bodhisattva Vows exist in many different forms
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    {" "}
                    1.Creations are numberless, I vow to free them.
                    <br />
                    2.Delusions are inexhaustible, I vow to transform them.
                    <br />
                    3.Reality is boundless, I vow to perceive it.
                    <br />
                    4.The awakened way is unsurpassable, I vow to embody it.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    It’s also said in this way.
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    1.Living beings are limitless, I vow to liberate them all.
                    <br />
                    2.Blind passions are limitless, I vow to sever them all.
                    <br />
                    3.Dharma gates are inexhaustible, I vow to know them all.
                    <br />
                    4.Unsurpassed is awakening, I vow to realize it.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    The most laymen terms:
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    1.To save all people
                    <br />
                    2.To renounce all worldly desires
                    <br />
                    3.To learn all teachings
                    <br />
                    4.To attain perfect enlightenment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Evidence;
