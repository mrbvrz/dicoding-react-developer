/* eslint-disable react/prop-types */
import autoBind from 'auto-bind';
import React from "react";

class CatatanAdd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      titleMaxLength: 50,
    };

    autoBind(this);
  }

  onKeyUpTitleEventHandler(e) {
    this.setState((previousState) => {
      let titleMaxLength = previousState.titleMaxLength;
      const title = e.target.value;

      titleMaxLength = 50 - (title.length);

      if(((e.keyCode >= 65 && e.keyCode <= 90) ||
      (e.keyCode >= 97 && e.keyCode <= 122) ||
      (e.keyCode >= 48 && e.keyCode <= 57) ||
      (e.keyCode >= 96 && e.keyCode <= 111) ||
      (e.keyCode >= 186 && e.keyCode <= 222) ||
      (e.keyCode === 8 || e.keyCode === 61 || e.keyCode === 173 || e.keyCode === 59)) &&
      (titleMaxLength <= 50 && titleMaxLength >= 0)){
        return {
          title,
          titleMaxLength,
        };
      }
    });
  }

  onChangeTitleEventHandler(e) {
    const title = e.target.value;
    this.setState({ title });
  }

  onChangeBodyEventHandler(e) {
    const body = e.target.value;
    this.setState({ body });
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.addNote(this.state);
    this.setState({ 
      title: '',
      body: '',
      titleMaxLength: 50,
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler} className="catatan-add">
        <div>
          <div className="catatan-add__title__label">
            <label htmlFor="title">Judul</label>
            <p className="catatan-add__textarea__character">Karakter : {this.state.titleMaxLength}</p>
          </div>
          <input type="text" id="title" className="catatan-add__input" value={this.state.title} maxLength={50} 
            onChange={this.onChangeTitleEventHandler}
            onKeyUp={this.onKeyUpTitleEventHandler} placeholder="Masukkan judul catatan"/>
        </div>
        <div>
        <div className="catatan-add__title__label">
          <label htmlFor="body">Isi</label>
          </div>
          <textarea cols="30" id="body" rows="10" className="catatan-add__textarea" value={this.state.body}
            onChange={this.onChangeBodyEventHandler} placeholder="Masukkan catatan anda"></textarea>
        </div>
        <button type="submit" className="catatan-add__button__save">Simpan catatan</button>
      </form>
    );
  }
}

export default CatatanAdd;