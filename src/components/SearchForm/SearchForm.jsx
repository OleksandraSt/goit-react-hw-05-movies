import PropTypes from 'prop-types';
import {Form,Input,SearchButton } from './SearchForm.styled';

const SearchForm = ({ onSubmit, value }) => {
    
    const handleSubmit = e => {
      e.preventDefault();
       const form = e.target;
      onSubmit(form.elements.query.value);
      form.reset();
    };
  
      return (
             <>
        <Form onSubmit={handleSubmit}>
          <Input type="text" name="query" defaultValue={value}/>
          <SearchButton type="submit">Search</SearchButton>
        </Form>
        
      </>
      )
  }

  SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  };
  
  export default SearchForm;