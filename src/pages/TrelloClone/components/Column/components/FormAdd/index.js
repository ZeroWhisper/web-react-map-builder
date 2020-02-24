import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as TaskCreators } from '~/store/ducks/task';

import { Content } from './style';

const FormAdd = ({ column, onRequestClose, taskAdd, position }) => {
  const [form, setForm] = React.useState({});

  function handleSubmit(e) {
    e.preventDefault();

    if (form.title && form.message) {
      taskAdd({ ...form, column, position });
    }

    onRequestClose();
  }

  function handleForm(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
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
  bindActionCreators(
    {
      taskAdd: TaskCreators.taskAdd,
      taskUpdate: TaskCreators.taskUpdate,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(FormAdd);
