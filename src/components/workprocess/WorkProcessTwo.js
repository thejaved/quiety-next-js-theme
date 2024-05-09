import React from "react";
import { FiTruck } from "react-icons/fi";
import { RiNodeTree } from "react-icons/ri";
import { FaBezierCurve, FaLayerGroup } from "react-icons/fa";

const WorkProcessTwo = () => {
  return (
    <section className="work-process ptb-120 bg-dark text-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-6">
            <div className="section-heading text-center">
              <h2>We Follow Our Work Process</h2>
              <p>
                Conveniently mesh cooperative services via magnetic outsourcing.
                Dynamically grow value whereas accurate e-commerce parallel
                quality vectors.
              </p>
            </div>
          </div>
        </div>
        <div className="row d-flex align-items-center">
          <div className="col-md-6 col-lg-3">
            <div className="process-card-two text-center px-4 py-lg-5 py-4 rounded-custom">
              <div className="process-icon border border-light bg-custom-light rounded-custom p-3">
                <i className="far fa-2x">
                  <RiNodeTree />
                </i>
              </div>
              <h3 className="h5">Research</h3>
              <p className="mb-0">
                Progressively benchmark for the prospective results
                relationships.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="process-card-two text-center px-4 py-lg-5 py-4 rounded-custom">
              <div className="process-icon border border-light bg-custom-light rounded-custom p-3">
                <i className="far fa-2x">
                  {" "}
                  <FaBezierCurve />
                </i>
              </div>
              <h3 className="h5">Designing</h3>
              <p className="mb-0">
                Efficiently evisculate an grow your of mindshare through.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="process-card-two text-center px-4 py-lg-5 py-4 rounded-custom">
              <div className="process-icon border border-light bg-custom-light rounded-custom p-3">
                <i className="far fa-2x">
                  <FaLayerGroup />
                </i>
              </div>
              <h3 className="h5">Building</h3>
              <p className="mb-0">
                Credibly maintain magnetic partnerships whereas users.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="process-card-two text-center px-4 py-lg-5 py-4 rounded-custom">
              <div className="process-icon border border-light bg-custom-light rounded-custom p-3">
                <i className="far fa-2x">
                  {" "}
                  <FiTruck />
                </i>
              </div>
              <h3 className="h5">Deliver</h3>
              <p className="mb-0">
                Rapidiously for enterprise-wide niche markets communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessTwo;
