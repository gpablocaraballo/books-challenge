/* eslint-disable no-console */
/* eslint-disable react/jsx-no-constructed-context-values */
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SortableContainer } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';
import './App.css';
import { AppContext } from './libs/context-lib';
import { useAppReducer } from './libs/reducer-lib';
import BookList from './components/BookList';
import AppLayout from './components/AppLayout';
import { getBooks, updateOrderById } from './libs/services';
import { APP_ACTIONS } from './libs/reducerAction-lib';
import {
  AppContainer,
  Container,
  ButtonBox,
} from './components/Common.styled';
import LoadingImage from './assets/loading.svg';

const SortableList = SortableContainer(BookList);

function App() {
  const [state, dispatch] = useAppReducer();
  const [loading, setLoading] = useState(false);

  const onSortEnd = (e) => {
    const newBooks = arrayMoveImmutable(state.sortered_books, e.oldIndex, e.newIndex);
    dispatch({ type: APP_ACTIONS.SET_BOOK_LIST, data: newBooks });
    dispatch({ type: APP_ACTIONS.SET_DIRTY_ORDER, data: true });
  };

  const loadData = async () => {
    setLoading(true);
    try {
      const res = await getBooks();
      dispatch({ type: APP_ACTIONS.RESET_BOOK_LIST, data: res.books });
    } catch (err) {
      toast('There was an error');
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const onApplyClicked = async () => {
    setLoading(true);
    try {
      await Promise.all(
        state.sortered_books.map(
          (book, i) => updateOrderById(book.id, i),
        ),
      )
        .then(() => {
          toast('New Order applied!!!');
          dispatch({ type: APP_ACTIONS.RESET_BOOK_LIST, data: state.sortered_books });
        });
    } catch (err) {
      toast('There was an error');
      console.log(err);
    } finally {
      setLoading(false);
      dispatch({ type: APP_ACTIONS.SET_DIRTY_ORDER, data: false });
    }
  };

  const resetDefaults = () => {
    dispatch({ type: APP_ACTIONS.SET_BOOK_LIST, data: state.books });
    dispatch({ type: APP_ACTIONS.SET_DIRTY_ORDER, data: false });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <AppContainer>
        <AppLayout>
          {loading ? (
            <img src={LoadingImage} alt="Loading books" width="200px" />
          ) : (
            <Container>
              {state.dirtyOrder && (
                <>
                  <ButtonBox onClick={onApplyClicked}>Apply new order</ButtonBox>
                  <ButtonBox cancel style={{ marginTop: '20px' }} onClick={resetDefaults}>Reset to original order</ButtonBox>
                </>
              )}
              <SortableList onSortEnd={onSortEnd} axis="xy" />
            </Container>
          )}
        </AppLayout>
      </AppContainer>
      <ToastContainer hideProgressBar={false} />
    </AppContext.Provider>
  );
}

export default App;
