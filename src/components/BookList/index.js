import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import {
  Container,
  BookContainer,
  ListContainer,
} from './BookList.styled';
import {
  LabelBox,
} from '../Common.styled';
import Item from './Item';
import { useAppContext } from '../../libs/context-lib';

const SortableItem = SortableElement(Item);

export default function BookList() {
  const { state } = useAppContext();

  return (
    <Container>
      <BookContainer>
        <ListContainer>
          {(state.sortered_books && state.sortered_books.length > 0) ? (
            <>
              {state.sortered_books.map((row, i) => (
                <SortableItem index={i} key={row.id} item={row} />
              ))}
            </>
          ) : (state.sortered_books
              && state.sortered_books.length === 0) && <LabelBox>No items found.</LabelBox>}
        </ListContainer>
      </BookContainer>
    </Container>
  );
}
