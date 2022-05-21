import React, { useState } from 'react';
import { toast } from 'react-toastify';
import get from 'lodash.get';
import {
  ListItem,
  ItemThumbNail,
  ItemName,
  UpperContainer,
  DeleteInput,
  ConfirmContainer,
  ConfirmButtons,
} from './BookList.styled';
import {
  ButtonBox,
  LabelBox,
} from '../Common.styled';
import Modal from '../Modal';
import NoImage from '../../assets/no-image.png';
import { useAppContext } from '../../libs/context-lib';
import { APP_ACTIONS } from '../../libs/reducerAction-lib';
import { deleteBook } from '../../libs/services';

export default function Item({ item = {} }) {
  const { state, dispatch } = useAppContext();
  const [imageFailed, setImageFailed] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const onDeleteClicked = () => {
    setModalVisible(true);
  };

  const onDeleteConfirmed = async () => {
    setLoading(true);
    try {
      await deleteBook(item.id);
      const newBooks = state.books.filter((book) => book.id !== item.id);
      dispatch({ type: APP_ACTIONS.RESET_BOOK_LIST, data: newBooks });
      dispatch({ type: APP_ACTIONS.SET_DIRTY_ORDER, data: false });
      toast('Successfully deleted and reset to original order');
    } catch (err) {
      toast('There was an error');
      // eslint-disable-next-line no-console
      console.log(err);
    } finally {
      setLoading(false);
      setModalVisible(false);
    }
  };

  return (
    <>
      <ListItem>
        <UpperContainer>
          {item.imageUrl && !imageFailed ? (
            <ItemThumbNail src={get(item, 'imageUrl', '')} onError={() => setImageFailed(true)} />
          ) : (
            <ItemThumbNail src={NoImage} alt="unavailable" />
          )}
          <DeleteInput onClick={onDeleteClicked} value="Delete" type="button" />
        </UpperContainer>
        <ItemName>
          {item.title}
        </ItemName>
      </ListItem>
      {modalVisible && (
        <Modal margin="2%" onBackgroundClick={() => setModalVisible(false)}>
          <ConfirmContainer>
            <LabelBox style={{ marginBottom: '10px' }} light large>
              ¿Delete book:
              {' '}
              <br />
              {item.title}
              ?
            </LabelBox>
            {loading ? (
              <LabelBox extraLarge warning>Deleting...</LabelBox>) : (
                <ConfirmButtons>
                  <ButtonBox warning onClick={onDeleteConfirmed}>Delete book</ButtonBox>
                  <ButtonBox style={{ marginLeft: '15px' }} onClick={() => setModalVisible(false)}>Cancel</ButtonBox>
                </ConfirmButtons>
            )}
          </ConfirmContainer>
        </Modal>
      )}
    </>
  );
}
