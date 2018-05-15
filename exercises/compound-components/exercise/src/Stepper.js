import React, { Component } from "react";

export default class Stepper extends Component {

  static ActiveStep = <div>active</div>
  static Status = <div>active</div>
  static Control = ({ title, content, hasPrevious, stepBack, hasNext, stepForward }) => <div className="step">
    <h2>{title}</h2>
    <p>{content}</p>
    <div>
      <button
        className="step-btn"
        disabled={!hasPrevious}
        onClick={stepBack}
      >
        Previous
    </button>
      <button
        className="step-btn"
        disabled={!hasNext}
        onClick={stepForward}
      >
        Next
    </button>
    </div>
  </div>

  state = {
    // Assume that the first step is always active at first.
    activeStepIndex: 0
  };

  findActiveStep = step => {
    return step.id === this.state.activeStepId;
  };

  stepForward = () => {
    this.setState(state => {
      return {
        activeStepIndex: state.activeStepIndex + 1
      };
    });
  };

  stepBack = () => {
    this.setState(state => {
      return {
        activeStepIndex: state.activeStepIndex - 1
      };
    });
  };

  render() {
    const { steps, children } = this.props;
    const { activeStepIndex } = this.state;
    const activeStep = steps[activeStepIndex];
    const hasPrevious = activeStepIndex > 0;
    const hasNext = activeStepIndex < steps.length - 1;
    return (
      <div className="stepper">
        <div className="stepper-status">
          {
            React.Children.map(children,
              child => {
                return React.cloneElement(child,
                  {
                    ...activeStep,
                    hasNext,
                    hasPrevious,
                    stepBack: this.stepBack,
                    stepForward: this.stepForward,
                  })
              })
          }
          {steps.map((step, i) => (
            <React.Fragment key={step.title}>
              <span
                className="status-item"
                onClick={() =>
                  this.setState({
                    activeStepIndex: i
                  })
                }
                style={{ color: i === activeStepIndex ? "#000000" : "#aaaaaa" }}
              >
                {step.title}
              </span>
              {i < steps.length - 1 && <span className="status-divider" />}
            </React.Fragment>
          ))}
        </div>

      </div>
    );
  }
}
