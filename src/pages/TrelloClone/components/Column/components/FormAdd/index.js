import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as TaskCreators } from '~/store/ducks/task';

import { Content } from './style';

const FormAdd = ({ column, previous, onRequestClose, taskAdd }) => {
  const [form, setForm] = React.useState({});

  console.log('TENHO O ULTIMO', previous);

  function handleSubmit(e) {
    e.preventDefault();

    if (form.title && form.message) {
      // console.tron.log('ESTOU ENVIANDO', form);
      // console.log('ESTOU ENVIANDO', form);
      taskAdd({ ...form, column, previous: previous.id, next: null });
    }

    onRequestClose();
  }

  function handleForm(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // console.log('EDITANDO', form, name, value);
  }

  return (
    <Content onSubmit={handleSubmit}>
      <input
        type="text"
        name={'title'}
        placeholder={'title'}
        onChange={handleForm}
      />
      <input
        type="text"
        name={'message'}
        placeholder={'message'}
        onChange={handleForm}
      />
      <button type="submit">ADD</button>
    </Content>
  );
};

const mapStateToProps = state => ({
  total: state.task.data.length,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ taskAdd: TaskCreators.taskAdd }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FormAdd);
