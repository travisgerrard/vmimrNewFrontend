import React, { Component } from 'react';

export default class SpecialistEmailTemplateCreator extends Component {
  state = {
    date: '',
    doctor: '',
    subject: ''
  };

  render() {
    return (
      <div>
        <label htmlFor="date">Date</label>
        <input
          value={this.state.date}
          onChange={e => this.setState({ date: e.target.value })}
        />
        <label htmlFor="doctor">Doctor</label>

        <input
          value={this.state.doctor}
          onChange={e => this.setState({ doctor: e.target.value })}
          label="Doctor"
        />
        <label htmlFor="subject">Subject</label>

        <input
          value={this.state.subject}
          onChange={e => this.setState({ subject: e.target.value })}
          label="Subject"
        />

        <div>
          <p>Subject:</p>
          <p>
            Noon Conference on {this.state.subject} {this.state.date} @ 12:30
          </p>
        </div>
        <br />
        <div>
          <p>Email:</p>
          <p>Dr. {this.state.doctor},</p>
          <p>
            This email is to remind you that you have a resident talk scheduled
            for {this.state.date} at 12:30, on {this.state.subject} in Correa C
          </p>
          <p>
            If you have any slides please send them to me when able so I can
            have them loaded up and ready.
          </p>
          <p> Thanks,</p>
        </div>
      </div>
    );
  }
}
