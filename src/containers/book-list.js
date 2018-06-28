import React, {Component} from 'react';
import { connect } from 'react-redux'

class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li key={book.tittle} className="list-group-item">{book.tittle}</li>
      );
    });
  }

  render() {
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state){
  //whatever is returned will show up as mapStatToProps
  //inside of BookList
  return {
    books: state.books // this is the connection between redux and the container
  };
}

export default connect (mapStateToProps)(BookList);
