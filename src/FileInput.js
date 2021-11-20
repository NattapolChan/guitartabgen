import React from 'react'
import ReactDOM from 'react-dom'


class FileInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.fileInput = React.createRef();
    }
    handleSubmit(event) {
      event.preventDefault();
      this.props.handleFile()
      alert(
        `Selected file - ${this.fileInput.current.files[0].name}`
      );
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} className = "handleinputfile">
          <label>
          Upload here:
            <input type="file" ref={this.fileInput} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      );
    }
  }

  export default FileInput;
  
  ReactDOM.render(
    <FileInput />,
    document.getElementById('root')
  );