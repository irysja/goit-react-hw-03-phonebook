/*import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

const ContactForm = ({ handleNameChange, handleNumberChange, handleSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameInputChange = (event) => {
    setName(event.target.value);
    handleNameChange(event.target.value);
  };

  const handleNumberInputChange = (event) => {
    setNumber(event.target.value);
    handleNumberChange(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    // Name validation
    if (name.trim() === '') {
      alert('Please enter a valid name.');
      return;
    }

    // Phone number validation
    const numberPattern = /^[+]?[0-9]+([-.() ]?[0-9]+)*$/;
    if (!numberPattern.test(number)) {
      alert('Please enter a valid phone number.');
      return;
    }

    handleSubmit(name, number);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmitForm}>
      <div className={styles.inputContainer}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleNameInputChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="number">Number</label>
        <input
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleNumberInputChange}
        />
      </div>
      <div className={styles.buttonContainer}>
        <button type="submit">Add Contact</button>
      </div>
    </form>
  );
};

ContactForm.propTypes = {
  handleNameChange: PropTypes.func.isRequired,
  handleNumberChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default ContactForm;*/

/*import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
  }

  handleNameInputChange = (event) => {
    const newName = event.target.value;
    this.setState({ name: newName });
    this.props.handleNameChange(newName);
  };

  handleNumberInputChange = (event) => {
    const newNumber = event.target.value;
    this.setState({ number: newNumber });
    this.props.handleNumberChange(newNumber);
  };

  handleSubmitForm = (event) => {
    event.preventDefault();

    const { name, number } = this.state;

    // Name validation
    if (name.trim() === '') {
      alert('Please enter a valid name.');
      return;
    }

    // Phone number validation
    const numberPattern = /^[+]?[0-9]+([-.() ]?[0-9]+)*$/;
    if (!numberPattern.test(number)) {
      alert('Please enter a valid phone number.');
      return;
    }

    this.props.handleSubmit(name, number);
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={styles.container} onSubmit={this.handleSubmitForm}>
        <div className={styles.inputContainer}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleNameInputChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="number">Number</label>
          <input
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleNumberInputChange}
          />
        </div>
        <div className={styles.buttonContainer}>
          <button type="submit">Add Contact</button>
        </div>
      </form>
    );
  }
}

ContactForm.propTypes = {
  handleNameChange: PropTypes.func.isRequired,
  handleNumberChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default ContactForm;*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
  }

  handleNameInputChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleNumberInputChange = (event) => {
    this.setState({ number: event.target.value });
  };

  handleSubmitForm = (event) => {
    event.preventDefault();

    const { name, number } = this.state;

    // Name and number validation
    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter a valid name and phone number.');
      return;
    }

    this.props.handleSubmit(name, number);

    // Reset form fields
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={styles.container} onSubmit={this.handleSubmitForm}>
        <div className={styles.inputContainer}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces."
            required
            value={name}
            onChange={this.handleNameInputChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="number">Number</label>
          <input
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleNumberInputChange}
          />
        </div>
        <div className={styles.buttonContainer}>
          <button type="submit">Add Contact</button>
        </div>
      </form>
    );
  }
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ContactForm;


