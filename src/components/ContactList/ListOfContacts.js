import { ListItem, DeleteBtn } from "./ListOfContacts.styled";

export default function ListOfContacts({contacts, onDelete}) {
    return (
      <>
      <ul>
        {contacts.map(contItem => {
          const { id, name, number } = contItem;
          return (
            <ListItem key={id}>
              <p>
                {name}: {number}
              </p>
              <DeleteBtn type='button' onClick={() => onDelete(id)}>Delete</DeleteBtn>
            </ListItem>
          );
        })}
      </ul>
      </>
    );
  }
  